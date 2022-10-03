import Head from 'next/head'
import Image from 'next/image'
import Code from '../components/Code'

const about = () => {
    return (
        <>
            <Head>
                <title>Mohammad Rahi: About</title>
            </Head>

            <div className='flex flex-col w-full h-[85vh] justify-center'>
                {/* <Code element="about"> */}
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <Code element="h2">
                            <h2 className='text-6xl text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text'>About <span className='border-b-4 border-secondary-bg'>Me</span></h2>
                        </Code>
                        <br />
                        <Code element="p">
                            <p>I&apos;m a skilled front-end developer. I&apos;m passionate to work with ReactJS, Redux, NextJS, Tailwind CSS, and Firebase.</p>
                            <br />
                            <p>I&apos;m a skilled front-end developer. I&apos;m passionate to work with ReactJS, Redux, NextJS, Tailwind CSS, and Firebase. I love to read articles. I love to read articles. I love to read articles. I love to read articles. I love to read articles.</p>
                            <br />
                            <p>I&apos;m a skilled front-end developer. I&apos;m passionate to work with ReactJS, Redux, NextJS, Tailwind CSS, and Firebase. I love to read articles.</p>
                        </Code>
                    </div>
                    <div className='flex justify-center items-center relative'>
                        <figure className='relative w-96 h-96 rounded'>
                            <Image src="/images/programmer.png" alt="Mohammad Rahi" layout='fill' className='rounded' />
                        </figure>
                    </div>
                </div>
                {/* </Code> */}
            </div>
        </>
    )
}

export default about