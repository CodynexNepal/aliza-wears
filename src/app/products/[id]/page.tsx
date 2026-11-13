import { notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Card";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square bg-alabaster overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            {product.inStock ? (
              <Badge variant="success">In Stock</Badge>
            ) : (
              <Badge variant="error">Out of Stock</Badge>
            )}
            <Badge>{product.category}</Badge>
          </div>
          <h1 className="text-4xl font-bold text-ink mb-4">{product.name}</h1>
          <p className="text-3xl font-bold text-ink tabular-nums mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-ink/60 mb-8">{product.description}</p>
          <Button
            size="lg"
            disabled={!product.inStock}
            variant={product.inStock ? "primary" : "secondary"}
            className="w-full lg:w-auto"
          >
            {product.inStock ? "Add to Cart" : "Unavailable"}
          </Button>
        </div>
      </div>
    </div>
  );
}
