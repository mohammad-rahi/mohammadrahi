import Head from "next/head"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import Code from "../components/Code"
import Button from "../components/Button";

const About = dynamic(() => import("./about"), {
  suspense: true
});
const Skills = dynamic(() => import("./skills"), {
  suspense: true
});
const Work = dynamic(() => import("./work"), {
  suspense: true
});
const Education = dynamic(() => import("./education"), {
  suspense: true
});
const Contact = dynamic(() => import("./contact"), {
  suspense: true
});
const Blog = dynamic(() => import("./blog"), {
  suspense: true
});
const Resume = dynamic(() => import("./resume"), {
  suspense: true
});

const Index = () => {
  const router = useRouter();

  // window.addEventListener("mousemove", (event) => {
  //   const x = event.clientX;
  //   const y = event.clientY;
  //   document.getElementById("pointer").style.top = `${y}px`
  //   document.getElementById("pointer").style.left = `${x}px`
  // });

  return (
    <>
      <Head>
        <title>Mohammad Rahi</title>
      </Head>

      <div className="flex flex-col w-full min-h-[80vh] justify-center">

        <Code element="h1" close={false}>
          <h1 className="text-5xl xl:text-7xl font-bold">Hi, <br /> I&apos;m Rahi, <br /> <span className="text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text">Front-End Developer</span>
            <Code element="h1" open={false} />
          </h1>
        </Code>

        <Code element="p">
          <p className="text-xl">I want to make things
            that make a difference.</p>
        </Code>

        <div className="ml-3">
          <Button
          buttonStyle="btn_outline"
            onClick={() => router.push("/contact")}>Contact Me!</Button>
        </div>

      </div>

      <Suspense fallback={<h1 className="text-4xl font-bold text-center text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text">Loading...</h1>}>
        <About />
        <Skills />
        <Work />
        {/* <Education /> */}
        <Contact />
        <Blog />
        <Resume />
      </Suspense>
    </>
  )
}

export default Index