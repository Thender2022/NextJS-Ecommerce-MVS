
// import { stripe } from "@/lib/stripe"
// import { ProductDetail } from "@/components/ui/product-detail"

// export default async function ServicePage({
//     params
// }: {
//     params: {id: string}
// }) {
//     const product = await stripe.products.retrieve(params.id, {
//         expand: ["default_price"]
//     })

//     const plainProduct = JSON.parse(JSON.stringify(product))

//     return (
//         <ProductDetail product={plainProduct} />
//     )
// }

import { stripe } from "@/lib/stripe"
import { ProductDetail } from "@/components/ui/product-detail"

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  })

  const plainProduct = JSON.parse(JSON.stringify(product))

  return <ProductDetail product={plainProduct} />
}
