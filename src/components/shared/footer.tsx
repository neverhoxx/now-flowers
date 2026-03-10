"use client";

import { useState } from "react";
import Link from "next/link";

import { Container2 } from "./container2";

type QAItem = {
    question: string;
    answer: string;
};

const qaData: QAItem[] = [
    {
        question: "Как оформить заказ?",
        answer: `Предзаказ принимаем минимум за 2 дня.

Свяжитесь с нами любым удобным способом и расскажите о ваших пожеланиях — мы уточним детали и оформим заказ.`,
    },
    {
        question: "Как оплатить заказ?",
        answer: `После согласования деталей мы отправляем реквизиты для оплаты.

Доступные способы оплаты:
• банковский перевод
• наличные

Условия:
• 50% предоплата, оставшиеся 50% — перед выдачей букета
или
• 100% оплата сразу

Перед выдачей или доставкой мы отправляем фото готового букета для подтверждения.`,
    },
    {
        question: "Доставка",
        answer: `По Таллину — 7 €
За пределы Таллина — 15 €`,
    },
    {
        question: "Условия отмены заказа",
        answer: `Если после согласования и внесения предоплаты заказ отменяется по любой причине, 50% стоимости не возвращается, так как цветы закупаются индивидуально под ваш заказ.

Возврат средств доступен при отмене заказа за 3 дня.`,
    },
];

export default function Footer() {
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
                    <h3 className="text-[40px] md:text-[68px]">КОНТАКТЫ</h3>

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