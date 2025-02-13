import { ProductCatalogsResponse } from "../types";

export const transformProductData = (product: ProductCatalogsResponse['data'][0], userId?: number | null) => ({
     id: product.id,
     name: product.attributes.name,
     description: product.attributes.description,
     price: product.attributes.price,
     thumbnail: product.attributes.thumbnail.data?.attributes.url,
     images: product.attributes.images.data.map((image) => ({
          id: image.id,
          url: image.attributes.url,
     })),
     categories: product.attributes.categories.data.map((category) => ({
          id: category.id,
          name: category.attributes.name,
     })),
     isLiked: userId ? product.attributes.likes?.some((like) => like.id === userId) : false,
});