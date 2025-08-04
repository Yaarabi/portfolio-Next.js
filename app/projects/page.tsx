import Link from "next/link";

const projects = [
    {
        title: "School Management System",
        description:
            "A full-stack web application developed collaboratively using MERN stack. This system manages student records, class schedules, and administration tasks efficiently.",
        technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
        github: "https://github.com/jmelhamza/jadaraApp/tree/feature/youssef",
    },
    {
    title: "Rua Web Store – AI-Powered E-commerce Platform",
    description:
        "A multilingual, scalable dropshipping solution featuring AI-driven product recommendations, semantic search, and dynamic marketing insights. Built with modular architecture, role-protected dashboards, and server-side freshness for production-grade performance.",
    technologies: ["Next.js (App Router, SSR)", "TypeScript", "Tailwind CSS", "Zustand", "React Query", "TurboPack"],
    github: "https://github.com/Yaarabi/ai-ecommerce",
    link: "https://rua-store.vercel.app/",
    },

];

export default function Projects() {
    return (
        <section className="w-4/5 mx-auto animate-fadeIn">
            <h2 className="text-4xl font-bold text-sky-400 mb-6 drop-shadow-lg">
                My Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#18181b] p-6 rounded-lg shadow-md border border-[#23272f] transition-transform duration-200 hover:scale-105"
                    >
                        <h3 className="text-2xl font-semibold text-sky-300">
                            {project.title}
                        </h3>
                        <p className="mt-3 text-gray-300">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-[#23272f] text-sky-200 px-3 py-1 rounded-md text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <Link href={project.github} target="_blank">
                            <button className="mt-4 bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700 transition-colors">
                                View on GitHub
                            </button>
                        </Link>
                        {
                            project.link && (
                            <Link href={project.link} target="_blank">
                                <button className="mt-2 bg-sky-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                                    View Live
                                </button>
                            </Link>
                            )       
                        }
                    </div>
                ))}
            </div>
        </section>
    );
}
