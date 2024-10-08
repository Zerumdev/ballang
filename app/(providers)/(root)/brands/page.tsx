/* eslint-disable @next/next/no-img-element */
"use client";

import { Brand, Product } from "@/types/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function BrandsPage() {
  const [brands, setBrand] = useState<Brand[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const getBrand = () => {
    axios.get("https://api.ballang.yoojinyoung.com/brands").then((res) => {
      console.log(res);
      setBrand(res.data.result);
    });
  };

  useEffect(() => {
    axios
      .get("https://api.ballang.yoojinyoung.com/brands")
      .then((res) => {
        setBrand(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  });

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
    <main
      className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg flex flex-col grow w-full items-stretch"
      data-full-width="true"
    >
      <h2 className="font-bold text-3xl text-center my-12">BRANDS</h2>
      <nav className="ml-11 mb-16 mx-auto max-w-screen-lg">
        <ul className=" mr-12 gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-5 justify-items-center">
          <li className="col-span-3 sm:col-span-4 md:col-span-6 mb-4">
            <Link className="hover:text-black transition-all" href="/brands">
              ALL
            </Link>
          </li>
          {brands.map((brand) => (
            <li key={brand.brandId}>
              <Link
                className=" hover:text-black transition-all"
                href={"/brands?brandId=" + brand.id}
                onClick={getBrand}
              >
                {brand.nameKr}
              </Link>
            </li>
          ))}
        </ul>
        <main className="px-5 lg:px-8 flex flex-col grow w-full items-stretch py-6 lg:py-10 max-w-screen-lg mx-auto">
          <ul className="grid grid-cols-6 gap-x-8 gap-y-12">
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  className="relative flex flex-col group"
                  href={"/products/" + product.id}
                >
                  <div className="relative mb-4 aspect-[3/4]">
                    <img
                      src={product.imgSrc}
                      alt={product.name}
                      className="object-cover absolute h-full w-full"
                    />
                  </div>
                  <div className="grid gap-y-2">
                    <div className="text-sm font-bold">
                      {product.brand.nameEn}
                    </div>
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
      </nav>
    </main>
  );
}

export default BrandsPage;
