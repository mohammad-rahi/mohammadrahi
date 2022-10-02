import { createContext } from "react";
export const ProductsContext = createContext(null);
import products from "../pages/api/products/products.json";

const ProductsProvider = ({ children }) => {

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;