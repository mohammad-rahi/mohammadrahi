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
                <div>
                    <Code element="h2">
                        <h2 className='text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text'>About <span className='border-b-4 border-secondary-bg'>Me</span></h2>
                    </Code>
                    <br />
                    <Code element="p">
                        <div className='text-lg'>
                            <p>I&apos;m a skilled front-end developer. I&apos;m passionate to work with ReactJS, Redux, NextJS, Tailwind CSS, and Firebase.</p>
                            <br />
                            <p>I&apos;m a skilled front-end developer. I&apos;m passionate to work with ReactJS, Redux, NextJS, Tailwind CSS, and Firebase. I love to read articles. I love to read articles. I love to read articles. I love to read articles. I love to read articles.</p>
                            <br />
                            <p>I&apos;m a skilled front-end developer. I&apos;m passionate to work with ReactJS, Redux, NextJS, Tailwind CSS, and Firebase. I love to read articles.</p>
                        </div>
                    </Code>
                </div>
                {/* </Code> */}
            </div>
        </>
    )
}

export default about