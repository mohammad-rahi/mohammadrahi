import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            className="select-none carousel-slider"
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
        </Carousel>
    );
}

export default Banner;