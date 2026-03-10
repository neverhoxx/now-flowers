"use client";

import { useState } from "react";
import Link from "next/link";

import { Container2 } from "../container2";

type QAItem = {
    question: string;
    answer: string;
};

const qaData: QAItem[] = [
    {
        question: "How to place an order?",
        answer: `We accept pre-orders at least 2 days in advance.

Contact us in any convenient way and tell us about your wishes — we will уточнить the details and place the order.`,
    },
    {
        question: "How to pay for the order?",
        answer: `After confirming the details, we will send you the payment details.

Available payment methods:
• bank transfer
• cash

Terms:
• 50% deposit, remaining 50% — before receiving the bouquet
or
• 100% payment upfront

Before pickup or delivery, we will send a photo of the finished bouquet for confirmation.`,
    },
    {
        question: "Delivery",
        answer: `Within Tallinn — €7
Outside Tallinn — €15`,
    },
    {
        question: "Order cancellation policy",
        answer: `If the order is cancelled for any reason after confirmation and payment of the deposit, 50% of the cost is non-refundable, as the flowers are purchased individually for your order.

A full refund is available if the order is cancelled 3 days in advance.`,
    },
];
export default function EnFooter() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <footer className="bg-[#FAF3E1] text-[#222] pt-20 md:pt-44.75 pb-25">
            <Container2>

                <h2 className="text-[40px] md:text-[68px] text-center">Q&A</h2>

                <div className="flex flex-col gap-3 select-none">
                    {qaData.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div key={index} className="border-b border-[#222] hover:text-[#E76D24] cursor-pointer duration-300">
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center py-3 font-medium cursor-pointer"
                                >
                                    <span className="text-xl md:text-3xl">{item.question}</span>
                                    <span className="text-xl md:text-2xl transition-transform duration-300">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                <div
                                    className={`
                                        overflow-hidden
                                        transition-all
                                        duration-500
                                        ${isOpen ? "max-h-125 opacity-100 pb-3" : "max-h-0 opacity-0"}
                                    `}
                                >
                                    <div className="text-[16px] md:text-2xl whitespace-pre-line">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex flex-col items-center gap-12.75 text-center pt-20 md:pt-44.75">
                    <h3 className="text-[40px] md:text-[68px]">Contacts</h3>

                    <ul className="text-xl md:text-5xl flex flex-col items-center gap-12.75 select-none">
                        <li>
                            <Link href="#" className="hover:text-[#E76D24] duration-300">
                                Facebook
                            </Link>
                        </li>

                        <li>
                            <Link href="#" className="hover:text-[#E76D24] duration-300">
                                Instagram
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="mailto:now.floral.shop@gmail.com"
                                className="hover:text-[#E76D24] duration-300 select-all"
                            >
                                now.floral.shop@gmail.com
                            </Link>
                        </li>
                    </ul>

                </div>
            </Container2>
        </footer>
    );
}