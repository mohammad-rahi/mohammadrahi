import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header";

function Error() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Amazon.com Page Not Found</title>
                <link rel="shortcut icon" href="/amazon.ico" type="image/x-icon" />
            </Head>
            <Header bottomNotRequired />
            <div className="flex flex-col items-center gap-4 py-2 font-thin text-gray-600 w-[90vw] mx-auto">
                <div onClick={() => router.push('/')} className="cursor-pointer">
                    <h1 className="text-9xl">SORRY</h1>
                    <h3 className="text-6xl">we couldn&apos;t find that page</h3>
                    <h6 className="text-3xl font-normal mt-2">Try searching or go to <span className="text-sky-500">Amazon&apos;s home page</span>.</h6>
                </div>

                <Image
                    src="/assets/images/dog.jpg"
                    alt="Mollie Dog"
                    width={550}
                    height={400}
                />
            </div>
        </>
    );
}

export default Error;