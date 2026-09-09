import { Footer } from "@/components/home/footer"
import { Features } from "@/components/home/features"
import { FAQ } from "@/components/home/faq"
import { CallToAction } from "@/components/home/cta"
import { Hero } from "@/components/home/hero"
import { ProviderIcons } from "@/components/home/provider-icons"

export default function HomePage() {
    return (
        <>
            <main className="space-y-24">
                <Hero />
                <ProviderIcons />
                <Features />
                <FAQ />
                <CallToAction />
            </main>
            <Footer />
        </>
    )
}
