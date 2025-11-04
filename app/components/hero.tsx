"use client";

import { useModalStore } from "../store/modal-store";
import Button from "./Button";

export function Hero() {
  const openModal = useModalStore((state) => state.openGetStartedModal);

  return (
    <section className="relative text-center text-foreground">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[url('/path-to/netflix-auth-bg.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Frosted Glass Content */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 glass rounded-lg radius shadow-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground">
          Unlimited movies, TV shows, and more
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl mt-4 text-muted-foreground">
          Watch anywhere. Cancel anytime.
        </h2>
        <p className="text-md md:text-lg mt-8 text-secondary-foreground">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            openModal();
          }}
          className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 max-w-xl mx-auto"
        >
          <input
            type="email"
            placeholder="Email address"
            className="w-full md:w-auto grow px-4 py-3 rounded-md radius-sm bg-card text-card-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition"
            required
          />
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="md:text-xl animate-pulse cursor-pointer"
          >
            Get Started →
          </Button>
        </form>
      </div>
    </section>
  );
}
