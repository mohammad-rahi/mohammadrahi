import Image from "next/image";
import Link from "next/link";
import Product from "./Product";

function ProductsFeed({ products }) {

    const scroll = (direction, index) => {
        let products_scrollbar = document.querySelectorAll(".products_scrollbar")[index]

        if (direction === "prev") {
            products_scrollbar.scrollLeft -= (products_scrollbar.clientWidth - 150);
        }

        if (direction === "next") {
            products_scrollbar.scrollLeft += (products_scrollbar.clientWidth - 150);
        }
    };

    const ScrollCardButton = ({ angle, index }) => {
        return (
            <button
                className={`scroll_handler border p-1 h-16 md:h-32 ${angle === "left" ? "rounded-r-md left-0" : "rounded-l-md right-0"} text-white cursor-pointer absolute bg-[#00000050] hover:bg-[#00000080] transition z-10`}
                onClick={() => scroll((angle === "left" ? "prev" : "next"), index)}
            >
                {
                    angle === "left" ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 md:w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 md:w-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                }
            </button>
        );
    };

    const ScrollCard = ({ scrollCard }) => {
        return (
            <div className="mx-2 md:mx-7 my-2 md:my-5 p-1 md:p-4 md:pb-2 bg-white">
                <h2 className="font-medium md:font-bold text-base md:text-[22px]">
                    {
                        scrollCard.category === "Others" ? <>Top International Sellers for you</> : <>Top Sellers in {scrollCard.category} for you</>
                    }
                </h2>

                <div className="flex items-center relative">
                    <ScrollCardButton angle="left" index={scrollCard.index} />

                    <div className="products_scrollbar overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                        {
                            scrollCard.category === "Others" ? <>
                                {
                                    products.filter(item => item.category.name === scrollCard.category).slice(scrollCard.cardStart, scrollCard.cardEnd).map(({ id, title, price, description, category: { name }, images, rating }) => (
                                        <Product
                                            key={id}
                                            title={title}
                                            price={price}
                                            description={description}
                                            category={name}
                                            image={images}
                                            rating={rating}
                                            fluid
                                        />
                                    ))
                                }
                            </> : <>
                                {
                                    products.filter(item => item.category.name === scrollCard.category).map(({ id, title, price, description, category: { name }, images, rating }) => (
                                        <Product
                                            key={id}
                                            title={title}
                                            price={price}
                                            description={description}
                                            category={name}
                                            image={images}
                                            rating={rating}
                                            fluid
                                        />
                                    ))
                                }
                            </>
                        }
                    </div>

                    <ScrollCardButton angle="right" index={scrollCard.index} />
                </div>
            </div>
        )
    };

    const ProductStructure = ({ card, scrollCard1, scrollCard2, scrollCard3 }) => {
        return (
            <>
                <div className={`card_wrapper grid-flow-dense grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-5 px-2 md:px-7 ${card.special ? "card_special flex whitespace-nowrap overflow-x-auto overflow-y-hidden md:grid mb-1 md:mb-5" : "grid"}`}>
                    {
                        products.slice(card.start, card.end).map(({ id, title, price, description, category: { name }, images, rating }) => (
                            <Product
                                key={id}
                                title={title}
                                price={price}
                                description={description}
                                category={name}
                                image={images}
                                rating={rating}
                            />
                        ))
                    }

                    {
                        card.special && <div className="hidden md:flex justify-center items-center flex-col gap-1 md:gap-5">
                            <div className="bg-white my-1 mx-2 md:mx-7 p-1 md:p-4 flex flex-col w-full">
                                <p className="text-lg font-normal text-gray-600">Sign in for the best experience</p>
                                <Link href="/signin">
                                    <button className="bg-yellow-400 text-gray-600 my-3 py-2 w-full rounded-md font-normal">Sign in securely</button>
                                </Link>
                                <Link href="/register">
                                    <span className="text-sky-300 hover:text-yellow-500 cursor-pointer">Create an account</span>
                                </Link>
                            </div>

                            <figure className="relative w-full h-40 md:h-64 bg-gray-100 cursor-pointer">
                                <Image
                                    src="/assets/images/products.jpg"
                                    alt="Products"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </figure>
                        </div>
                    }

                </div>

                {
                    scrollCard1 && <ScrollCard scrollCard={scrollCard1} />
                }

                {
                    scrollCard2 && <ScrollCard scrollCard={scrollCard2} />
                }

                {
                    scrollCard3 && <ScrollCard scrollCard={scrollCard3} />
                }
            </>
        );
    };

    return (
        <div className="mt-[-203px] relative top-0 left-0 right-0">

            <ProductStructure card={{ start: 0, end: 5, special: true }} />

            <div className="bg-white m-2 p-2 flex md:hidden flex-col items-start">
                <p className="text-lg font-normal text-gray-600">Sign in for the best experience</p>
                <Link href="/signin">
                    <button className="bg-yellow-400 text-gray-600 my-3 py-2 w-full rounded-md font-normal">Sign in securely</button>
                </Link>
                <Link href="/register">
                    <span className="text-sky-300 hover:text-yellow-500 cursor-pointer">Create an account</span>
                </Link>
            </div>

            <ProductStructure
                card={{ start: 5, end: 11 }}
                scrollCard1={{ category: "Electronics", index: 0 }}
                scrollCard2={{ category: "Others", cardStart: 0, cardEnd: 15, index: 1 }} />

            <div className="relative mx-2 md:mx-7 h-44 sm:h-60 md:h-96 lg:h-[30rem] mb-2 md:mb-5">
                <Image
                    src="/assets/images/toy_games.jpg"
                    layout="fill"
                    alt="Banner"
                />
            </div>

            <ProductStructure
                card={{ start: 11, end: 17 }}
                scrollCard1={{ category: "Shoes", index: 2 }}
                scrollCard2={{ category: "Clothes", index: 3 }} />

            <div className="relative mx-2 md:mx-7 h-44 sm:h-60 md:h-96 lg:h-[30rem] mb-2 md:mb-5">
                <Image
                    src="/assets/images/home_store.jpg"
                    layout="fill"
                    alt="Banner"
                />
            </div>

            <ProductStructure
                card={{ start: 17, end: 23 }}
                scrollCard1={{ category: "Others", cardStart: 15, cardEnd: 30, index: 4 }}
                scrollCard2={{ category: "Furniture", index: 5 }}
                scrollCard3={{ category: "Others", cardStart: 30, cardEnd: 43, index: 6 }} />

        </div>
    );
}

export default ProductsFeed;