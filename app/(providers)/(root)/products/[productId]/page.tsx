/* eslint-disable @next/next/no-img-element */
"use client";

import { ProductId } from "@/types/types";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProducts] = useState<ProductId>();
  useEffect(() => {
    axios
      .get(`https://api.ballang.yoojinyoung.com/products/${productId}`)
      .then((res) => {
        setProducts(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  return (
    <main className="px-6 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg flex flex-col grow w-full items-stretch">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        <div className="aspect-[3/4] relative">
          <img
            src={product?.imgSrc}
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="py-8 flex flex-col">
          <Link
            href={"/brands"}
            className="text-15px border-b pb-2.5 mb-2.5 font:bold"
          >
            <h1 className="font-semibold">
              {product?.brand.nameKr} / {product?.brand.nameEn}
            </h1>
          </Link>
          <h3 className="text-lg">{product?.name}</h3>
          <ul className="grid grid-cols-5 text-[15px] my-12 gap-y-5">
            <li className="font-bold">정가</li>
            <li className="line-through text-red-500 col-span-4">
              ₩{product?.originalPrice}
            </li>
            <li className="font-bold">판매가</li>
            <li className="font-semibold col-span-4">₩{product?.price}</li>
            <li className="font-bold">배송</li>
            <li className="col-span-4">{product?.deliveryType}</li>
            <li className="font-bold">잔여 재고</li>
            <li>{product?.onlineStock}</li>
          </ul>
          <button className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-black text-white">
            장바구니에 담기
          </button>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailPage;
