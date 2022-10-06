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

          <div className='mt-8 flex flex-wrap justify-center items-center gap-4'>
            <a href="https://drive.google.com/file/d/14suQgQIyBm4aZT8IBIXMpfrI-lGaP_Re/view" target="_blank" rel="noreferrer" title='View on Drive'>
              <Button buttonStyle="btn_outline">
                <span className='flex gap-2 items-center'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                  View on Drive</span>
              </Button>
            </a>
            <a href="/images/Mohammad Rahi.pdf" download title='Download Resume'>
              <Button>
                <span className='flex gap-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download
                </span>
              </Button>
            </a>
          </div>
        </Code>
      </div>
    </>
  )
}

export default resume