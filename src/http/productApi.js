import {$host} from "./index";

export const getProducts = async () => {
    const {data} = await $host.get('/api/product')
    return data
}

export const getProduct = async (id) => {
    const {data} = await $host.get(`/api/product/${id}`)
    return data
}

export const httpSetReviewProduct = async (product) => {
    const {data} = await $host.post(`/api/product/update`, {product})
    return data
}