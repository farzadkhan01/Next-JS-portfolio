"use client";

import { RotateCcw } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

// Runtime error boundary for routes. Shows a safe, generic message — never the
// error details — and lets the visitor retry.
export default function Error({ reset }) {
  return (
    <Container className="flex flex-col items-start gap-6 py-section">
      <p className="text-caption text-muted uppercase">Something went wrong</p>
      <h1 className="text-h1 text-balance">This page couldn&apos;t be loaded.</h1>
      <p className="max-w-md text-body-lg text-muted">
        Please try again. If the problem continues, return to the homepage.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => reset()} icon={RotateCcw} iconPosition="start">
          Try again
        </Button>
        <Button href="/" variant="secondary">
          Back to homepage
        </Button>
      </div>
    </Container>
  );
}
