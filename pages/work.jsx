import Head from 'next/head'
import Image from 'next/image';
import React from 'react'
import Code from '../components/Code'
import Button from '../components/Button'

function Work() {

  const projects = [
    {
      id: 1,
      title: "Amazon Clone",
      description: ["Amazon.com clone using NextJS and Tailwind CSS", "The authentication was implemented using Firebase Authentication."],
      imageURL: "/images/amazon.png",
      repoLink: "https://github.com/mohammad-rahi/amazon",
      demoLink: "https://amazon-mohammad-rahi.vercel.app",
      technologies: ["JavaScript", "NextJS", "ReactJS", "Redux", "CSS", "Tailwind CSS", "Firebase"]
    },
    {
      id: 2,
      title: "Twitter Clone",
      description: ['The authentication was implemented using Firebase Authentication. It used the "Google Authentication" method to authenticate', 'To use the service, a user needs to sign in with Google.', 'A User can post tweets, add a single image (png, jpeg, or gif) to tweets, comment on other tweets.', 'Deletion of a tweet can also be done.', 'Users can send messages to other users in realtime.', 'The user can also delete their tweets and comments.', 'The images present in a tweet and chat are stored in the Firebase Storage Bucket.'],
      imageURL: "/images/twitter.jpg",
      repoLink: "https://github.com/mohammad-rahi/twitter-clone",
      demoLink: "https://twitter-firebase.netlify.app",
      technologies: ["JavaScript", "ReactJS", "CSS", "Firebase"],
      reverse: true,
    },
  ]

  const WorkCard = () => {

  };

  return (
    <>
      <Head>
        <title>Mohammad Rahi: Work</title>
      </Head>

      <Code element="h2">
        <h2 className='text-5xl lg:text-6xl text-transparent bg-gradient-to-r from-primary-text to-secondary-text bg-clip-text'>Work<span className='border-b-4 border-secondary-bg'>s</span></h2>
      </Code>

      <div className='flex flex-col justify-center w-full min-h-screen py-2'>
        <Code element="works">
          {
            projects.map(project => (
              // <div key={project.id} className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8'>
              <div key={project.id} className={`flex flex-col md:flex-row gap-8 mb-20 md:mb-40 ${project.reverse && "flex-row-reverse"}`}>
                <div style={{ flex: ".5" }}>
                  <h3 className='text-3xl font-medium'>{project.title}</h3>
                  <div className='my-4 md:hidden flex justify-center items-center'>
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className='work_link overflow-hidden relative flex justify-center items-center cursor-pointer'>
                      <span className='viewLay pointer-events-none w-16 h-16 rounded-full bg-secondary-bg absolute z-10 flex justify-center items-center'>View</span>
                      <figure className='work_image relative opacity-75 hover:opacity-100 transition hover:scale-105'>
                        <Image
                          layout='fill'
                          className="rounded-md"
                          src={project.imageURL}
                          alt={project.title}
                          objectFit="cover"
                        />
                      </figure>
                    </a>
                  </div>
                  <ul className='list-disc my-4 ml-8 flex flex-col gap-2'>{
                    project.description.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))
                  }</ul>
                  <a className='flex items-center gap-2 ml-6 cursor-pointer w-fit hover:text-secondary-text' href={project.repoLink} target="_blank" rel='noreferrer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <span>Github Repo</span>
                  </a>
                  <div className='flex flex-wrap gap-2 ml-6 my-4'>
                    {
                      project.technologies.map((item, i) => (
                        <span key={i} className='bg-secondary-bg text-primary-text  rounded p-1 hover:text-secondary-text cursor-default w-fit'>{item}</span>
                      ))
                    }
                  </div>
                  <a className='flex items-center gap-2 border border-secondary-text text-secondary-text hover:bg-gradient-to-r from-secondary-text to-secondary-bg hover:text-primary-bg w-fit px-10 py-2 transition ml-6' href={project.demoLink}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    <span>View Demo</span>
                  </a>
                </div>
                <div style={{ flex: ".5" }} className='hidden md:flex justify-center items-start'>
                  <a href={project.demoLink} target="_blank" rel="noreferrer" className='work_link overflow-hidden relative flex justify-center items-center cursor-pointer'>
                    <span className='viewLay pointer-events-none w-16 h-16 rounded-full bg-secondary-bg absolute z-10 flex justify-center items-center'>View</span>
                    <figure className='work_image relative opacity-75 hover:opacity-100 transition hover:scale-105'>
                      <Image
                        layout='fill'
                        className="rounded-md"
                        src={project.imageURL}
                        alt={project.title}
                        objectFit="cover"
                      />
                    </figure>
                  </a>
                </div>
              </div>
            ))
          }
        </Code>
      </div>
    </>
  )
}

export default Work