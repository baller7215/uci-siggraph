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
        <div className="group flex flex-col gap-4 bg-sidebar-primary/15 rounded-lg overflow-hidden border-2 border-secondary/20 hover:border-primary/30 transition-all ease-in-out duration-300 relative">
            {/* gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a4b]/0 via-[#1a2a4b]/0 to-[#0b132b]/0 group-hover:from-[#1a2a4b]/80 group-hover:via-[#1a2a4b]/90 group-hover:to-primary/20 transition-all duration-500 ease-in-out rounded-lg pointer-events-none z-0" />
            
            {/* content wrapper with relative positioning */}
            <div className="relative z-10 flex flex-col gap-4">
                {/* project image */}
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                </div>
                
                {/* project content */}
                <div className="flex flex-col gap-3 px-6 py-6">
                    <h4 className="text-xl font-bold text-background">{title}</h4>
                    <p className="text-sm text-background/70 leading-relaxed">{description}</p>
                    
                    {/* tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-3 py-1 rounded-full text-xs font-medium text-background bg-secondary/20 border border-secondary/50"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
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