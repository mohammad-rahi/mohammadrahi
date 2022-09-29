import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductsFeed from '../components/ProductsFeed'
import Footer from '../components/Footer'

const index = ({ products }) => {

  return (
    <>
      <Head>
        <title>Amazon.com. Spend less. Smile more.</title>
        <meta name="description" content="Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime. Enjoy low prices and great deals on the largest selection of everyday essentials and other products, including fashion, home, beauty, electronics, Alexa Devices, sporting goods, toys, automotive, pets, baby, books, video games, musical instruments, office supplies, and more." />
        <meta name="keywords" content="Amazon, Amazon.com, Books, Online Shopping, Book Store, Magazine, Subscription, Music, CDs, DVDs, Videos, Electronics, Video Games, Computers, Cell Phones, Toys, Games, Apparel, Accessories, Shoes, Jewelry, Watches, Office Products, Sports &amp; Outdoors, Sporting Goods, Baby Products, Health, Personal Care, Beauty, Home, Garden, Bed &amp; Bath, Furniture, Tools, Hardware, Vacuums, Outdoor Living, Automotive Parts, Pet Supplies, Broadband, DSL" />
        <link rel="shortcut icon" href="/amazon.ico" type="image/x-icon" />
      </Head>

      <div className='bg-[#e9e9e9]'>
        <Header />

        <div className='max-w-screen-2xl mx-auto'>
          <Banner />
          <ProductsFeed products={products} />
        </div>

        <Footer />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  // const products = await fetch("https://api.escuelajs.co/api/v1/products")

  const products = await fetch(`http://localhost:3000/api/products`)
    .then(res => res.json())

  return {
    props: {
      products
    },
  }
}

export default index