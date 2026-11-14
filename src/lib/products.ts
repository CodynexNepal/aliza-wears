export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  images?: string[];
  category: string;
  inStock: boolean;
  description: string;
}

// Deterministic fallback data for when API is unavailable
export const fallbackProducts: Product[] = [
  {
    id: "1",
    name: "Classic White Tee",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop",
    ],
    category: "tops",
    inStock: true,
    description: "A timeless white t-shirt made from premium cotton with a clean, flat aesthetic.",
  },
  {
    id: "2",
    name: "Slim Fit Jeans",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=800&h=800&fit=crop",
    ],
    category: "bottoms",
    inStock: true,
    description: "Modern slim-fit jeans with a comfortable stretch.",
  },
  {
    id: "3",
    name: "Summer Dress",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&h=800&fit=crop",
    ],
    category: "dresses",
    inStock: false,
    description: "Light and airy summer dress for warm days.",
  },
  {
    id: "4",
    name: "Leather Jacket",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&h=800&fit=crop",
    ],
    category: "outerwear",
    inStock: true,
    description: "Premium leather jacket with a classic cut.",
  },
  {
    id: "5",
    name: "Casual Blouse",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop",
    category: "tops",
    inStock: true,
    description: "Elegant casual blouse for everyday wear.",
  },
  {
    id: "6",
    name: "Wool Coat",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop",
    category: "outerwear",
    inStock: false,
    description: "Warm wool coat for cold weather.",
  },
];

export async function getProducts(): Promise<Product[]> {
  try {
    // In production, this would fetch from an API
    // For now, return fallback data
    return fallbackProducts;
  } catch (error) {
    console.error("Failed to fetch products, using fallback:", error);
    return fallbackProducts;
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const products = await getProducts();
    return products.find((p) => p.id === id) || null;
  } catch (error) {
    console.error("Failed to fetch product, using fallback:", error);
    return fallbackProducts.find((p) => p.id === id) || null;
  }
}
