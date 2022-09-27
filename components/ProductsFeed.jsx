import Product from "./Product";

function ProductsFeed({ products }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 px-7 absolute top-[59%] left-0 right-0">
            {
                products.map(({ id, title, price, description, category, image, rating }) => (
                    <Product
                        key={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                    />
                ))
            }
        </div>
    );
}

export default ProductsFeed;