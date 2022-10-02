import products from '../pages/api/products/products.json';
import Product from "./Product";

const ScrollCard = ({ scrollCard }) => {
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
                                        id={id}
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
                                        id={id}
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

export default ScrollCard;