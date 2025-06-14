


const Index = () => {
  return (
    
    <section className="w-4/5">
      <div className="flex flex-col md:flex-row items-center gap-8">

        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Passionate about web development and digital marketing, I specialize in full-stack development 
            using the MERN stack (MongoDB, Express.js, React, Node.js). My expertise includes Next.js, TypeScript, 
            Bootstrap and Tailwind CSS, ensuring highly scalable and optimized applications.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            With a strong foundation in SEO, SEM, and e-commerce strategies, I merge technical proficiency with 
            marketing insights to craft efficient web solutions for modern businesses.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              <span className="bg-gray-100 p-3 rounded-md shadow-sm w-4/5">✅ MERN Stack (MongoDB, Express.js, React, Node.js)</span>
              <span className="bg-gray-100 p-3 rounded-md shadow-sm w-4/5">✅ Next.js & TypeScript</span>
              <span className="bg-gray-100 p-3 rounded-md shadow-sm w-4/5">✅ Tailwind CSS</span>
              <span className="bg-gray-100 p-3 rounded-md shadow-sm w-4/5">✅ TurboPack Optimization</span>
              <span className="bg-gray-100 p-3 rounded-md shadow-sm w-4/5">✅ Dynamic Routing & API Integration</span>
              <span className="bg-gray-100 p-3 rounded-md shadow-sm w-4/5">✅ SEO & E-commerce Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index
