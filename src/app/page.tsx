import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-ink mb-4">
          Aliza Wears
        </h1>
        <p className="text-xl text-ink/60 mb-8 max-w-2xl mx-auto">
          Premium fashion with a flat, clean aesthetic. Discover our collection
          of timeless pieces.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/products">
            <Button size="lg">Shop Now</Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="ghost">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-ink mb-2">
              Premium Quality
            </h3>
            <p className="text-sm text-ink/60">
              Crafted with the finest materials for lasting comfort and style.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-ink mb-2">
              Free Shipping
            </h3>
            <p className="text-sm text-ink/60">
              Enjoy free shipping on all orders over $50.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold text-ink mb-2">
              Easy Returns
            </h3>
            <p className="text-sm text-ink/60">
              30-day hassle-free returns on all items.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-ink text-alabaster py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Wardrobe?</h2>
        <p className="text-alabaster/70 mb-6">Explore our latest collection today.</p>
        <Link href="/products">
          <Button size="lg">Browse Collection</Button>
        </Link>
      </section>
    </div>
  );
}
