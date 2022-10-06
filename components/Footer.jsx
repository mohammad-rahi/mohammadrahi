import { useRouter } from "next/router"

function Footer() {
    const router = useRouter();

    return (
        <footer onClick={() => router.push(router.pathname)} className="p-3 text-center cursor-pointer select-none footer shadow transition my_transition">
            <span>Back to Top</span>
        </footer>
    )
}

export default Footer