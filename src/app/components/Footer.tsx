import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="py-4 text-center bg-primary-50">
      <p className="text-sm">
        &copy; 2024 Acme. All rights reserved
      </p>
      <div className="mt-2">
        <Link href="/privacy" color="primary" className="mx-2">
          Privacy Policy
        </Link>
        <Link href="/terms" color="primary" className="mx-2">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
