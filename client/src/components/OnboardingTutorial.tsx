import React, { useState, useEffect } from "react";
import { ChevronRight, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TutorialStep {
  id: string;
  title: string;
  description: string;
  targetSelector?: string;
  position?: "top" | "bottom" | "left" | "right";
  action?: () => void;
  actionLabel?: string;
}

interface OnboardingTutorialProps {
  isOpen: boolean;
  onClose: () => void;
  steps: TutorialStep[];
  onComplete?: () => void;
}

export function OnboardingTutorial({
  isOpen,
  onClose,
  steps,
  onComplete,
}: OnboardingTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [highlightRect, setHighlightRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const updateHighlight = () => {
      const step = steps[currentStep];
      if (step?.targetSelector) {
        const element = document.querySelector(step.targetSelector);
        if (element) {
          setHighlightRect(element.getBoundingClientRect());
        }
      } else {
        setHighlightRect(null);
      }
    };

    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    return () => window.removeEventListener("resize", updateHighlight);
  }, [currentStep, isOpen, steps]);

  if (!isOpen || steps.length === 0) return null;

  const step = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (step.action) {
      step.action();
    }

    if (isLastStep) {
      onComplete?.();
      onClose();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-40" onClick={onClose}>
        {/* Dark background */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Highlight box */}
        {highlightRect && (
          <div
            className="absolute border-4 border-yellow-400 rounded-lg shadow-lg"
            style={{
              top: `${highlightRect.top - 4}px`,
              left: `${highlightRect.left - 4}px`,
              width: `${highlightRect.width + 8}px`,
              height: `${highlightRect.height + 8}px`,
              boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.5)",
              pointerEvents: "none",
            }}
          />
        )}
      </div>

      {/* Tutorial card */}
      <div
        className="fixed z-50 bg-white rounded-lg shadow-2xl max-w-sm p-6 animate-in fade-in slide-in-from-bottom-4"
        style={{
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded"
          aria-label="Close tutorial"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Content */}
        <div className="pr-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h2>
          <p className="text-gray-600 mb-4">{step.description}</p>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentStep ? "w-8 bg-[#0A2540]" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-auto">
              {currentStep + 1} / {steps.length}
            </span>
          </div>

          {/* Action button */}
          {step.actionLabel && (
            <Button
              onClick={handleNext}
              className="w-full mb-3 bg-green-600 hover:bg-green-700"
            >
              {step.actionLabel}
            </Button>
          )}

          {/* Navigation */}
          <div className="flex gap-3">
            {currentStep > 0 && (
              <Button
                onClick={handlePrev}
                variant="outline"
                className="flex-1"
              >
                Back
              </Button>
            )}
            <Button
              onClick={handleNext}
              className="flex-1 bg-[#0A2540] hover:bg-[#002080]"
            >
              {isLastStep ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Finish
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>

          {/* Skip option */}
          <button
            onClick={onClose}
            className="w-full mt-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Skip Tutorial
          </button>
        </div>
      </div>
    </>
  );
}

interface OnboardingChecklistProps {
  items: Array<{
    id: string;
    label: string;
    completed: boolean;
    icon: React.ReactNode;
  }>;
}

export function OnboardingChecklist({ items }: OnboardingChecklistProps) {
  const completedCount = items.filter((i) => i.completed).length;
  const progress = Math.round((completedCount / items.length) * 100);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-900 mb-2">Get Started Checklist</h3>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-2">
          {completedCount} of {items.length} completed
        </p>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              item.completed
                ? "bg-green-50 border border-green-200"
                : "bg-white border border-gray-200 hover:border-blue-300"
            }`}
          >
            <div
              className={`flex-shrink-0 ${
                item.completed ? "text-green-600" : "text-gray-400"
              }`}
            >
              {item.completed ? (
                <Check className="w-5 h-5" />
              ) : (
                item.icon
              )}
            </div>
            <span
              className={`text-sm font-medium ${
                item.completed ? "text-green-700" : "text-gray-700"
              }`}
            >
              {item.label}
            </span>
            {item.completed && (
              <span className="ml-auto text-xs text-green-600 font-semibold">
                ✓
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Hook for tutorial management
//
// Persistence is layered so the "I've seen this" flag survives even when
// localStorage is wiped (incognito, browser storage cleanup, logout-clear-all
// extensions, etc.):
//   1. localStorage[storageKey]      — primary
//   2. document.cookie[storageKey]   — long-lived backup (10 years)
// If EITHER says "completed", the tutorial stays closed.
//
// Pass `autoOpen: false` to suppress the auto-open behavior entirely (the
// caller decides when to open via setIsOpen). Useful when the consumer wants
// to gate on additional state — e.g. "only show when the user has zero loans".
export function useOnboarding(
  storageKey: string = "onboarding_completed",
  options?: { autoOpen?: boolean },
) {
  const autoOpen = options?.autoOpen ?? true;
  const [isOpen, setIsOpen] = React.useState(false);

  const readCookie = React.useCallback((name: string) => {
    if (typeof document === "undefined") return null;
    const match = document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith(`${name}=`));
    return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
  }, []);

  const writeCookie = React.useCallback((name: string, value: string) => {
    if (typeof document === "undefined") return;
    // 10 years; Lax so it travels on top-level navigations after login.
    const tenYears = 60 * 60 * 24 * 365 * 10;
    document.cookie = `${name}=${encodeURIComponent(value)};max-age=${tenYears};path=/;SameSite=Lax`;
  }, []);

  const markCompletedPersistent = React.useCallback(() => {
    try { localStorage.setItem(storageKey, "true"); } catch { /* ignore */ }
    writeCookie(storageKey, "true");
  }, [storageKey, writeCookie]);

  React.useEffect(() => {
    if (!autoOpen) return;
    let completed: string | null = null;
    try { completed = localStorage.getItem(storageKey); } catch { /* ignore */ }
    if (!completed) completed = readCookie(storageKey);
    if (completed) {
      // Make sure both stores are in sync so the next reload doesn't re-prompt
      // even if one of them was cleared.
      markCompletedPersistent();
      return;
    }
    // Small delay to ensure the page is fully rendered before highlighting.
    const timer = setTimeout(() => setIsOpen(true), 1500);
    return () => clearTimeout(timer);
  }, [autoOpen, storageKey, readCookie, markCompletedPersistent]);

  const markAsCompleted = () => {
    markCompletedPersistent();
    setIsOpen(false);
  };

  const skipTutorial = () => {
    // Persist the skip decision so the tour does not reopen on every visit.
    markCompletedPersistent();
    setIsOpen(false);
  };

  const resetTutorial = () => {
    try { localStorage.removeItem(storageKey); } catch { /* ignore */ }
    writeCookie(storageKey, ""); // expire by writing empty (browser keeps until max-age)
    if (typeof document !== "undefined") {
      document.cookie = `${storageKey}=;max-age=0;path=/`;
    }
    setIsOpen(true);
  };

  return {
    isOpen,
    markAsCompleted,
    skipTutorial,
    resetTutorial,
    setIsOpen,
  };
}
