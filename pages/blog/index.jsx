import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Code from '../../components/Code'

function Blog({ blogDetail }) {
  return (
    <>
      <Head>
        <title>Mohammad Rahi: Blog</title>
      </Head>

      <Code element="h2">
        <h2 className='text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text'>Blog<span className='border-b-4 border-secondary-bg'>s</span></h2>
      </Code>

      <div className='flex flex-col justify-center w-full min-h-screen py-2'>
        <Code element="blogs">
          <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 place-items-center'>
            <div className='blogCard w-96 '>
              <div className='overflow-hidden cursor-pointer'>
                <figure className='relative aspect-video transition hover:scale-105'>
                  <Image
                    src="https://blogger.googleusercontent.com/img/a/AVvXsEjEKw3B4W7cQEqE8V8LLWsqnEfFqJO9mGy66POoXyG3f73aH9-iVndn8tweJuKMaf8HITCVNCwxzzS966y-u3onAcUFTHLNfIgr_XFyOoYc_s40wADIC3x8ExtNnHs6qkzLdAM0QECOgvacCWVOAzCdTlSxFohmtZE6Il6QK_Fe0lmmiFNGbuFnLmlDww=w640-h428"
                    alt='Complete Roadmap to Blockchain Development'
                    layout='fill'
                  />
                </figure>
              </div>
              <div className='p-3'>
                <ul className='flex flex-wrap gap-2 my-2 text-xs font-light'>
                  <li className='bg-secondary-bg text-primary-text  rounded p-1 hover:text-secondary-text cursor-default w-fit'>Programming</li>
                  <li className='bg-secondary-bg text-primary-text  rounded p-1 hover:text-secondary-text cursor-default w-fit'>Technology</li>
                  <li className='bg-secondary-bg text-primary-text  rounded p-1 hover:text-secondary-text cursor-default w-fit'>Web</li>
                </ul>
                <h2 className='text-2xl font-medium hover:text-secondary-text cursor-pointer'>Complete Roadmap to Blockchain Development</h2>
                <p className='mt-2 font-light'>Blockchain technology is the safest way to transfer and collect information in today&apos;s world. And it is almost impossible for any bad g...</p>
              </div>
            </div>
          </div>
        </Code>
      </div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  let blogDetail = await fetch("http://localhost:3000/api/blogs")
    .then(res => res.json())

  return {
    props: {
      blogDetail
    }
  }
};

export default Blog