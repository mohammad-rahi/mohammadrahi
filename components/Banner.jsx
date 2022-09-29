import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <>
            {/* For Large Devices */}
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                className="select-none carousel-slider hidden md:block"
            >
                <div className="relative w-screen h-screen">
                    <Image
                        loading="lazy"
                        src="/assets/images/electronics.jpg"
                        alt="Banner Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="relative w-screen h-screen">
                    <Image
                        loading="lazy"
                        src="/assets/images/toy_game.jpg"
                        alt="Banner Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="relative w-screen h-screen">
                    <Image
                        loading="lazy"
                        src="/assets/images/we_provide.jpg"
                        alt="Banner Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="relative w-screen h-screen">
                    <Image
                        loading="lazy"
                        src="/assets/images/home_store.jpg"
                        alt="Banner Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </Carousel>

            {/* For Small Devices */}
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                interval={5000}
                className="select-none carousel-slider md:hidden"
            >
                <Image
                    src="/assets/images/md-we_provide.jpeg"
                    alt="Banner Image"
                    width="768"
                    height="700"
                    objectFit="cover"
                />
                <Image
                    src="/assets/images/md-kitchen.jpeg"
                    alt="Banner Image"
                    width="768"
                    height="700"
                    objectFit="cover"
                />
                <Image
                    src="/assets/images/md-gammers.jpg"
                    alt="Banner Image"
                    width="768"
                    height="550"
                    objectFit="cover"
                />
            </Carousel>
        </>
    );
}

export default Banner;