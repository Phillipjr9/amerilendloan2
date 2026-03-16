import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, User, Mail, Phone, FileText, CheckCircle, XCircle, Clock, Eye, RefreshCw, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type AppStatus = "pending" | "under_review" | "approved" | "rejected";

interface JobApp {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  position: string;
  resumeFileName: string | null;
  coverLetter: string;
  status: AppStatus;
  adminNotes: string | null;
  reviewedBy: number | null;
  reviewedAt: Date | string | null;
  createdAt: Date | string | null;
  updatedAt: Date | string | null;
}

function StatusBadge({ status }: { status: AppStatus }) {
  switch (status) {
    case "pending":
      return <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-300">Pending</Badge>;
    case "under_review":
      return <Badge className="bg-blue-100 text-blue-800 border border-blue-300">Under Review</Badge>;
    case "approved":
      return <Badge className="bg-green-100 text-green-800 border border-green-300">Approved</Badge>;
    case "rejected":
      return <Badge className="bg-red-100 text-red-800 border border-red-300">Rejected</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
}

export default function AdminJobApplications() {
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedApp, setSelectedApp] = useState<JobApp | null>(null);
  const [reviewDialog, setReviewDialog] = useState(false);
  const [reviewStatus, setReviewStatus] = useState<AppStatus>("under_review");
  const [adminNotes, setAdminNotes] = useState("");

  const { data: applications = [], isLoading, refetch } =
    trpc.jobApplications.list.useQuery(undefined, { refetchInterval: 30000 });

  const updateStatus = trpc.jobApplications.updateStatus.useMutation({
    onSuccess: () => {
      toast.success("Application status updated");
      setReviewDialog(false);
      setSelectedApp(null);
      setAdminNotes("");
      refetch();
    },
    onError: (err) => toast.error(err.message || "Failed to update status"),
  });

  const filtered = filterStatus === "all"
    ? applications
    : applications.filter((a: JobApp) => a.status === filterStatus);

  const counts = {
    all: applications.length,
    pending: applications.filter((a: JobApp) => a.status === "pending").length,
    under_review: applications.filter((a: JobApp) => a.status === "under_review").length,
    approved: applications.filter((a: JobApp) => a.status === "approved").length,
    rejected: applications.filter((a: JobApp) => a.status === "rejected").length,
  };

  function openReview(app: JobApp) {
    setSelectedApp(app);
    setReviewStatus(app.status === "pending" ? "under_review" : app.status);
    setAdminNotes(app.adminNotes || "");
    setReviewDialog(true);
  }

  function submitReview() {
    if (!selectedApp) return;
    updateStatus.mutate({
      id: selectedApp.id,
      status: reviewStatus,
      adminNotes: adminNotes || undefined,
    });
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Briefcase className="w-7 h-7 text-blue-600" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Job Applications</h2>
            <p className="text-gray-500 text-sm">Review and manage career applications from candidates</p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={() => refetch()} className="gap-2">
          <RefreshCw className="w-4 h-4" />
          Refresh
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total", value: counts.all, color: "text-gray-700", bg: "bg-gray-50 border-gray-200" },
          { label: "Pending", value: counts.pending, color: "text-yellow-700", bg: "bg-yellow-50 border-yellow-200" },
          { label: "Under Review", value: counts.under_review, color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
          { label: "Approved", value: counts.approved, color: "text-green-700", bg: "bg-green-50 border-green-200" },
        ].map((stat) => (
          <Card key={stat.label} className={`border ${stat.bg}`}>
            <CardContent className="pt-4 pb-4">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filter */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 font-medium">Filter:</span>
        {(["all", "pending", "under_review", "approved", "rejected"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilterStatus(s)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              filterStatus === s
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {s === "all" ? "All" : s.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
            {" "}({counts[s as keyof typeof counts]})
          </button>
        ))}
      </div>

      {/* Applications List */}
      {isLoading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      ) : filtered.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No applications found</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {filtered.map((app: JobApp) => (
            <Card key={app.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-5 pb-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-semibold text-gray-900 text-lg">{app.fullName}</span>
                      <StatusBadge status={app.status} />
                      <Badge variant="outline" className="text-xs">
                        {app.position}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" /> {app.email}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" /> {app.phone}
                      </span>
                      {app.resumeFileName && (
                        <span className="flex items-center gap-1.5 text-blue-600">
                          <FileText className="w-3.5 h-3.5" /> {app.resumeFileName}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">{app.coverLetter}</p>
                    <p className="text-xs text-gray-400">
                      Applied {app.createdAt ? new Date(app.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "—"}
                      {app.reviewedAt && ` · Reviewed ${new Date(app.reviewedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`}
                    </p>
                    {app.adminNotes && (
                      <p className="text-xs bg-yellow-50 border border-yellow-200 rounded px-2 py-1 text-yellow-800">
                        Admin notes: {app.adminNotes}
                      </p>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    className="shrink-0 gap-1.5"
                    onClick={() => openReview(app)}
                  >
                    <Eye className="w-4 h-4" />
                    Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Review Dialog */}
      <Dialog open={reviewDialog} onOpenChange={(open) => { if (!open) { setReviewDialog(false); setSelectedApp(null); } }}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-blue-600" />
              Review Application
            </DialogTitle>
            <DialogDescription>
              {selectedApp?.fullName} — {selectedApp?.position}
            </DialogDescription>
          </DialogHeader>

          {selectedApp && (
            <div className="space-y-4">
              {/* Applicant Details */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                <div className="grid grid-cols-2 gap-2">
                  <div><span className="text-gray-500">Name:</span> <span className="font-medium">{selectedApp.fullName}</span></div>
                  <div><span className="text-gray-500">Email:</span> <span className="font-medium">{selectedApp.email}</span></div>
                  <div><span className="text-gray-500">Phone:</span> <span className="font-medium">{selectedApp.phone}</span></div>
                  <div><span className="text-gray-500">Position:</span> <span className="font-medium">{selectedApp.position}</span></div>
                </div>
                {selectedApp.resumeFileName && (
                  <div><span className="text-gray-500">Resume:</span> <span className="text-blue-600 font-medium">{selectedApp.resumeFileName}</span></div>
                )}
              </div>

              {/* Cover Letter */}
              <div>
                <Label className="text-sm font-medium text-gray-700">Cover Letter</Label>
                <div className="mt-1 bg-white border rounded-lg p-3 text-sm text-gray-700 max-h-36 overflow-y-auto whitespace-pre-wrap">
                  {selectedApp.coverLetter}
                </div>
              </div>

              {/* Status Update */}
              <div>
                <Label className="text-sm font-medium text-gray-700">Update Status</Label>
                <Select value={reviewStatus} onValueChange={(v) => setReviewStatus(v as AppStatus)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">
                      <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-yellow-500" /> Pending</span>
                    </SelectItem>
                    <SelectItem value="under_review">
                      <span className="flex items-center gap-2"><Eye className="w-4 h-4 text-blue-500" /> Under Review</span>
                    </SelectItem>
                    <SelectItem value="approved">
                      <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Approved</span>
                    </SelectItem>
                    <SelectItem value="rejected">
                      <span className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Rejected</span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Admin Notes */}
              <div>
                <Label className="text-sm font-medium text-gray-700">Admin Notes (optional)</Label>
                <Textarea
                  className="mt-1"
                  rows={3}
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Add internal notes about this applicant (not visible to applicant)..."
                />
              </div>
            </div>
          )}

          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => { setReviewDialog(false); setSelectedApp(null); }}>
              Cancel
            </Button>
            <Button
              onClick={submitReview}
              disabled={updateStatus.isPending}
              className={reviewStatus === "approved" ? "bg-green-600 hover:bg-green-700" : reviewStatus === "rejected" ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}
            >
              {updateStatus.isPending ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...</>
              ) : reviewStatus === "approved" ? (
                <><CheckCircle className="w-4 h-4 mr-2" /> Approve</>
              ) : reviewStatus === "rejected" ? (
                <><XCircle className="w-4 h-4 mr-2" /> Reject</>
              ) : (
                "Save Status"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
