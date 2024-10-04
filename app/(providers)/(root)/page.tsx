/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "@/types/types";
import Link from "next/link";

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("https://api.ballang.yoojinyoung.com/products")
      .then((res) => {
        setProducts(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <main className="px-5 lg:px-8 flex flex-col grow w-full items-stretch py-6 lg:py-10 max-w-screen-lg mx-auto">
      <h2 className="font-bold text-3xl text-center my-12">Trending</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
        {products.map((product) => (
          <li key={product.id}>
            <Link
              className="relative flex flex-col"
              // href={"/products/" + product.id}
              href={`/products/${product.id}`}
            >
              <div className="relative mb-4 aspect-[3/4]">
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className="object-cover absolute h-full w-full"
                />
              </div>
              <div className="grid gap-y-2">
                <div className="text-sm font-bold">{product.brand.nameEn}</div>
                <p className="text-[15px]">{product.name}</p>
                <div className="text-sm sm:flex-row flex flex-col items-baseline gap-1.5">
                  <span className="text-red-500 line-through font-bold">
                    ₩{product.originalPrice}
                  </span>
                  <span className="font-bold">₩{product.price}</span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default HomePage;
