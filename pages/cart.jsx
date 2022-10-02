import Image from "next/image"
import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ScrollCard from "../components/ScrollCard"

function cart() {
    const router = useRouter();

    return (
        <div className="bg-[#e9e9e9]">
            <Header />

            <div className="max-w-screen-2xl mx-auto">
                <div className="flex gap-5 m-5">
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 bg-white shadow-md pb-8 md:p-0">
                            <figure className="relative w-[400px] h-[300px]">
                                <Image src="/assets/images/kettle.svg" alt="Cart Image" layout="fill" />
                            </figure>
                            <div className="md:place-self-start md:mt-12">
                                <p className="font-bold text-2xl">Your Amazon Cart is empty</p>
                                <div className="mt-4">
                                    <button onClick={() => router.push("/signin")} className="bg-yellow-400 hover:bg-yellow-500 p-1 px-3 rounded-md border border-yellow-500 mr-2 shadow">Sign in to your account</button>
                                    <button onClick={() => router.push("/register")} className="p-1 px-3 rounded-md border border-gray-500 hover:bg-gray-100 shadow">Sign up now</button>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm my-4 pb-12">The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item&apos;s most recent price. Shopping CartLearn more

                            Do you have a gift card or promotional code? We&apos;ll ask you to enter your claim code when it&apos;s time to pay.</p>
                    </div>
                    {/* <div className=""></div> */}
                </div>
                <div className="">
                    <hr />
                    <ScrollCard scrollCard={{ category: "Electronics", index: 0 }} />

                    <ScrollCard scrollCard={{ category: "Others", cardStart: 0, cardEnd: 40, index: 1 }} />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default cart