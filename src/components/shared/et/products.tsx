"use client";

import { useState } from "react";
import { Container2 } from "../container2";
import Image from "next/image";
import Link from "next/link";

import b1 from "@/images/buket1.jpeg";
import b2 from "@/images/buket2.jpeg";
import b3 from "@/images/buket3.jpeg";
import b4 from "@/images/buket4.jpeg";
import b5 from "@/images/buket5.jpeg";
import b6 from "@/images/buket6.jpeg";
import b7 from "@/images/buket7.jpeg";

const products = [
    { id: 1, name: "Echo Of Feelings", price: "100€", image: b1 },
    { id: 2, name: "Marshmallow Bloom", price: "85€", image: b2 },
    { id: 3, name: "Coconut Blanc", price: "95€", image: b3 },
    { id: 4, name: "Wine Rhapsody", price: "110€", image: b4 },
    { id: 5, name: "Bouqet", price: "90€", image: b5 },
    { id: 6, name: "Bouqet", price: "120€", image: b6 },
    { id: 7, name: "Bouqet", price: "105€", image: b7 }
];

export default function Products() {
    const [visible, setVisible] = useState(3);

    return (
        <div id="catalog" className="pt-20 md:pt-44.75 pb-25 bg-[#FAF3E1]">
            <Container2>
                <h2 className="text-[40px] md:text-[68px] font-medium text-[#222] text-center mb-10 md:mb-27.25">
                    Meie kimpud
                </h2>

                {/* mobile + tablet */}
                <div className="lg:hidden flex flex-col gap-10">
                    {products.slice(0, visible).map((product, index) => {
                        const reverse = index % 2 === 1;

                        return (
                            <div
                                key={product.id}
                                className={`grid grid-cols-[minmax(110px,140px)_1fr] items-end gap-x-4 gap-y-3 ${reverse ? "direction-rtl" : ""
                                    }`}
                                style={{ direction: reverse ? "rtl" : "ltr" }}
                            >
                                <div style={{ direction: "ltr" }}>
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-[150px] md:h-[220px] object-cover"
                                    />
                                </div>

                                <div
                                    className="flex flex-col justify-between min-h-[150px] md:min-h-[220px] py-1"
                                    style={{ direction: "ltr" }}
                                >
                                    <div className="space-y-2">
                                        <h3 className="text-[14px] md:text-[20px] uppercase leading-[1.1] text-[#222] break-words">
                                            {product.name}
                                        </h3>
                                        <span className="block text-[14px] md:text-[18px] text-[#222]">
                                            {product.price}
                                        </span>
                                    </div>

                                    <div>
                                        <Link
                                            className="px-4 py-1 border border-[#222222] text-[#222222] text-[12px] md:text-[16px] inline-flex justify-center items-center min-h-[30px] md:min-h-[36px] hover:text-[#E76D24] duration-300"
                                            href=""
                                        >
                                            Osta
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* desktop */}
                <div className="hidden lg:flex flex-wrap justify-center gap-6">
                    {products.slice(0, visible).map((product, index) => {
                        const isBig = (index - 1) % 3 === 0;

                        return (
                            <div className="max-w-93.5 w-full flex flex-col gap-8.75" key={product.id}>
                                <div className={`${isBig ? "max-h-102.25" : "max-h-89.75"} w-full flex justify-center items-center`}>
                                    <Image
                                        className={`${isBig ? "max-h-102.25" : "max-h-89.75"} object-cover`}
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>

                                <div className="flex justify-between items-end">
                                    <div className="text-2xl text-[#222]">
                                        <h3>{product.name}</h3>
                                        <span>{product.price}</span>
                                    </div>

                                    <Link
                                        className="px-4 py-1 border rounded-xl border-[#222222] text-[#222222] text-[18px] inline-flex justify-center items-center h-[36.6px] hover:text-[#E76D24] duration-300"
                                        href=""
                                    >
                                        Osta
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {visible < products.length && (
                    <div className="flex justify-center mt-14">
                        <button
                            onClick={() => setVisible(products.length)}
                            className="px-8 py-3 border border-[#222] rounded-xl text-[#222] hover:text-[#E76D24] hover:border-[#E76D24] duration-300"
                        >
                            Näita rohkem
                        </button>
                    </div>
                )}
            </Container2>
        </div>
    );
}