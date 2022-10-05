import Head from "next/head"
import Link from "next/link"
import Code from "../components/Code"

function error() {
    return (
        <>
            <Head>
                <title>Mohammad Rahi: 404 Not Found</title>
            </Head>

            <Code element="h2">
                <h2 className='text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text'>404
                </h2>
            </Code>

            <div className="flex flex-col w-full min-h-[70vh] justify-center">
                <Code element="404">
                    <h3 className="text-2xl text-center">Not Found | <Link href='/'><span className="text-secondary-text hover:underline cursor-pointer">Go back to Home page</span></Link></h3>
                </Code>
            </div>
        </>
    )
}

export default error