const { default: axiosClient } = require("./axiosClient");

const getAllProducts = () => axiosClient.get("/products?populate=*");
const getSingleProduct = (id) => axiosClient.get(`/products/${id}`);

const getProductsByCategory = (category)=>axiosClient.get(`/products?filters[category][$eq]=${category}&populate=*`)
export default {
  getAllProducts,
  getSingleProduct,
  getProductsByCategory
};
