import Image from "next/image";
import Product from "./Product";

function ProductsFeed({ products }) {

    const scroll = (direction) => {
        let products_scrollbar = document.querySelector(".products_scrollbar")

        if (direction === "prev") {
            products_scrollbar.scrollLeft -= (products_scrollbar.clientWidth - 100);
        }

        if (direction === "next") {
            products_scrollbar.scrollLeft += (products_scrollbar.clientWidth - 100);
        }
    };

    return (
        <div className="mt-[-203px] relative top-0 left-0 right-0">
            <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-7">
                {
                    products.slice(0, 8).map(({ id, title, price, description, category: { name }, images, rating }) => (
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
            </div>

            <div className="mx-7 my-5 p-4 pb-2 bg-white">
                <h2 className="font-bold text-[22px]">Top Sellers in Electronics for you</h2>
                <div className="flex items-center relative">
                    <button
                        className="scroll_left p-1 h-32 rounded-r-md text-white cursor-pointer absolute bg-[#00000050] hover:bg-[#00000080] transition left-0 z-10"
                        onClick={() => scroll("prev")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <div
                        className="products_scrollbar overflow-x-scroll overflow-y-hidden whitespace-nowrap transition"
                    >
                        {
                            products.filter(item => item.category.name === "Electronics").map(({ id, title, price, description, category: { name }, images, rating }) => (
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
                    </div>

                    <button
                        onClick={() => scroll("next")}
                        className="scroll_right p-1 h-32 rounded-l-md text-white cursor-pointer absolute bg-[#00000050] hover:bg-[#00000080] transition right-0 z-10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="mx-7 my-5 p-4 pb-2 bg-white">
                <h2 className="font-bold text-[22px]">Top International Sellers for you</h2>
                <div className="products_scrollbar overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                    {
                        products.filter(item => item.category.name === "Others").slice(15, 30).map(({ id, title, price, description, category: { name }, images, rating }) => (
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
                </div>
            </div>

            <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-7">
                {
                    products.slice(68, 72).map(({ id, title, price, description, category: { name }, images, rating }) => (
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
            </div>

            <div className="mx-7 my-5 p-4 pb-2 bg-white">
                <h2 className="font-bold text-[22px]">Top Sellers in Shoes for you</h2>
                <div className="products_scrollbar overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                    {
                        products.filter(item => item.category.name === "Shoes").map(({ id, title, price, description, category: { name }, images, rating }) => (
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
                </div>
            </div>

            <div className="mx-7 my-5 p-4 pb-2 bg-white">
                <h2 className="font-bold text-[22px]">Top Sellers in Clothes for you</h2>
                <div className="products_scrollbar overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                    {
                        products.filter(item => item.category.name === "Clothes").map(({ id, title, price, description, category: { name }, images, rating }) => (
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
                </div>
            </div>

            <div className="grid grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-7">
                {
                    products.slice(132, 136).map(({ id, title, price, description, category: { name }, images, rating }) => (
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
            </div>

            <div className="mx-7 my-5 p-4 pb-2 bg-white">
                <h2 className="font-bold text-[22px]">Top International Sellers for you</h2>
                <div className="products_scrollbar overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                    {
                        products.filter(item => item.category.name === "Others").slice(0, 15).map(({ id, title, price, description, category: { name }, images, rating }) => (
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
                </div>
            </div>

            <div className="mx-7 my-5 p-4 pb-2 bg-white">
                <h2 className="font-bold text-[22px]">Top Sellers in Furniture for you</h2>
                <div className="products_scrollbar overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                    {
                        products.filter(item => item.category.name === "Furniture").map(({ id, title, price, description, category: { name }, images, rating }) => (
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
                </div>
            </div>

            <div className="mx-7 my-5 p-4 pb-2 bg-white">
                <h2 className="font-bold text-[22px]">Top Sellers for you</h2>
                <div className="products_scrollbar overflow-x-scroll overflow-y-hidden whitespace-nowrap">
                    {
                        products.filter(item => item.category.name === "Others").slice(30, 43).map(({ id, title, price, description, category: { name }, images, rating }) => (
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
                </div>
            </div>
        </div>
    );
}

export default ProductsFeed;