import { Link} from "@nextui-org/react";


export default function Footer() {
  return (
    <footer className="py-10 text-center bg-background">
      <p className="text-sm">
        &copy; 2024 Acme. All rights reserved
      </p>
      <div className="mt-2">
        <Link href="/" color="primary" className="mx-2">
          Privacy Policy
        </Link>
        <Link href="/" color="primary" className="mx-2">
          Terms of Service
        </Link>
      </div>
    </footer>
  );
}
