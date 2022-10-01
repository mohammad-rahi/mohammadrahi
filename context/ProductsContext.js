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

// export async function getServerSideProps(context) {
//     // const products = await fetch(`https://api.escuelajs.co/api/v1/products`)

//     // const products = await fetch("https://amazon-mohammad-rahi.vercel.app/api/products")
//     const products = await fetch("http://localhost:3000/api/products")
//         .then(res => res.json())

//     return {
//         props: {
//             products
//         },
//     }
// }

export default ProductsProvider;