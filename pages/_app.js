import Head from 'next/head';
import AuthProvider from '../context/AuthContext';
import ProductsProvider from '../context/ProductsContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  let products = [
    {
      id: 1,
      title: "Electronics",
      images: ["/assets/images/amazon_logo.png"],
      category: "Electronics"
    },
    {
      id: 2,
      title: "Clothes",
      images: ["/assets/images/amazon_logo.png"],
      category: "Clothes"
    },
    {
      id: 3,
      title: "Others",
      images: ["/assets/images/amazon_logo.png"],
      category: "Others"
    }
  ]

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/amazon.ico" type="image/x-icon" />
      </Head>

      <ProductsProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ProductsProvider>

    </>
  );
}

export default MyApp