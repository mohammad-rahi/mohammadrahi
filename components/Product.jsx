import Image from "next/image";
import Link from "next/link";

function Product({ id, title, price, description, category, image, rating, fluid }) {
    return (
        <>
            {
                !fluid ? <div className="shadow-md bg-white p-4 flex flex-col items-start gap-2">
                    <h2 className="font-bold text-[22px] capitalize">
                        {
                            title.length > 25 ? <>{title.slice(0, 25)}...</> : <>{title}</>
                        }
                    </h2>
                    <figure className="relative w-full h-80 my-2 bg-gray-100 cursor-pointer">
                        <Image
                            src={image[0]}
                            layout="fill"
                            objectFit="cover"
                            alt={title}
                        />
                    </figure>

                    <Link href="#">
                        <span className="text-blue-500 hover:text-red-500 hover:underline cursor-pointer w-full">Shop now</span>
                    </Link>
                </div> : <div className="inline-block w-52 my-2 cursor-pointer">
                    <figure className="relative w-full h-60 bg-gray-100">
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