import { Container1 } from "../container";
import Image from "next/image";

import pic1 from "@/images/why_now_1.jpeg";
import pic2 from "@/images/why_now_2.jpeg";
import pic3 from "@/images/why_now_3.jpeg";
import pic4 from "@/images/why_now_4.jpeg";

export default function WhyUs() {
    return (
        <div id="about" className="bg-[#FAF3E1] py-10 md:py-25">
            <Container1>
                {/* MOBILE */}
                <div className="md:hidden mx-auto w-full max-w-[320px]">
                    <h2 className="text-center text-[30px] leading-[1] mb-6">
                        If not now, when?
                    </h2>

                    <div className="text-left text-[18px] leading-[1.25] mb-6">
                        We create bouquets about mood, aesthetics, and genuine emotions.
                        <br />
                        About the moments that are important to experience right now.
                    </div>

                    <div className="grid grid-cols-[72px_1fr] gap-4 items-start mb-6">
                        <div className="pt-20">
                            <Image
                                src={pic3}
                                alt=""
                                className="w-full h-[110px] object-cover"
                            />
                        </div>

                        <div>
                            <Image
                                src={pic4}
                                alt=""
                                className="w-full h-[250px] object-cover"
                            />
                        </div>
                    </div>

                    <div className="text-left text-[18px] leading-[1.25]">
                        Flowers - are always on time.
                        <br />
                        Life - if not now, then when?
                    </div>
                </div>

                <div className="hidden md:block">
                    <div className="grid-container gap-x-10 gap-y-3 pt-20 md:pt-44.75">
                        <div className="photo1 adaptive-bloc">
                            <Image className="object-cover min-h-190.5" src={pic1} alt={""} />
                        </div>
                        <div className="photo2 adaptive-bloc">
                            <Image className="object-cover max-h-113" src={pic2} alt={""} />
                        </div>
                        <h2 className="title  text-5xl  xl:text-[80px] ">
                            If not now, when?
                        </h2>

                        <div className="text1 text-center lg:text-[18px] xl:text-[24px] flex items-end justify-center">
                            We create bouquets about mood, aesthetics, and genuine emotions.
                            <br />
                            About the moments that are important to experience right now.
                        </div>

                        <div className="photo3 adaptive-bloc ">
                            <Image className="object-cover  xl:max-h-130" src={pic3} alt={""} />
                        </div>
                        <div className="photo4 adaptive-bloc">
                            <Image className="object-cover max-h-162 " src={pic4} alt={""} />
                        </div>
                        <div className="text2 text-center text-4xl flex items-end justify-center">
                            <p>
                                Flowers - are always on time.
                                <br />
                                Life - if not now, then when?
                            </p>
                        </div>
                    </div>
                </div>
            </Container1>
        </div>
    );
}