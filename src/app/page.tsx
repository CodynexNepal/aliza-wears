import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-alabaster text-ink">
      {/* Header */}
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="text-xl font-bold tracking-tight">
                Aliza Wears
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="#" className="text-sm font-medium hover:text-lime-dark transition-colors">
                  New Arrivals
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-lime-dark transition-colors">
                  Men
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-lime-dark transition-colors">
                  Women
                </Link>
                <Link href="#" className="text-sm font-medium hover:text-lime-dark transition-colors">
                  Accessories
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-sm font-medium hover:text-lime-dark transition-colors">
                Sign In
              </Link>
              <Link
                href="#"
                className="rounded-md bg-lime px-4 py-2 text-sm font-semibold text-ink hover:bg-lime-dark transition-colors"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Elevate Your Style
              </h1>
              <p className="text-lg sm:text-xl text-ink/70 max-w-xl">
                Discover curated collections that blend comfort with contemporary design. 
                Quality fabrics, timeless pieces, and modern aesthetics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-lime px-6 py-3 text-base font-semibold text-ink hover:bg-lime-dark transition-colors"
                >
                  Explore Collection
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-ink/20 px-6 py-3 text-base font-semibold text-ink hover:bg-ink/5 transition-colors"
                >
                  View Lookbook
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold tabular-nums">50K+</p>
                  <p className="text-sm text-ink/60">Happy Customers</p>
                </div>
                <div>
                  <p className="text-2xl font-bold tabular-nums">4.9</p>
                  <p className="text-sm text-ink/60">Average Rating</p>
                </div>
                <div>
                  <p className="text-2xl font-bold tabular-nums">200+</p>
                  <p className="text-sm text-ink/60">Unique Designs</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg bg-white shadow-sm border border-ink/10 overflow-hidden">
                {/* Placeholder for hero image */}
                <div className="w-full h-full bg-alabaster flex items-center justify-center">
                  <span className="text-ink/30 text-sm">Hero Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why Aliza Wears?</h2>
            <p className="mt-4 text-lg text-ink/70 max-w-2xl mx-auto">
              We combine quality craftsmanship with modern design to create pieces you'll love.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-ink/10 bg-alabaster">
              <div className="w-12 h-12 rounded-md bg-lime flex items-center justify-center mb-4">
                <span className="text-ink font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-ink/70">
                Crafted from the finest materials for durability and comfort.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-ink/10 bg-alabaster">
              <div className="w-12 h-12 rounded-md bg-lime flex items-center justify-center mb-4">
                <span className="text-ink font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
              <p className="text-ink/70">
                Contemporary aesthetics that never go out of style.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-ink/10 bg-alabaster">
              <div className="w-12 h-12 rounded-md bg-lime flex items-center justify-center mb-4">
                <span className="text-ink font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-ink/70">
                Quick delivery to your doorstep with real-time tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Aliza Wears</h4>
              <p className="text-ink/70 text-sm">
                Modern fashion for the contemporary individual.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-ink/70">
                <li><Link href="#" className="hover:text-lime-dark transition-colors">New Arrivals</Link></li>
                <li><Link href="#" className="hover:text-lime-dark transition-colors">Men</Link></li>
                <li><Link href="#" className="hover:text-lime-dark transition-colors">Women</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-ink/70">
                <li><Link href="#" className="hover:text-lime-dark transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-lime-dark transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-lime-dark transition-colors">Shipping</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-ink/70">
                <li><Link href="#" className="hover:text-lime-dark transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-lime-dark transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-ink/10 text-center text-sm text-ink/60">
            &copy; 2024 Aliza Wears. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}