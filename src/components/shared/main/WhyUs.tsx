import { Container1 } from "../container";
import Image from "next/image";

import pic1 from "@/images/why_now_1.jpeg";
import pic2 from "@/images/why_now_2.jpeg";
import pic3 from "@/images/why_now_3.jpeg";
import pic4 from "@/images/why_now_4.jpeg";

export default function WhyUs() {
    return (
        <div id="about" className='md:py-25 py-10 bg-[#FAF3E1]'>
            <Container1>
                <div className="grid-container gap-x-10 gap-y-3 pt-20 md:pt-44.75">
                    <div className="photo1 adaptive-block">
                        <Image className="object-cover min-h-190.5 adaptive-photo" src={pic1} alt={""} />
                    </div>
                    <div className="photo2 adaptive-block">
                        <Image className="object-cover max-h-113 adaptive-photo" src={pic2} alt={""} />
                    </div>
                    <h2 className="title text-[80px] ">
                        If not now, when?
                    </h2>

                    <div className="text1 text-center text-[24px] flex items-end justify-center">
                        Мы создаём букеты про настроение, эстетику и живые эмоции.
                        <br />
                        Про моменты которые важно прожить сейчас.
                    </div>

                    <div className="photo3 adaptive-block">
                        <Image className="object-cover max-h-130 adaptive-photo" src={pic3} alt={""} />
                    </div>
                    <div className="photo4 adaptive-block">
                        <Image className="object-cover max-h-162 adaptive-photo" src={pic4} alt={""} />
                    </div>
                    <div className="text2 text-center text-4xl flex items-end justify-center">
                        <p>
                            Цветы - всегда вовремя.
                            <br />
                            Жизнь - если не сейчас, то когда?
                        </p>

                    </div>
                </div>
            </Container1>

        </div>
    );
}