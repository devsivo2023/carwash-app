import Link from "next/link";

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-red-500">Access Denied</h1>
      <p className="mt-4">You do not have permission to access this page.</p>
      <Link href="/" className="mt-6 text-blue-500 underline">
        Go back to the homepage
      </Link>
    </div>
  );
}
