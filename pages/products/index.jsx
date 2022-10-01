import { useContext } from "react";
import ProductsFeed from "../../components/ProductsFeed";
import { ProductsContext } from "../../context/ProductsContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";

function Index() {
    const { products } = useContext(ProductsContext);
    return (
        <>
            <Head>
                <title>Amazon.com</title>
            </Head>
            <div className='bg-[#e9e9e9]'>
                <Header />

                <div className='max-w-screen-2xl mx-auto pt-5'>
                    <ProductsFeed products={products} />
                </div>

                <Footer />
            </div>
        </>
    );
}

export default Index;