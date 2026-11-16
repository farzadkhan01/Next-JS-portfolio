import { ArrowLeft } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-6 py-section">
      <p className="text-caption text-muted uppercase">Error 404</p>
      <h1 className="text-h1 text-balance">This page doesn&apos;t exist.</h1>
      <p className="max-w-md text-body-lg text-muted">
        The link may be broken, or the page may have been moved.
      </p>
      <Button href="/" icon={ArrowLeft} iconPosition="start">
        Back to homepage
      </Button>
    </Container>
  );
}
