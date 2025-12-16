import { ProjectCard } from "./ProjectCard";

export function Projects() {
    const projects = [
        {
            title: "3D Shader Workshop",
            description: "An interactive deep dive into GLSL shaders and realtime rendering techniques.",
            tags: ["WEBGL", "GRAPHICS"],
            imageSrc: "/logo/siggraph-logo.png", // Replace with actual project image
            imageAlt: "3D Shader Workshop code editor",
        },
        {
            title: "AR Demo Night",
            description: "Showcasing student-built augmented reality experiences using Unity and ARKit.",
            tags: ["AR/VR", "UNITY"],
            imageSrc: "/logo/siggraph-logo.png", // Replace with actual project image
            imageAlt: "AR Demo Night VR headset",
        },
        {
            title: "Realtime Ray Tracing",
            description: "Implementing a basic ray tracer from scratch in C++ to understand light transport.",
            tags: ["C++", "RENDERING"],
            imageSrc: "/logo/siggraph-logo.png", // Replace with actual project image
            imageAlt: "Realtime Ray Tracing visualization",
        },
    ];

    return (
        <section id="projects" className="py-32 w-screen relative bg-[#0b132b]">
            <div className="relative mx-auto flex flex-col gap-12 items-start justify-center max-w-7xl px-6">
                {/* projects section title */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold text-primary uppercase">Projects</h2>
                    <h3 className="text-5xl font-bold text-background">
                        Featured Projects
                    </h3>
                </div>

                {/* projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {projects.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            imageSrc={project.imageSrc}
                            imageAlt={project.imageAlt}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}