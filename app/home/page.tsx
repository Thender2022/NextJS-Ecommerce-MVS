import Image from "next/image";
import Navbar from "../../components/Navbar";
import { stripe } from "@/lib/stripe"
import NarutoCard from "@/public/NarutoCard.jpg"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";

export default async function Home() {
    const products = await stripe.products.list({
        expand: ["data.default_price"],
        limit: 5,
    })
    
    return (
        <>
            <Navbar />
            <main>
                <div>
                    <section className="rounded bg-gray-100 mx-auto max-w-5xl py-8 sm:py-12 flex items-center min-h-[400px]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 sm:px-16 my-auto items-center justify-items-center">
                            <div id="section1" className="max-w-md space-y-4">
                                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Welcome to the Studio</h1>
                                <p className="text-neutral-600">We Collect So You Can Connect!</p>
                                <Button asChild variant="default" className="w-36 inline-flex items-center justify-center rounded-full px-6 py-3 !text-white">
                                    <Link href="/services" className="inline-flex items-center justify-center rounded-full px-6 py-3">Browse Services</Link>
                                </Button>
                            </div>
                            <Image 
                                alt="Banner Image"
                                width={450}
                                height={450}
                                src={products.data[0].images[0]}
                                className="rounded"
                            />
                        </div>
                    </section>
                    <section className="py-8 mx-auto max-w-5xl">
                        <Carousel products={products.data} />
                    </section>
                </div>

            </main>
        </>
    )
}