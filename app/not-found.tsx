import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory px-5">
      <div className="text-center space-y-5 max-w-md">
        <p className="text-label text-primary uppercase tracking-widest">404</p>
        <h1 className="heading-section">Page Not Found</h1>
        <p className="text-subtitle">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-primary inline-flex mt-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}

