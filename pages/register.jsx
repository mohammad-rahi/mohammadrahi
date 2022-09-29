import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useReducer, useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SET_ERROR = "SET_ERROR";

const initialState = {
    name: "",
    email: "",
    password: "",
    error: "",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "":

            break;

        default:
            return state;
            break;
    }
};

function Register() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const rePasswordRef = useRef();

    useEffect(() => {
        document.getElementById("name").focus();
    }, []);

    const handleCreateAccount = (event) => {
        event.preventDefault();
        if (nameRef.current.value && emailRef.current.value && passwordRef.current.value && rePasswordRef.current.value) {
            if (passwordRef.current.value.length >= 6 && passwordRef.current.value === rePasswordRef.current.value) {
                createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            }
            else {
                dispatch({
                    type: SET_ERROR,
                    payload: "Invalid Password."
                });
            }
        }
    }

    return (
        <>
            <Head>
                <title>Amazon Registration</title>
                <link rel="shortcut icon" href="/amazon.ico" type="image/x-icon" />
            </Head>
            <div className="overfow-hidden">
                <div>
                    <div className=" min-h-[60vh] w-screen flex items-center justify-center flex-col gap-4 shadow-sm pb-6 pt-4">
                        <Image
                            src="/assets/images/amazon_black_logo.png"
                            alt="Amazon Logo"
                            width={150}
                            height={40}
                            objectFit="contain"
                        />

                        <div>
                            <form className="border rounded p-5 w-[90vw] max-w-sm registraion_form" autoComplete="off" onSubmit={handleCreateAccount}>
                                <h2 className="font-normal text-3xl mb-4">Create account</h2>
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="name" className="font-bold text-sm mb-1">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        ref={nameRef}
                                        required
                                        className="border transition focus:outline-none border-gray-400 px-2 py-1 text-sm rounded"
                                        placeholder="First and last name"
                                    />
                                </div>
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
                                        className="border transition focus:outline-none border-gray-400 px-2 py-1 text-sm rounded"
                                        placeholder="At least 6 characters"
                                    />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label htmlFor="password" className="font-bold text-sm mb-1">Re-enter Password</label>
                                    <input
                                        type="password"
                                        id="password"
                                        ref={rePasswordRef}
                                        required
                                        className="border transition focus:outline-none border-gray-400 px-2 py-1 text-sm rounded"
                                    />
                                </div>
                                <button type="submit" className="border border-gray-400 rounded text-sm py-[5px] w-full mt-2 bg-yellow-400 hover:bg-yellow-500">Create Account</button>

                                <p className="text-xs mt-4">By continuing, you agree to Amazon&apos;s <span className="text-sky-500 hover:text-red-600 hover:underline cursor-pointer">Conditions of Use</span> and <span className="text-sky-500 hover:text-red-600 hover:underline cursor-pointer">Privacy Notice</span>.</p>

                                <p className="shadow h-[1px] my-6"></p>

                                <div className="text-xs">
                                    <p className="flex items-center">Already have an account? <Link href="/signin"><span className="text-sky-500 hover:text-red-600 hover:underline cursor-pointer flex mx-1">Sign in <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg></span></Link></p>
                                    <p className="flex items-center">Buying for work? <Link href="/register"><span className="text-sky-500 hover:text-red-600 hover:underline cursor-pointer flex mx-1">Create a free business account <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 mr-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg></span></Link></p>
                                </div>

                            </form>
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

export default Register;