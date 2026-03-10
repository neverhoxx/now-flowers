"use client";

import { usePathname, useRouter } from "next/navigation";

const langs = ["ru", "et", "en"];

export default function LanguageSwitch() {
    const pathname = usePathname();
    const router = useRouter();

    const parts = pathname.split("/");
    const current = parts[1] || "en";

    const index = langs.indexOf(current);
    const nextLang = langs[(index + 1) % langs.length];

    const handleClick = () => {
        parts[1] = nextLang;
        router.push(parts.join("/"));
    };

    return (
        <span
            onClick={handleClick}
            className="text-[20px] font-normal text-[#FAF3E1] hover:text-[#E76D24] duration-300 cursor-pointer select-none"
        >
            {current.toUpperCase()}
        </span>
    );
}