import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Button from '../components/Button'
import Code from '../components/Code'

function resume() {
  return (
    <>
      <Head>
        <title>Mohammad Rahi: Resume</title>
      </Head>

      <Code element="h2">
        <h2 className='text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text'>Resum<span className='border-b-4 border-secondary-bg'>e</span></h2>
      </Code>

      <div className='flex flex-col justify-center w-full min-h-screen py-2'>
        <Code element="resume">
          <iframe
            src="/images/Mohammad Rahi.pdf"
            frameborder="0"
            className='w-full min-h-[85vh]'
          ></iframe>

          <div className='mt-8 flex gap-4'>
            <a href="https://drive.google.com/file/d/14suQgQIyBm4aZT8IBIXMpfrI-lGaP_Re/view" target="_blank" rel="noreferrer" title='View on Drive'>
              <Button buttonStyle="btn_outline">
                View on Drive
              </Button>
            </a>
            <a href="/images/Mohammad Rahi.pdf" download title='Download Resume'>
              <Button>Download</Button>
            </a>
          </div>
        </Code>
      </div>
    </>
  )
}

export default resume