export const getDataApi = async () => {
    const api = "https://fakestoreapi.com/products"
    const raw = await fetch(api)
    const data = await raw.json()
    return data
}