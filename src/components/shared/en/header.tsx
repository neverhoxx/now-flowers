"use client"

import { Container1 } from "../container"
import { useRouter, usePathname } from "next/navigation"
import LanguageSwitch from "../../ui/LocaleSwitch"

export default function EnHeader() {
    const router = useRouter()
    const pathname = usePathname()

    const changeLanguage = (locale: string) => {
        const segments = pathname.split("/")
        segments[1] = locale
        router.push(segments.join("/"))
    }

    const scrollTo = (id: string) => {
        const el = document.getElementById(id)

        el?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    }

    return (
        <header className="w-full h-42 bg-transparent absolute top-0 left-0">
            <Container1 className="flex items-center">
                <nav className="relative w-full flex justify-end">

                    <ul className="flex md:justify-between md:max-w-90.75 md:gap-0 gap-5 w-full absolute left-0 md:left-1/2 md:-translate-x-1/2 text-white">

                        <li>
                            <button
                                onClick={() => scrollTo("about")}
                                className="text-[16px] md:text-[20px] font-normal text-[#FAF3E1] hover:text-[#E76D24] duration-300 cursor-pointer"
                            >
                                About
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => scrollTo("catalog")}
                                className="text-[16px] md:text-[20px] font-normal text-[#FAF3E1] hover:text-[#E76D24] duration-300 cursor-pointer"
                            >
                                Catalog
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => scrollTo("contacts")}
                                className="text-[16px] md:text-[20px] font-normal text-[#FAF3E1] hover:text-[#E76D24] duration-300 cursor-pointer"
                            >
                                Contacts
                            </button>
                        </li>

                    </ul>

                    <LanguageSwitch />
                </nav>
            </Container1>
        </header>
    )
}