import { stripe } from "@/lib/stripe";
import { ProductList } from "@/components/ui/product-list";
import Navbar from "../../components/Navbar";

export default async function Services() {
    const products = await stripe.products.list({
            expand: ["data.default_price"],
        })
    return (
        <>
            <Navbar />
            <main>
                <div className="pb-8">
                    <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">All Services Offered</h1>
                    <ProductList products={products.data} />
                </div>
            </main>
        </>
    )
}