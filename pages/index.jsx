import Head from "next/head"
import { useRouter } from "next/router"
import Button from "../components/Button"
import Code from "../components/Code"

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

      <div className="flex flex-col w-full h-[85vh] justify-center">

        <Code element="h1" close={false}>
          <h1 className="text-5xl lg:text-7xl font-bold">Hi, <br /> I&apos;m Rahi, <br /> <span className="text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text">Front-End Developer</span>
            <Code element="h1" open={false} />
          </h1>
        </Code>

        <Code element="p">
          <p className="text-xl">I want to make things
            that make a difference.</p>
        </Code>

        <div className="ml-6">
          <Button onClick={() => router.push("/contact")}>Contact Me!</Button>
        </div>

      </div>
    </>
  )
}

export default Index