import Image from "next/image";
import Link from "next/link";

function Product({ id, title, price, description, category, image, rating, fluid }) {
    return (
        <>
            {
                !fluid ? <div className="product_card md:shadow-md bg-white p-1 md:p-4 inline-block md:flex flex-col items-start gap-2">
                    <h2 className="font-medium md:font-bold text-base md:text-[22px] capitalize">
                        {
                            title.length > 25 ? <>{title.slice(0, 25)}...</> : <>{title}</>
                        }
                    </h2>
                    <figure className="relative w-full h-40 md:h-80 mt-1 md:my-2 bg-gray-100 cursor-pointer">
                        <Image
                            src={image[0]}
                            layout="fill"
                            objectFit="cover"
                            alt={title}
                        />
                    </figure>

                    <div className="hidden md:block">
                        <Link href="#">
                            <span className="text-blue-500 hover:text-red-500 hover:underline cursor-pointer w-full">Shop now</span>
                        </Link>
                    </div>
                </div> : <div className="inline-block w-52 my-2 cursor-pointer">
                    <figure className="relative w-full h-44 md:h-60 bg-gray-100">
                        <Image
                            src={image[0]}
                            layout="fill"
                            objectFit="cover"
                            alt={title}
                        />
                    </figure>
                </div>
            }
        </>
    );
}

export default Product;