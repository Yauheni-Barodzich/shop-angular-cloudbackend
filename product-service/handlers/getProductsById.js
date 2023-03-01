import products from "../dataBase/products";

export const getProductsById = async ({pathParameters}) => {
  const {productId} = pathParameters;

  try {
    const matchedProducts = products.filter(product => product.id === +productId);
    const isFindProduct = !!matchedProducts.length;

    return {
      statusCode: isFindProduct ? 200 : 404,
      body: JSON.stringify(isFindProduct ? matchedProducts : {message: "Product is not found"})
    }
  } catch (e) {
    console.error(`Error: ${e}`);
    
    return {
      statusCode: 404,
      body: JSON.stringify({message: `Something went wrong: ${e.message}`}),
    }
  }
};