import Image from "next/image";
import Link from "next/link";

function Product({ id, title, price, description, category, image, rating }) {
    return (
        <div className="shadow-md bg-white p-4 flex flex-col items-start gap-2">
            <h2 className="font-bold text-xl">{title.slice(0, 25)}...</h2>
            <figure className="relative w-full h-72 my-2">
                <Image
                    src={image}
                    layout="fill"
                    objectFit="contain"
                    alt={title}
                />
            </figure>

            <Link href="#">
                <span className="text-blue-500">Shop now</span>
            </Link>
        </div>
    );
}

export default Product;