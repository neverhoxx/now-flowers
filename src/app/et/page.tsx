import EtHero from "@/components/shared/et/hero";
import EtWhyUs from "@/components/shared/et/WhyUs";
import EtProducts from "@/components/shared/et/products";
import EtContacts from "@/components/shared/et/contacts";
import EtFooter from "@/components/shared/et/footer";

export default function RuHome() {
    return (
        <>
            <EtHero />
            <EtWhyUs />
            <EtProducts />
            <EtContacts />
            <EtFooter />
        </>

    );
}