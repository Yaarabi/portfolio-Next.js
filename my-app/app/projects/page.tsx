
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
    title: "AI-Powered E-commerce Platform",
    description:
        "An advanced dropshipping automation solution integrating AI for product recommendations and optimized marketing strategies.",
    technologies: ["Next.js", "TypeScript", "TurboPack", "Tailwind CSS"],
    github: "https://github.com/Yaarabi/ai-ecommerce",
    },
];

export default function Projects() {
    return (
    <section className="">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">My Projects</h2>
        <div className="grid grid-row-1 md:grid-row-2 gap-6">

        {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
            <p className="mt-3 text-gray-700">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                <span key={i} className="bg-gray-300 text-gray-900 px-3 py-1 rounded-md text-sm">
                    {tech}
                </span>
                ))}

        </div>
            <Link href={project.github} target="_blank">
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    View on GitHub
                </button>
            </Link>
            </div>
        ))}
        </div>
    </section>
);
}
