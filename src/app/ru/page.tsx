import RuHero from "@/components/shared/main/hero";
import WhyUs from "@/components/shared/main/WhyUs";
import Products from "@/components/shared/main/products";
import Contacts from "@/components/shared/main/contacts";
import Footer from "@/components/shared/footer";

export default function RuHome() {
    return (
        <>
            <RuHero />
            <WhyUs />
            <Products />
            <Contacts />
            <Footer />
        </>

    );
}