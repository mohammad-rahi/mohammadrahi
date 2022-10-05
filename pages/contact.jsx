import Head from 'next/head'
import React from 'react'
import Button from '../components/Button'
import Code from '../components/Code'

function contact() {
  return (
    <>
      <Head>
        <title>Mohammad Rahi: Contact</title>
      </Head>

      <Code element="h2" close={false}>
        <h2 className='text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text'>Contact <span className='border-b-4 border-secondary-bg'>Me</span>
          <Code element="h1" open={false} />
        </h2>
      </Code>
      <Code element="p">
        <p className='text-xl'>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
      </Code>

      <div className="flex flex-col w-full h-[85vh] justify-center">
        <Code element="contact">
          <form
            className='w-[90%] max-w-4xl mx-auto'
            action="mailto:mohammadrahi003@gmail.com"
            encType='text/plain'
            method='POST'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
              <div className='border focus-within:border-2 border-primary-text hover:border-secondary-text focus-within:border-secondary-text flex flex-col'>
                <label htmlFor="name" className='p-1 select-none text-sm'>Name</label>
                <input type="text" id='name' name='name' className='bg-transparent focus:outline-none pl-1' />
              </div>
              <div className='border focus-within:border-2 border-primary-text hover:border-secondary-text focus-within:border-secondary-text flex flex-col'>
                <label htmlFor="email" className='p-1 select-none text-sm'>Email</label>
                <input type="email" id='email' name='email' className='bg-transparent focus:outline-none pl-1' required />
              </div>
            </div>
            <div className='border focus-within:border-2 border-primary-text hover:border-secondary-text focus-within:border-secondary-text flex flex-col mb-8'>
              <label htmlFor="subject" className='p-1 select-none text-sm'>Subject</label>
              <input type="text" id='subject' name='subject' className='bg-transparent focus:outline-none pl-1' />
            </div>
            <div className='border focus-within:border-2 border-primary-text hover:border-secondary-text focus-within:border-secondary-text flex flex-col mb-8'>
              <label htmlFor="message" className='p-1 select-none text-sm'>Message</label>
              <textarea id='message' name='message' className='bg-transparent resize-none h-20 focus:outline-none pl-1' required></textarea>
            </div>
            <div>
              <Button buttonStyle="btn_outline" type="submit">Send message!</Button>
            </div>
          </form>
        </Code>
      </div>
    </>
  )
}

export default contact