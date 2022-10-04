import Head from 'next/head'
import React from 'react'
import Code from '../components/Code'

function education() {
  return (
    <>
      <Head>
        <title>Mohammad Rahi: Education</title>
      </Head>

      <Code element="h2">
        <h2 className='text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text'>My <span className='border-b-4 border-secondary-bg'>Education</span></h2>
      </Code>

      <div className='flex flex-col justify-center w-full min-h-screen py-2'>
        <Code element="education">
          <div className='py-2'>
            <div className='card'>
              
            </div>
          </div>
        </Code>
      </div>
    </>
  )
}

export default education