import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Code from '../components/Code';
// import Code from '../components/Code'

function skills() {
  const skillLists = {
    HTML: [
      {
        id: 1,
        imageURL: "/images/html.png",
        text: "HTML5"
      },
      {
        id: 2,
        imageURL: "/images/react.png",
        text: "JSX"
      },
    ],
    CSS: [
      {
        id: 3,
        imageURL: "/images/css.png",
        text: "CSS3"
      },
      {
        id: 4,
        imageURL: "/images/sass.png",
        text: "SASS"
      },
      {
        id: 5,
        imageURL: "/images/tailwindcss.png",
        text: "Tailwind CSS"
      },
    ],
    JavaScript: [
      {
        id: 6,
        imageURL: "/images/javascript.png",
        text: "JavaScript"
      },
      {
        id: 7,
        imageURL: "/images/react.png",
        text: "React"
      },
      {
        id: 8,
        imageURL: "/images/redux.png",
        text: "Redux"
      },
      {
        id: 8,
        imageURL: "/images/nextjs.png",
        text: "NextJS",
        background: true
      },
      {
        id: 14,
        imageURL: "/images/npm.png",
        text: "NPM",
      },
    ],
    Other: [
      {
        id: 9,
        imageURL: "/images/git.png",
        text: "Git",
      },
      {
        id: 10,
        imageURL: "/images/github.png",
        text: "Github",
        background: true,
      },
      {
        id: 11,
        imageURL: "/images/vscode.png",
        text: "VS Code",
      },
      {
        id: 12,
        imageURL: "/images/firebase.png",
        text: "Firebase",
      },
      {
        id: 13,
        imageURL: "/images/search.png",
        text: "SEO",
      },
    ]
  };

  const Card = ({ title }) => {
    return (
      <div className='card p-6'>
        <h3 className='text-2xl '>{title}</h3>
        <span className='h-[1px] block bg-secondary-text my-4'></span>
        <div className='flex gap-32 items-center px-12 py-8'>
          {
            skillLists[title].map(skill => (
              <div key={skill.id} className="text-center">
                <Image
                  src={skill.imageURL}
                  alt={skill.text}
                  width={100}
                  height={100}
                  className={`${skill.background && "bg-primary-text rounded-full"}`}
                />
                <p>{skill.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Mohammad Rahi: Skills</title>
      </Head>

      <div className='flex flex-col justify-center w-full min-h-screen py-2'>
        <Code element="skills">
          <div className='py-2'>
            <Card title="HTML" />
            <Card title="CSS" />
            <Card title="JavaScript" />
            <Card title="Other" />
          </div>
        </Code>
      </div>
    </>
  )
}

export default skills