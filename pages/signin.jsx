import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const [error, setError] = useState(null);

    useEffect(() => {
        document.getElementById("email").focus();
    }, []);

    const handleSignIn = (event) => {
        event.preventDefault();
        if (emailRef.current.value && passwordRef.current.value.length >= 6) {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then(res => {
                    console.log(res)
                    setError(null)
                })
                .catch(err => {
                    if (err.message === "Firebase: Error (auth/user-not-found).") {
                        setError("User not found.")
                    }
                    else {
                        setError(err.message)
                    }
                })
        }
        else {
            setError("Password should be at least 6 characters");
        }
    };

    return (
        <>
            <Head>
                <title>Amazon Sign-In</title>
                <link rel="shortcut icon" href="/amazon.ico" type="image/x-icon" />
            </Head>
            <div className="overfow-hidden">
                <div>
                    <div className=" min-h-[60vh] w-screen flex items-center justify-center flex-col gap-4 shadow-sm py-4">
                        <Image
                            src="/assets/images/amazon_black_logo.png"
                            alt="Amazon Logo"
                            width={150}
                            height={40}
                            objectFit="contain"
                        />

                        <div>
                            <form className="border rounded p-5 w-[90vw] max-w-sm registraion_form" autoComplete="off" onSubmit={handleSignIn}>
                                {
                                    error && <div className="bg-red-200 rounded p-1 px-2 mb-1 text-sm">
                                        <p className="text-red-600"><strong>Error: </strong>{error}</p>
                                    </div>
                                }
                                <h2 className="font-normal text-3xl mb-4">Sign in</h2>
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="email" className="font-bold text-sm mb-1">Email address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        ref={emailRef}
                                        required
                                        className="border transition focus:outline-none border-gray-400 px-2 py-1 text-sm rounded" />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="password" className="font-bold text-sm mb-1">Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        ref={passwordRef}
                                        required
                                        className="border transition focus:outline-none border-gray-400 px-2 py-1 text-sm rounded" />
                                </div>
                                <button type="submit" className="border border-gray-400 rounded text-sm py-[5px] w-full mt-2 bg-yellow-400 hover:bg-yellow-500">Sign in</button>

                                <p className="text-xs mt-4">By continuing, you agree to Amazon&apos;s <span className="text-sky-500 hover:text-red-600 hover:underline cursor-pointer">Conditions of Use</span> and <span className="text-sky-500 hover:text-red-600 hover:underline cursor-pointer">Privacy Notice</span>.</p>

                                <p className="text-sm text-sky-500 hover:text-red-600 hover:underline flex items-center mt-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                    Need help?
                                </p>

                            </form>
                            <p className="text-xs text-gray-600 text-center mt-6 side_border">New to Amazon?</p>
                            <Link href="/register">
                                <button className="py-[5px] border border-gray-400 rounded w-full text-sm mt-3 bg-gray-200 hover:bg-gray-300">Create your Amazon account</button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-screen text-center text-xs mt-6">
                        <div className="flex gap-8 justify-center">
                            <span className="text-sky-500 hover:text-red-600 hover:underline cursor-pointer">Conditions of Use</span>
                            <span className="text-sky-500 hover:text-red-600 hover:underline cursor-pointer">Privacy Notice</span>
                            <span className="text-sky-500 hover:text-red-600 hover:underline cursor-pointer">Help</span>
                        </div>
                        <p className="mt-2">&copy; 1996-{(new Date()).getFullYear()}, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;