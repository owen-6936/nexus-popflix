"use client";

import { useRouter } from "next/navigation";
import { useModalStore } from "../store/modal-store";
import Button from "./Button";

export function GetStartedModal() {
  const { isGetStartedModalOpen, closeGetStartedModal } = useModalStore();
  const router = useRouter();
  if (!isGetStartedModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 text-foreground"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-md p-8 bg-card text-card-foreground rounded-lg radius shadow-xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={closeGetStartedModal}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Milestone Header */}
        <div className="mb-4">
          <p className="text-sm text-milestone-foreground font-medium tracking-wide">
            STEP 1 OF 3
          </p>
          <h2 className="text-2xl font-bold mt-2 text-primary-foreground">
            Finish setting up your account
          </h2>
        </div>

        {/* Body */}
        <div className="space-y-4 text-muted-foreground">
          <p>Let’s get you started with your new account!</p>
          <div className="bg-accent text-accent-foreground p-4 rounded-md radius-sm">
            <p className="text-sm font-medium">
              🎖️ Earn your first badge by completing setup
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <Button
            onClick={() => {
              closeGetStartedModal();
              router.push("/milestone");
            }}
            variant="primary"
            size="md"
            className="hover:bg-opacity-80"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
