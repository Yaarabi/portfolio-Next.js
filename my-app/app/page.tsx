

import "./styles/globals.css"
import Image from "next/image";


export default function Home() {
  return (
    <article className="flex items-center gap-6 flex-wrap w-3/5">
      <Image
      src="/profile.jpeg"
      alt="my image"
      width={200}
      height={400}
      className="rounded-full"
      />
      <div className="text-2xl">
        <h1>Youssef Aarabi</h1>
        <h2>Web Developement | Marketing Digital</h2>
      </div>
      <p className="indent-8">
        Passionate about web development and digital marketing, I am currently advancing my expertise in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js), alongside mastering Next.js and TypeScript for scalable and efficient applications. With a strong foundation in SEO, SEM, and e-commerce strategies, I integrate technical excellence with marketing insights to create powerful web solutions. Seeking an opportunity to apply my skills in a dynamic professional environment.
      </p>
    </article>
  );
}
