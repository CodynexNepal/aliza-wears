import Link from "next/link";

export function Header() {
  return (
    <header className="bg-surface border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold tracking-tight text-ink">
            Aliza Wears
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-ink hover:text-lime-dark transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-ink hover:text-lime-dark transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-ink hover:text-lime-dark transition-colors"
            >
              About
            </Link>
          </nav>
          <button className="bg-lime text-ink px-4 py-2 text-sm font-semibold rounded-none hover:bg-lime-dark transition-colors">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
}
