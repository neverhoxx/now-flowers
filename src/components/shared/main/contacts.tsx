import { Container2 } from "../container2";
import Image from "next/image";

import pic from "@/images/now-flower.jpeg"

export default function Contacts() {
    return (
        <div id="contacts" className='py-30 md:py-44.75 bg-[#222222] text-[#FAF3E1]'>
            <Container2 className="flex flex-wrap justify-between gap-3">
                <div className="max-w-155 w-full flex flex-col gap-5 md:gap-11.75">
                    <h2 className="text-4xl md:text-5xl font-medium">
                        Не нашли «тот самый» букет?
                    </h2>

                    <p className="text-xl md:text-[32px]">
                        Оставьте свои данные и мы с Вами свяжемся в ближайшее время.
                    </p>

                    <form className="flex flex-col gap-6 " action="">
                        <input required type="text" placeholder="Имя" className="border-b-2 border-[#FAF3E1] p-2.5 text-xl md:text-[30px] font-medium placeholder:select-none" />
                        <input required type="tel" pattern="[0-9+ ]{7,15}" placeholder="Номер телефона" className="border-b-2 border-[#FAF3E1] p-2.5 text-xl md:text-[30px] font-medium placeholder:select-none" />
                        <input required type="email" placeholder="Э-мейл" className="border-b-2 border-[#FAF3E1] p-2.5 text-xl md:text-[30px] font-medium placeholder:select-none" />

                        <button className="text-center px-11 py-3.75 bg-[#FAF3E1] text-[#222] font-medium text-xl md:text-2xl rounded-[14px] hover:bg-[#E76D24] cursor-pointer duration-300">Оформить заказ</button>
                    </form>
                </div>

                <div className="flex justify-center items-center flex-[1 1 auto]">
                    <div className="max-w-117.25 w-full max-h-121.25">
                        <Image className="object-cover max-h-121.25" src={pic} alt={"Pic"} />
                    </div>

                </div>
            </Container2>
        </div>
    );
}