import products from "../dataBase/products";

export const getProductsList = async () => {
  try {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true 
      },
      body: JSON.stringify(products),
    }
  } catch (e) {
    console.error(`Error: ${e}`);
    
    return {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Credentials" : true 
      },
      body: JSON.stringify({message: `Something went wrong: ${e.message}`}),
    }
  }
};