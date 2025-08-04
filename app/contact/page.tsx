import Link from "next/link"


const Index = () => {
    return (
        <section className="w-4/5 mx-auto animate-fadeIn">
            <h2 className="text-4xl font-bold text-sky-400 mb-6 drop-shadow-lg">Contact Me</h2>
            <p className="text-lg text-gray-300 mb-6">
                Feel free to reach out for collaborations, job opportunities, or discussions related to web development and e-commerce strategies!
            </p>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#18181b] p-6 rounded-lg shadow-md text-center border border-[#23272f] transition-transform duration-200 hover:scale-105">
                <h3 className="text-2xl font-semibold text-sky-300">Email</h3>
                <p className="text-gray-400 mt-3">
                    📧 <a href="mailto:yaarabi@gmail.com" className="text-sky-400 hover:underline">yaarabi@gmail.com</a>
                </p>
            </div>

                <div className="bg-[#18181b] p-6 rounded-lg shadow-md text-center border border-[#23272f] transition-transform duration-200 hover:scale-105">
                    <h3 className="text-2xl font-semibold text-sky-300">LinkedIn</h3>
                    <p className="text-gray-400 mt-3">
                    🔗 <Link href="https://www.linkedin.com/in/youssef-aarabi-519b55237/" target="_blank">
                    <span className="text-sky-400 hover:underline">Visit my LinkedIn</span>
                    </Link>
                    </p>
                </div>

                <div className="bg-[#18181b] p-6 rounded-lg shadow-md text-center border border-[#23272f] transition-transform duration-200 hover:scale-105">
                    <h3 className="text-2xl font-semibold text-sky-300">GitHub</h3>
                    <p className="text-gray-400 mt-3">
                    💻 <Link href="https://github.com/Yaarabi" target="_blank">
                    <span className="text-sky-400 hover:underline">Check out my projects</span>
                    </Link>
                    </p>
                </div>
            </div>
        </section>

)
}

export default Index
