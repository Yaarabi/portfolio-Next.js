
import Link from "next/link"


const Index = () => {
    return (
        
        <section className="">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Me</h2>
            <p className="text-lg text-gray-700 mb-6">
                Feel free to reach out for collaborations, job opportunities, or discussions related to web development and e-commerce strategies!
            </p>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-700 mt-3">
                    📧 <a href="mailto:yaarabi@gmail.com" className="text-blue-600 hover:underline">yaarabi@gmail.com</a>
                </p>
            </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">LinkedIn</h3>
                    <p className="text-gray-700 mt-3">
                    🔗 <Link href="https://www.linkedin.com/in/youssef-aarabi-519b55237/" target="_blank">
                    <span className="text-blue-600 hover:underline">Visit my LinkedIn</span>
                    </Link>
                    </p>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-2xl font-semibold text-gray-800">GitHub</h3>
                    <p className="text-gray-700 mt-3">
                    💻 <Link href="https://github.com/Yaarabi" target="_blank">
                    <span className="text-blue-600 hover:underline">Check out my projects</span>
                    </Link>
                    </p>
                </div>
            </div>
    </section>

)
}

export default Index
