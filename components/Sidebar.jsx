import Image from "next/image"
import { useRouter } from "next/router"

function Sidebar() {
    const router = useRouter();

    const sidebarItem = [
        {
            id: 1,
            text: "About",
            imageURL: "/images/programmer.png",
        },
        {
            id: 2,
            text: "Skills",
            imageURL: "/images/skill.png",
        },
        {
            id: 3,
            text: "Work",
            imageURL: "/images/work.png",
        },
        {
            id: 4,
            text: "Education",
            imageURL: "/images/mortarboard.png",
        },
        {
            id: 5,
            text: "Contact",
            imageURL: "/images/contacts.png",
        },
        {
            id: 6,
            text: "Blog",
            imageURL: "/images/blog.png",
        },
        {
            id: 7,
            text: "Resume",
            imageURL: "/images/cv.png",
        },
    ];

    return (

        <div id="sidebar">
            <div className="absolute top-4 right-4">X</div>
            <div className="fixed top-0 left-0 h-screen w-52 shadow bg-secondary-bg font-light">
                <div>
                    <ul className="flex flex-col select-none">
                        <li
                            onClick={() => router.push("/")}
                            className="cursor-pointer p-6 border-b border-[#A5C9CA]">
                            <p className="text-3xl">Mohammad <br /> Rahi</p>
                            <p>Front-End Developer</p>
                        </li>


                        {
                            sidebarItem.map(({ id, text, imageURL }) => (
                                <li
                                    key={id}
                                    onClick={() => router.push(`/${text.toLocaleLowerCase()}`)}
                                    className={`cursor-pointer p-2 pl-4 hover:bg-[#ffffff10] border-l-2 border-transparent hover:border-[#E7F6F2] flex items-center gap-4 ${router.pathname === `/${text.toLocaleLowerCase()}` && "font-bold border-primary-text bg-[#ffffff10]"}`}
                                ><Image width={30} height={30} src={imageURL} alt={text} /> {text}</li>
                            ))
                        }
                    </ul>
                    <ul className="mt-12 flex justify-center items-center gap-2">
                        <li>
                            <a
                                href="https://github.com/mohammad-rahi"
                                target="_blank"
                                title="Github"
                                rel="noreferrer"
                                className="w-8 h-8 flex justify-center items-center">
                                <i class="fa-brands fa-github text-xl hover:text-[#A5C9CA]"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/in/mohammadrahi03"
                                target="_blank"
                                title="Linkedin"
                                rel="noreferrer"
                                className="w-8 h-8 flex justify-center items-center">
                                <i class="fa-brands fa-linkedin-in text-xl hover:text-[#A5C9CA]"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://medium.com/@mohammadrahi"
                                target="_blank"
                                title="Medium"
                                rel="noreferrer"
                                className="w-8 h-8 flex justify-center items-center">
                                <i class="fa-brands fa-medium text-xl hover:text-[#A5C9CA]"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar