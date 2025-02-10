
"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
const router = useRouter();
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="p-10 min-h-screen ">
       <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
      >
        ← Go Back
      </button>
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
            <Image src={product.thumbnail} alt={product.title} width={250} height={250} className="rounded-md" />
            <h2 className="text-lg font-semibold  text-black mt-2">{product.title}</h2>
            <p className="text-blue-600 font-bold">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
