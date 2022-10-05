import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button'
import Code from '../components/Code'

const About = () => {
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
                            <p>
                                My name is Mohammad Rahi. I&apos;m a Front-End Developer. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.
                            </p>
                            <p className='my-4'>
                                I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects. Also I enjoy writing technical things ✍️ at my <a className='text-secondary-text hover:underline' href="https://tech-sheet.blogspot.com" target="_blank" rel='noreferrer'>blog</a> and <a className='text-secondary-text hover:underline' href="https://medium.com/@mohammadrahi" target="_blank" rel='noreferrer'>medium</a>.
                            </p>
                            <p>In my free time, I watch science fiction and computer science 💻 movies, I like to read and write articles.</p>
                        </div>
                    </Code>
                    <br />
                    <a href="https://github.com/mohammad-rahi" target="_blank" rel="noreferrer" className='py-4'>
                        <Button buttonStyle="btn_outline" className="mt-4"><i className="fa-brands fa-github mr-2"></i> My Github</Button>
                    </a>
                </div>
                {/* </Code> */}
            </div>
        </>
    )
}

export default About