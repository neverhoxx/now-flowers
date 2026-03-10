import heroImg from "@/images/NowFlowers-hero-pic.png";
import heroBg from "@/images/hero_bg.png";
import heroLogo from "@/images/ChatGPT Image 5 мар. 2026 г., 23_05_11.png";

import Image from "next/image";

import EnHeader from "../en/header";

export default function EnHero() {
    return (
        <div
            className="relative w-full h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center"
            style={{
                backgroundImage: `url(${heroBg.src})`
            }}
        >
            <Image src={heroLogo} alt="logo" className="w-full max-w-300 h-auto"></Image>
            <EnHeader />


        </div>
    );
}