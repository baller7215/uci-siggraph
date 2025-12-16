import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageSrc: string;
    imageAlt: string;
}

function ProjectCard({ title, description, tags, imageSrc, imageAlt }: ProjectCardProps) {
    return (
        <div className="flex flex-col gap-4 bg-[#071029] rounded-lg overflow-hidden border border-border/20 hover:border-primary/30 transition-colors">
            {/* project image */}
            <div className="relative w-full h-48 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                />
            </div>
            
            {/* project content */}
            <div className="flex flex-col gap-3 px-6 pb-6">
                <h4 className="text-xl font-bold text-background">{title}</h4>
                <p className="text-sm text-background/70 leading-relaxed">{description}</p>
                
                {/* tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium text-background bg-foreground/10 border border-border/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

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
        <section id="projects" className="py-60 w-screen relative bg-[#0b132b]">
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