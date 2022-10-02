import Image from "next/image"
import { useRouter } from "next/router"

function Sidebar() {
    const router = useRouter();

    return (
        <div id="sidebar">
            <div className="fixed top-0 left-0 h-screen w-52 shadow bg-[#395B64] font-light">
                <div>
                    <ul className="flex flex-col select-none">
                        <li
                            onClick={() => router.push("/")}
                            className="cursor-pointer p-6 border-b border-[#A5C9CA]">
                            <p className="text-3xl">Mohammad <br /> Rahi</p>
                            <p>Front-End Developer</p>
                        </li>
                        <li
                            onClick={() => router.push("/about")}
                            className="cursor-pointer p-2 pl-4 hover:bg-[#ffffff10] border-l-2 border-transparent hover:border-[#E7F6F2] flex items-center gap-4"><Image width={30} height={30} src="/images/programmer.png" alt="About" /> About</li>
                        <li
                            onClick={() => router.push("/skills")}
                            className="cursor-pointer p-2 pl-4 hover:bg-[#ffffff10] border-l-2 border-transparent hover:border-[#E7F6F2] flex  items-center gap-4"><Image width={30} height={30} src="/images/skill.png" alt="Skills" /> My Skills</li>
                        <li
                            onClick={() => router.push("/work")}
                            className="cursor-pointer p-2 pl-4 hover:bg-[#ffffff10] border-l-2 border-transparent hover:border-[#E7F6F2] flex  items-center gap-4"><Image width={30} height={30} src="/images/work.png" alt="Work" /> Work</li>
                        <li
                            onClick={() => router.push("/education")}
                            className="cursor-pointer p-2 pl-4 hover:bg-[#ffffff10] border-l-2 border-transparent hover:border-[#E7F6F2] flex  items-center gap-4"><Image width={30} height={30} src="/images/mortarboard.png" alt="Education" /> Education</li>
                        <li
                            onClick={() => router.push("/contact")}
                            className="cursor-pointer p-2 pl-4 hover:bg-[#ffffff10] border-l-2 border-transparent hover:border-[#E7F6F2] flex  items-center gap-4"><Image width={30} height={30} src="/images/contacts.png" alt="Contact" /> Contact</li>
                        <li
                            onClick={() => router.push("/blog")}
                            className="cursor-pointer p-2 pl-4 hover:bg-[#ffffff10] border-l-2 border-transparent hover:border-[#E7F6F2] flex  items-center gap-4"><Image width={30} height={30} src="/images/blog.png" alt="Blog" /> Blog</li>
                        <li
                            onClick={() => router.push("/resume")}
                            className="cursor-pointer p-2 pl-4 hover:bg-[#ffffff10] border-l-2 border-transparent hover:border-[#E7F6F2] flex  items-center gap-4"><Image width={30} height={30} src="/images/cv.png" alt="Resume" /> Resume</li>
                    </ul>
                    <ul className="mt-12 flex justify-center items-center gap-2">
                        <li>
                            <a
                                href="https://github.com/mohammad-rahi"
                                target="_blank"
                                rel="noreferrer"
                                className="w-8 h-8 flex justify-center items-center">
                                <i class="fa-brands fa-github text-xl hover:text-[#A5C9CA]"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://linkedin.com/in/mohammadrahi03"
                                target="_blank"
                                rel="noreferrer"
                                className="w-8 h-8 flex justify-center items-center">
                                <i class="fa-brands fa-linkedin-in text-xl hover:text-[#A5C9CA]"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://medium.com/@mohammadrahi"
                                target="_blank"
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