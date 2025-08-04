import "./styles/globals.css"
import Image from "next/image";


export default function Home() {
  return (
    <article className="flex flex-col md:flex-row items-center gap-10 w-4/5 mx-auto bg-[#18181b] rounded-xl shadow-lg p-8 mt-12 animate-fadeIn">
      <Image
        src="/profile.jpeg"
        alt="Youssef Aarabi"
        width={180}
        height={180}
        className="rounded-full border-4 border-sky-400 shadow-lg"
        priority
      />
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl font-bold text-sky-400 mb-2 drop-shadow-lg">Youssef Aarabi</h1>
        <h2 className="text-xl font-semibold text-sky-300 mb-4">Web Development <span className="text-gray-400 font-normal">|</span> Digital Marketing</h2>
        <p className="text-lg text-gray-300 leading-relaxed indent-8">
          Passionate about web development and digital marketing, I am currently advancing my expertise in full-stack development using the <span className="text-sky-400 font-semibold">MERN stack</span> (MongoDB, Express.js, React, Node.js), alongside mastering <span className="text-sky-400 font-semibold">Next.js</span> and <span className="text-sky-400 font-semibold">TypeScript</span> for scalable and efficient applications.
          <br /><br />
          With a strong foundation in <span className="text-sky-400 font-semibold">SEO</span>, <span className="text-sky-400 font-semibold">SEM</span>, and e-commerce strategies, I integrate technical excellence with marketing insights to create powerful web solutions. Seeking an opportunity to apply my skills in a dynamic professional environment.
        </p>
      </div>
    </article>
  );
}
