import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { trpc } from "@/lib/trpc";
import { Label } from "@/components/ui/label";
import { Wallet, ArrowLeft, CheckCircle2, XCircle, Loader2, Zap } from "lucide-react";
import { toast } from "sonner";
import StripePaymentForm from "@/components/StripePaymentForm";

export default function PayFee() {
  const [, setLocation] = useLocation();
  const { user, isAuthenticated, loading: authLoading } = useAuth();

  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "crypto">("stripe");
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Crypto payment fields
  const [cryptoCurrency, setCryptoCurrency] = useState<"BTC" | "ETH" | "USDT">("USDT");

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      setLocation("/login");
    }
  }, [isAuthenticated, authLoading, setLocation]);

  // Get user's pending loans with fees
  const { data: loans, isLoading: loansLoading } = trpc.loans.myApplications.useQuery(undefined, {
    enabled: isAuthenticated,
  });

  // Filter loans that need fee payment - ensure loans is an array
  const feePendingLoans = Array.isArray(loans) ? loans.filter(
    (loan) => loan.status === "approved" || loan.status === "fee_pending"
  ) : [];

  const [selectedLoan, setSelectedLoan] = useState<number | null>(null);
  const selectedLoanData = feePendingLoans.find((loan) => loan.id === selectedLoan);

  // Crypto payment mutation
  const cryptoPaymentMutation = trpc.payments.createIntent.useMutation({
    onSuccess: (data: any) => {
      if (data.paymentAddress || data.cryptoAddress) {
        toast.success("Payment Address Generated", {
          description: `Send the specified amount to the address shown below.`,
        });
      }
      setIsProcessing(false);
    },
    onError: (error: any) => {
      toast.error("Payment Failed", {
        description: error.message || "An error occurred while generating payment address.",
      });
      setIsProcessing(false);
    },
  });

  const handleCryptoPayment = async () => {
    if (!selectedLoan || !selectedLoanData) {
      toast.error("Please select a loan to pay for.");
      return;
    }

    setIsProcessing(true);

    cryptoPaymentMutation.mutate({
      loanApplicationId: selectedLoan,
      paymentMethod: "crypto",
      cryptoCurrency: cryptoCurrency,
    });
  };

  if (authLoading || loansLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold text-gray-900">Payment Successful!</h2>
              <p className="text-gray-600">
                Your processing fee has been paid. You will be redirected to your dashboard.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Pay Processing Fee</h1>
          <p className="text-gray-600">Complete your loan application by paying the processing fee</p>
        </div>

        {feePendingLoans.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4 py-8">
                <XCircle className="h-16 w-16 text-gray-400 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-900">No Pending Fees</h3>
                <p className="text-gray-600">
                  You don't have any approved loans with pending processing fees.
                </p>
                <Link href="/dashboard">
                  <Button>Go to Dashboard</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Loan Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Loan</CardTitle>
                <CardDescription>Choose which loan's processing fee you want to pay</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {feePendingLoans.map((loan) => (
                  <div
                    key={loan.id}
                    onClick={() => setSelectedLoan(loan.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedLoan === loan.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">Loan #{loan.id}</p>
                        <p className="text-sm text-gray-600">
                          Approved Amount: ${((loan.approvedAmount || 0) / 100).toFixed(2)}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Processing Fee</p>
                        <p className="text-2xl font-bold text-blue-600">
                          ${((loan.processingFeeAmount || 0) / 100).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Payment Method Selection */}
            {selectedLoan && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose how you want to pay</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as "stripe" | "crypto")}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="stripe">
                        <Zap className="h-4 w-4 mr-2" />
                        Card Payment
                      </TabsTrigger>
                      <TabsTrigger value="crypto">
                        <Wallet className="h-4 w-4 mr-2" />
                        Cryptocurrency
                      </TabsTrigger>
                    </TabsList>

                    {/* Stripe Payment */}
                    <TabsContent value="stripe" className="mt-6">
                      {selectedLoan && selectedLoanData && (
                        <StripePaymentForm
                          loanApplicationId={selectedLoan}
                          amount={selectedLoanData.processingFeeAmount || 0}
                          onSuccess={(data) => {
                            setPaymentSuccess(true);
                            toast.success("Payment Successful!", {
                              description: `Transaction ${data.transactionId} confirmed. Your loan will be disbursed shortly.`,
                            });
                            setTimeout(() => setLocation("/dashboard"), 3000);
                          }}
                          onError={(error) => {
                            toast.error("Payment Failed", { description: error });
                          }}
                          onProcessing={setIsProcessing}
                        />
                      )}
                    </TabsContent>

                    {/* Crypto Payment */}
                    <TabsContent value="crypto" className="space-y-4 mt-6">
                      <div className="space-y-2">
                        <Label>Select Cryptocurrency</Label>
                        <div className="grid grid-cols-3 gap-3">
                          {(["BTC", "ETH", "USDT"] as const).map((crypto) => (
                            <Button
                              key={crypto}
                              variant={cryptoCurrency === crypto ? "default" : "outline"}
                              onClick={() => setCryptoCurrency(crypto)}
                              className="w-full"
                            >
                              {crypto}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {cryptoPaymentMutation.data?.paymentAddress && (
                        <div className="p-4 bg-gray-50 rounded-lg space-y-2">
                          <p className="text-sm font-semibold text-gray-900">Payment Address:</p>
                          <p className="text-xs font-mono break-all bg-white p-2 rounded border">
                            {cryptoPaymentMutation.data.paymentAddress}
                          </p>
                          <p className="text-sm font-semibold text-gray-900">Amount:</p>
                          <p className="text-lg font-bold text-blue-600">
                            {cryptoPaymentMutation.data.cryptoAmount} {cryptoCurrency}
                          </p>
                          <p className="text-xs text-gray-600">
                            Send exact amount to the address above. Payment will be confirmed automatically.
                          </p>
                        </div>
                      )}

                      <Button
                        onClick={handleCryptoPayment}
                        disabled={isProcessing}
                        className="w-full"
                        size="lg"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Generating Address...
                          </>
                        ) : (
                          <>
                            <Wallet className="h-4 w-4 mr-2" />
                            Generate Payment Address
                          </>
                        )}
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}
