const Index = () => {
  return (
    <section className="w-4/5 mx-auto animate-fadeIn">
      <div className="flex flex-col md:flex-row items-center gap-12 py-10">

        <div className="flex-1">
          <h2 className="text-4xl font-bold text-sky-400 mb-6 drop-shadow-lg">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Passionate about web development and digital marketing, I specialize in full-stack development 
            using the <span className="text-sky-400 font-semibold">MERN stack</span> (MongoDB, Express.js, React, Node.js). My expertise includes <span className="text-sky-400 font-semibold">Next.js</span>, <span className="text-sky-400 font-semibold">TypeScript</span>, 
            <span className="text-sky-400 font-semibold">Bootstrap</span> and <span className="text-sky-400 font-semibold">Tailwind CSS</span>, ensuring highly scalable and optimized applications.
          </p>
          <p className="mt-4 text-lg text-gray-400">
            With a strong foundation in <span className="text-sky-400 font-semibold">SEO</span>, <span className="text-sky-400 font-semibold">SEM</span>, and e-commerce strategies, I merge technical proficiency with 
            marketing insights to craft efficient web solutions for modern businesses.
          </p>

          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-sky-300 mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <span className="bg-[#18181b] text-gray-200 p-3 rounded-md shadow-md flex items-center gap-2 w-full transition-transform duration-200 hover:scale-105">
                <span className="text-sky-400 text-xl">✔</span> MERN Stack (MongoDB, Express.js, React, Node.js)
              </span>
              <span className="bg-[#18181b] text-gray-200 p-3 rounded-md shadow-md flex items-center gap-2 w-full transition-transform duration-200 hover:scale-105">
                <span className="text-sky-400 text-xl">✔</span> Next.js & TypeScript
              </span>
              <span className="bg-[#18181b] text-gray-200 p-3 rounded-md shadow-md flex items-center gap-2 w-full transition-transform duration-200 hover:scale-105">
                <span className="text-sky-400 text-xl">✔</span> Tailwind CSS
              </span>
              <span className="bg-[#18181b] text-gray-200 p-3 rounded-md shadow-md flex items-center gap-2 w-full transition-transform duration-200 hover:scale-105">
                <span className="text-sky-400 text-xl">✔</span> TurboPack Optimization
              </span>
              <span className="bg-[#18181b] text-gray-200 p-3 rounded-md shadow-md flex items-center gap-2 w-full transition-transform duration-200 hover:scale-105">
                <span className="text-sky-400 text-xl">✔</span> Dynamic Routing & API Integration
              </span>
              <span className="bg-[#18181b] text-gray-200 p-3 rounded-md shadow-md flex items-center gap-2 w-full transition-transform duration-200 hover:scale-105">
                <span className="text-sky-400 text-xl">✔</span> SEO & E-commerce Automation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
