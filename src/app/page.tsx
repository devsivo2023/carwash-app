import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-8">
      <header className="mb-8">
        <Image
          src="/logo.svg" // Replace with your logo file path
          alt="Car Wash Management App Logo"
          width={180}
          height={50}
        />
      </header>
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Car Wash Management App</h1>
        <p className="text-lg mb-8">
          Streamline your car wash operations and enhance customer satisfaction.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/services"
            className="bg-secondary text-white px-6 py-3 rounded hover:bg-green-600"
          >
            Explore Services
          </a>
          <a
            href="/login"
            className="bg-alert text-white px-6 py-3 rounded hover:bg-red-700"
          >
            Login
          </a>
        </div>
      </main>
      <footer className="mt-8">
        <p>&copy; 2024 Car Wash Management App. All rights reserved.</p>
      </footer>
    </div>
  );
}
