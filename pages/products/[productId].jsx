import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import products from "../api/products/products.json";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function ProductDetail() {
    const { query: { productId } } = useRouter();
    let product = products.find(item => item.id === parseInt(productId));
    const [openModal, setOpenModal] = useState(false);

    const changeImage = (imageURL) => {
        document.querySelector("#productImage").src = imageURL;
    };

    return (
        <>
            <Head>
                {
                    product && <title>Amazon.com: {product.title}</title>
                }
            </Head>
            <div>
                <Header />
                {
                    product && <>
                        <div className="max-w-screen-2xl mx-auto w-[90%] min-h-screen pb-8 lg:py-8">
                            <div className="flex gap-4 xl:gap-8 lg:flex-row flex-col">
                                <div className="lg:flex gap-8 w-full lg:w-[50vw] xl:w-[45vw]">
                                    <div className="hidden lg:flex flex-col gap-2">
                                        {
                                            product.images.map((item, index) => (
                                                <figure
                                                    key={index}
                                                    onMouseOver={() => changeImage(item)}
                                                    className="border border-gray-500 hover:border-yellow-500 hover:shadow hover:shadow-yellow-500 cursor-pointer relative w-[40px] h-[40px]"
                                                >
                                                    <Image
                                                        src={item}
                                                        alt={product.title}
                                                        layout="fill"
                                                        objectFit="cover"
                                                    />
                                                </figure>
                                            ))
                                        }
                                    </div>
                                    <h1 className="lg:hidden text-xl text-gray-700 my-4">{product.title}</h1>
                                    {
                                        openModal && <div className="lg:hidden figure_overlay fixed top-0 left-0 bottom-0 right-0 bg-black z-20 flex items-center justify-center">
                                            <span className="bg-white fixed top-2 left-2 p-1 px-2 rounded font-medium cursor-pointer" onClick={() => setOpenModal(false)}>&lang; Back</span>
                                            <figure className="relative w-[90vw] h-[80vh]">
                                                <Image
                                                    id="productImage"
                                                    src={product.images[0]}
                                                    alt={product.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                />
                                            </figure>
                                        </div>
                                    }
                                    <div className="flex lg:block justify-center items-center">
                                        <figure className="relative h-fit w-fit">
                                            <div onClick={() => setOpenModal(true)} className="lg:hidden absolute left-0 right-0 bottom-0 top-0 z-10 cursor-zoom-in lg:cursor-default"></div>
                                            <Image
                                                id="productImage"
                                                src={product.images[0]}
                                                alt={product.title}
                                                width={500}
                                                height={500}
                                                objectFit="cover"
                                            />
                                        </figure>
                                    </div>
                                </div>
                                <div className="flex flex-col-reverse xl:flex-row gap-4 justify-center w-full lg:w-[50vw] xl:w-[55vw]">
                                    <div className="w-[90%] mx-auto">
                                        <h1 className="hidden xl:block text-3xl text-gray-700">{product.title}</h1>
                                        <hr className="my-4 hidden xl:block" />
                                        <div>
                                            <div className="hidden">
                                                <p className="font-semibold text-red-700 text-lg">Currently unavailable.</p>
                                                <p>We don&apos;t know when or if this item will be back in stock.</p>
                                            </div>
                                            <ul>
                                                <li><strong className="mr-4">Brand</strong> Popular Brand</li>
                                                <li><strong className="mr-4">Material</strong> Metal</li>
                                                <li><strong className="mr-4">MetalBrand</strong> Asbyoi</li>
                                                <li><strong className="mr-4">Item Dimensions</strong> 1.57 x 1.57 x 1.57 inches</li>
                                                <li><strong className="mr-4">LxWxH</strong></li>
                                            </ul>
                                        </div>
                                        <hr className="my-4" />
                                        <p className="font-bold">About this item</p>
                                        <ul className="list-disc">
                                            <li>{product.description}</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum omnis ex saepe expedita quo asperiores tempore debitis nam recusandae dolor temporibus optio impedit sint aut, neque dolorum eum odit.</li>
                                            <li>{product.description}</li>
                                            <li>{product.description}</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum omnis ex saepe expedita quo asperiores tempore debitis nam recusandae dolor temporibus optio impedit sint aut, neque dolorum eum odit.</li>
                                            <li>{product.description}</li>
                                            <li>{product.description}</li>
                                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum omnis ex saepe expedita quo asperiores tempore debitis nam recusandae dolor temporibus optio impedit sint aut, neque dolorum eum odit.</li>
                                            <li>{product.description}</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h1 className="hidden lg:block xl:hidden text-3xl text-gray-700">{product.title}</h1>
                                        <hr className="xl:hidden bg-gray-200 h-1 my-4" />
                                        <div className="xl:border border-gray-500 rounded-md lg:p-4">
                                            <p className="text-4xl lg:text-3xl font-semibold"><sup className="text-base">$</sup><span>{product.price}</span><sup className="text-lg">99</sup></p>

                                            <p className="text-sm mt-2">$115.37 Shipping &amp; Import Fees Deposit to Bangladesh</p>

                                            <p className="font-bold text-green-600 my-3 text-lg">In Stock.</p>

                                            <div className="flex flex-col items-center">
                                                <button className="rounded-2xl bg-yellow-400 py-[10px] xl:py-[5px] whitespace-nowrap text-sm w-full mb-4 hover:bg-yellow-500">Add to Cart</button>

                                                <button className="rounded-2xl bg-orange-400 hover:bg-orange-500 py-[10px] xl:py-[5px] whitespace-nowrap text-sm w-full">Buy Now</button>
                                            </div>


                                            <p className="flex gap-2 font-medium text-sm mt-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 text-gray-500">
                                                    <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-green-700">Secure transaction</span>
                                            </p>

                                            <hr className="my-3" />
                                            <button className="rounded border border-gray-500 bg-gray-100 text-start px-3 py-[10px] lg:py-[5px] shadow-sm text-sm w-full">Add to List</button>
                                        </div>
                                        <hr className="xl:hidden bg-gray-200 h-1 my-4" />

                                        {/* <div className="border border-gray-500 rounded-md p-4 text-center text-sm">
                                            <p className="font-bold text-red-700">Currently unavailable.</p>
                                            <p>We don&apos;t know when or if this item will be back in stock.</p>
                                            <hr className="my-3" />
                                            <button className="rounded w-full border border-gray-500 bg-gray-100 text-start px-2 py-1 shadow-sm">Add to List</button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
                <Footer />
            </div>
        </>
    );
}

export default ProductDetail;