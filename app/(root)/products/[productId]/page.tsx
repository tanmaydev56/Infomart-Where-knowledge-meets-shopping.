"use client";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string}>;
}) {
  const router = useRouter();
  const { productId } =  use(params); // Destructuring productId and reviewId directly from params
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [productId]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!product) return <div className="p-10 text-center">Product not found</div>;

  return (
    <div className="p-10 min-h-screen flex flex-col items-center ">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
      >
        ← Go Back
      </button>

      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-xl font-semibold text-blue-600 mt-2">${product.price}</p>
        <p className="text-gray-600 mt-4">{product.description}</p>

        <Image
          src={product.thumbnail}
          alt={product.title}
          width={250}
          height={250}
          className="mt-6 rounded-md mx-auto"
        />

        <div className="mt-6 flex flex-col gap-4">
          <button
            onClick={() =>
              router.push(`/products/${productId}/reviews`)
            }
            className="bg-blue-500 w-full py-3 text-white font-bold rounded-md shadow-md hover:bg-blue-700 transition"
          >
            See Reviews
          </button>

          <button onClick={() => router.push(`/`)} className="bg-green-500 w-full py-3 text-white font-bold rounded-md shadow-md hover:bg-green-700 transition">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
