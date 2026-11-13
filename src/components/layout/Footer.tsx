export function Footer() {
  return (
    <footer className="bg-ink text-alabaster py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Aliza Wears</h3>
            <p className="text-sm text-alabaster/70">
              Premium fashion with a flat, clean aesthetic.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Shop</h4>
            <ul className="space-y-2 text-sm text-alabaster/70">
              <li><a href="/products" className="hover:text-lime transition-colors">All Products</a></li>
              <li><a href="/products?category=dresses" className="hover:text-lime transition-colors">Dresses</a></li>
              <li><a href="/products?category=tops" className="hover:text-lime transition-colors">Tops</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-alabaster/70">
              <li><a href="/about" className="hover:text-lime transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-lime transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-alabaster/70">
              <li><a href="/privacy" className="hover:text-lime transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-lime transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-alabaster/10 text-center text-sm text-alabaster/50">
          &copy; {new Date().getFullYear()} Aliza Wears. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
