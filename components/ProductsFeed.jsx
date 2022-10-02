import Image from "next/image";
import Link from "next/link";
import Product from "./Product";
import ScrollCard from "./ScrollCard";

function ProductsFeed({ products, home }) {

    const ProductStructure = ({ card, scrollCard1, scrollCard2, scrollCard3 }) => {
        return (
            <>
                <div className={`card_wrapper grid-flow-dense grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 md:gap-5 px-2 md:px-7 ${card.special ? "card_special whitespace-nowrap overflow-x-auto overflow-y-hidden md:grid mb-1 md:mb-5" : "grid"}`}>
                    {
                        products.slice(card.start, card.end).map(({ id, title, price, description, category: { name }, images, rating }) => (
                            <Product
                                key={id}
                                id={id}
                                title={title}
                                price={price}
                                description={description}
                                category={name}
                                image={images}
                                rating={rating}
                                home={home}
                                special={card.special}
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
                    scrollCard2 && <>
                        <ScrollCard scrollCard={scrollCard2} />

                        <div className="relative mx-2 md:mx-7 h-44 sm:h-60 md:h-96 lg:h-[30rem] mb-2 md:mb-5">
                            <Image
                                src={scrollCard2.src}
                                layout="fill"
                                alt="Banner"
                            />
                        </div>
                    </>
                }

                {
                    scrollCard3 && <ScrollCard scrollCard={scrollCard3} />

                }
            </>
        );
    };

    return (
        <div className={`${home && "mt-[-203px] relative top-0 left-0 right-0"}`}>

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
                scrollCard2={{ category: "Others", cardStart: 0, cardEnd: 15, index: 1, src: "/assets/images/toy_games.jpg" }} />

            <ProductStructure
                card={{ start: 11, end: 17 }}
                scrollCard1={{ category: "Shoes", index: 2 }}
                scrollCard2={{ category: "Clothes", index: 3, src: "/assets/images/home_store.jpg" }} />

            <ProductStructure
                card={{ start: 17, end: 23 }}
                scrollCard1={{ category: "Others", cardStart: 15, cardEnd: 30, index: 4 }}
                scrollCard2={{ category: "Furniture", index: 5, src: "/assets/images/toy_games.jpg" }}
                scrollCard3={{ category: "Others", cardStart: 30, cardEnd: 43, index: 6 }} />

        </div>
    );
}

export default ProductsFeed;