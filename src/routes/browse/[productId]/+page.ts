export const load = async ({ fetch, params }) => {
  const fetchProduct = async (id: string) => {
    const res = await fetch(`https://fakestoreapi.com/products/{id}`)
    const data = await res.json()
    return data
  }
  return {
    product: fetchProduct(params.productId)
  }
}