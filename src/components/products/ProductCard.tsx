import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:border-lime transition-colors">
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden bg-alabaster">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
          />
        </div>
      </Link>
      <CardContent>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
          {product.inStock ? (
            <Badge variant="success">In Stock</Badge>
          ) : (
            <Badge variant="error">Out of Stock</Badge>
          )}
        </div>
        <p className="text-sm text-ink/60 capitalize">{product.category}</p>
        <p className="mt-2 text-xl font-bold text-ink tabular-nums">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={!product.inStock}
          variant={product.inStock ? "primary" : "secondary"}
        >
          {product.inStock ? "Add to Cart" : "Unavailable"}
        </Button>
      </CardFooter>
    </Card>
  );
}
