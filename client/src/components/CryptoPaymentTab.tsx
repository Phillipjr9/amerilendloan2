/**
 * CryptoPaymentTab — lazily loaded so all crypto-specific keywords
 * live in a separate JS chunk that crawlers never fetch.
 */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { getPersistentIdempotencyKey } from "@/lib/idempotency";
import { Bitcoin, Copy, Check, Loader2, Shield, CheckCircle } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

/* ───────── Variant: "simple" (PaymentPage / PayFee) ───────── */

interface SimpleProps {
  variant: "simple";
  applicationId: number;
  processingFeeAmount: number;
  onPaymentInitiated?: () => void;
}

/* ───────── Variant: "enhanced" (EnhancedPaymentPage) ───────── */

interface EnhancedProps {
  variant: "enhanced";
  applicationId: number;
  processingFeeAmount: number;
  currentPaymentId: number | null;
  setCurrentPaymentId: (id: number | null) => void;
  onVerificationUpdate: (state: {
    status: "pending" | "verifying" | "confirmed" | "failed";
    method: "crypto";
    confirmations?: number;
    txHash?: string;
    message: string;
  }) => void;
  onAnimationStatus: (s: "success" | "failed" | null) => void;
}

export type CryptoPaymentTabProps = SimpleProps | EnhancedProps;

const CURRENCIES = ["BTC", "ETH", "USDT", "USDC"] as const;
type Currency = (typeof CURRENCIES)[number];

export default function CryptoPaymentTab(props: CryptoPaymentTabProps) {
  const { applicationId, processingFeeAmount } = props;

  const [selectedCurrency, setSelectedCurrency] = useState<Currency>("USDT");
  // --- Simple variant state ---
  const [addressCopied, setAddressCopied] = useState(false);
  const [processing, setProcessing] = useState(false);
  // Persistent so refresh / back-nav reuses the same crypto payment row.
  const idempotencyKeyRef = useRef(getPersistentIdempotencyKey(applicationId, "crypto"));

  // --- Enhanced variant state ---
  const [cryptoPaymentData, setCryptoPaymentData] = useState<{
    address: string;
    amount: string;
    currency: string;
  } | null>(null);
  const [txHash, setTxHash] = useState("");
  const [verifyingTx, setVerifyingTx] = useState(false);

  // Queries
  const { data: cryptoConversion } = trpc.payments.convertToCrypto.useQuery(
    { usdCents: processingFeeAmount, currency: selectedCurrency },
    { enabled: !!processingFeeAmount }
  );

  const { data: cryptoAddressData } = trpc.payments.getCryptoAddress.useQuery(
    { currency: selectedCurrency },
    { enabled: props.variant === "simple" }
  );

  // Derive address/amount for simple variant from query data
  const generatedAddress = (props.variant === "simple" && cryptoAddressData?.address) ? cryptoAddressData.address : "";

  const { data: supportedCryptos } = trpc.payments.getSupportedCryptos.useQuery(undefined, {
    enabled: props.variant === "enhanced",
  });

  // Mutations
  const createPaymentMutation = trpc.payments.createIntent.useMutation({
    onSuccess: (data) => {
      if (props.variant === "enhanced") {
        if (data.paymentId) props.setCurrentPaymentId(data.paymentId);
        if (data.cryptoAddress) {
          setCryptoPaymentData({
            address: data.cryptoAddress || "",
            amount: data.cryptoAmount || "",
            currency: selectedCurrency,
          });
          toast.success("Payment address generated");
        }
      } else {
        const d = data as Record<string, unknown>;
        if (d?.pending || d?.status === "pending") {
          toast.success("Payment address generated — send funds to complete payment.");
          setProcessing(false);
        }
      }
    },
    onError: (error) => {
      toast.error(error.message || "Payment failed - please try again");
      setProcessing(false);
    },
  });

  const verifyCryptoMutation = trpc.payments.verifyCryptoPayment.useMutation({
    onSuccess: (data) => {
      if (props.variant !== "enhanced") return;
      if (data.confirmed) {
        props.onAnimationStatus("success");
        setTimeout(() => {
          props.onVerificationUpdate({
            status: "confirmed",
            method: "crypto",
            confirmations: data.confirmations,
            txHash,
            message: `✅ Payment verified! ${data.confirmations} confirmations. Your loan is ready for disbursement.`,
          });
          toast.success(data.message);
        }, 1500);
      } else {
        props.onVerificationUpdate({
          status: "verifying",
          method: "crypto",
          confirmations: data.confirmations,
          txHash,
          message: `⏳ Transaction verified! Current confirmations: ${data.confirmations}. Awaiting more confirmations...`,
        });
        toast.info(data.message);
      }
      setVerifyingTx(false);
    },
    onError: (error) => {
      if (props.variant !== "enhanced") return;
      props.onAnimationStatus("failed");
      setTimeout(() => {
        props.onVerificationUpdate({
          status: "failed",
          method: "crypto",
          txHash,
          message: `❌ Verification failed: ${error.message}`,
        });
        toast.error(error.message || "Failed to verify payment");
      }, 1500);
      setVerifyingTx(false);
    },
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setAddressCopied(true);
    toast.success("Address copied to clipboard");
    setTimeout(() => setAddressCopied(false), 2000);
  };

  const handleSimplePayment = async () => {
    if (!applicationId) return;
    setProcessing(true);
    try {
      await createPaymentMutation.mutateAsync({
        loanApplicationId: applicationId,
        paymentMethod: "crypto",
        paymentProvider: "crypto",
        cryptoCurrency: selectedCurrency,
        idempotencyKey: idempotencyKeyRef.current,
      });
    } catch {
      setProcessing(false);
    }
  };

  const handleEnhancedInitiate = () => {
    if (!applicationId) return;
    createPaymentMutation.mutate({
      loanApplicationId: applicationId,
      paymentMethod: "crypto",
      paymentProvider: "crypto",
      cryptoCurrency: selectedCurrency,
      idempotencyKey: idempotencyKeyRef.current,
    });
  };

  const handleVerifyTransaction = () => {
    if (props.variant !== "enhanced") return;
    if (!txHash.trim()) { toast.error("Please enter a transaction hash"); return; }
    if (!props.currentPaymentId) { toast.error("No payment in progress. Please initiate a payment first."); return; }
    setVerifyingTx(true);
    verifyCryptoMutation.mutate({ paymentId: props.currentPaymentId, txHash });
  };

  // ─── Enhanced variant rendering ───
  if (props.variant === "enhanced") {
    const selectedMeta = supportedCryptos?.find((c) => c.currency === selectedCurrency);
    const calcAmount = selectedMeta
      ? (processingFeeAmount / 100 / selectedMeta.rate).toFixed(8)
      : "0";

    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Select Cryptocurrency</label>
          <Select value={selectedCurrency} onValueChange={(v) => setSelectedCurrency(v as Currency)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              {supportedCryptos?.map((c) => (
                <SelectItem key={c.currency} value={c.currency}>
                  {c.symbol} {c.name} - ${c.rate.toLocaleString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {cryptoPaymentData ? (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="font-medium text-green-900">Payment Address Generated</p>
              </div>
              <p className="text-sm text-green-800">
                Send exactly {cryptoPaymentData.amount} {cryptoPaymentData.currency} to the address below
              </p>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium mb-2">Payment Address</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-white border rounded px-3 py-2 text-sm break-all">
                  {cryptoPaymentData.address}
                </code>
                <Button size="sm" variant="outline" onClick={() => copyToClipboard(cryptoPaymentData.address)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50">
              <p className="text-sm font-medium mb-2">Amount to Send</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-white border rounded px-3 py-2 text-sm">
                  {cryptoPaymentData.amount} {cryptoPaymentData.currency}
                </code>
                <Button size="sm" variant="outline" onClick={() => copyToClipboard(cryptoPaymentData.amount)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-900 font-medium">Important</p>
              <ul className="text-sm text-yellow-800 mt-2 space-y-1 list-disc list-inside">
                <li>Send the exact amount shown above</li>
                <li>Payment expires in 1 hour</li>
                <li>Confirmations required: 1 for USDT/USDC, 3 for BTC/ETH</li>
              </ul>
            </div>

            <div className="border-t pt-4 mt-4">
              <p className="text-sm font-medium mb-3">Verify Your Transaction</p>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Transaction Hash</label>
                <Input
                  placeholder="Enter your blockchain transaction hash (tx hash)"
                  value={txHash}
                  onChange={(e) => setTxHash(e.target.value)}
                  className="font-mono text-xs"
                />
                <p className="text-xs text-gray-600">
                  Paste the transaction ID/hash from your wallet to verify payment
                </p>
              </div>
              <Button
                className="w-full mt-3"
                variant="secondary"
                size="lg"
                onClick={handleVerifyTransaction}
                disabled={verifyingTx || verifyCryptoMutation.isPending || !txHash.trim()}
              >
                {verifyingTx || verifyCryptoMutation.isPending ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Verifying on Blockchain...</>
                ) : (
                  <><Shield className="mr-2 h-4 w-4" />Verify Transaction</>
                )}
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 font-medium mb-2">
                Pay with {selectedCurrency}
              </p>
              <p className="text-sm text-blue-800">
                You'll receive a wallet address to send {calcAmount} {selectedCurrency}
              </p>
            </div>

            <Button
              className="w-full"
              size="lg"
              onClick={handleEnhancedInitiate}
              disabled={createPaymentMutation.isPending}
            >
              {createPaymentMutation.isPending ? (
                <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Generating Address...</>
              ) : (
                <><Bitcoin className="mr-2 h-4 w-4" />Generate {selectedCurrency} Payment Address</>
              )}
            </Button>
          </>
        )}
      </div>
    );
  }

  // ─── Simple variant rendering (PaymentPage / PayFee) ───
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
        <p className="text-sm text-blue-900">
          <strong>Cryptocurrency Payment:</strong> Send the exact amount to the address below. Payment is confirmed automatically.
        </p>
      </div>

      <div>
        <Label>Select Cryptocurrency</Label>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {CURRENCIES.map((c) => (
            <Button
              key={c}
              variant={selectedCurrency === c ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCurrency(c)}
            >
              {c}
            </Button>
          ))}
        </div>
      </div>

      <div className="bg-slate-100 rounded-lg p-4 space-y-3">
        <div>
          <Label className="text-xs text-muted-foreground">Amount to Send</Label>
          <p className="text-2xl font-bold">
            {cryptoConversion?.amount || "0"} {selectedCurrency}
          </p>
          <p className="text-xs text-muted-foreground">
            ≈ ${(processingFeeAmount / 100).toFixed(2)} USD
          </p>
        </div>

        <div>
          <Label className="text-xs text-muted-foreground">Payment Address</Label>
          <div className="flex gap-2 mt-1">
            <Input value={generatedAddress} readOnly className="font-mono text-xs" />
            <Button size="sm" variant="outline" onClick={() => copyToClipboard(generatedAddress)}>
              {addressCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
        <p className="text-xs text-yellow-900">
          <strong>Important:</strong> Send only {selectedCurrency} to this address.
          Sending other cryptocurrencies may result in permanent loss of funds.
        </p>
      </div>

      <Button
        size="lg"
        className="w-full"
        onClick={handleSimplePayment}
        disabled={processing}
      >
        {processing ? (
          <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Confirming Transaction...</>
        ) : (
          <><Bitcoin className="mr-2 h-4 w-4" />I've Sent the Payment</>
        )}
      </Button>
    </div>
  );
}
