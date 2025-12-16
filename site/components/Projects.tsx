import { ProjectCard } from "./ProjectCard";

export function Projects() {
    const projects = [
        {
            title: "Ray Tracing @ UCI",
            description: "Interested in learning on where those cool images where diffuse and specular spheres come from? Why do we trace rays? What does that even mean? This workshop is perfect place to learn about beginner ray tracing and what you can do with it!",
            tags: ["RAY TRACING", "WORKSHOP"],
            imageSrc: "/events/ray-tracing.jpg",
            imageAlt: "Ray Tracing Workshop",
        },
        {
            title: "Blender Workshop @ UCI",
            description: "A workshop from a guest speaker, Michael Moretti, on 3D modeling and digital sculpting with Blender.",
            tags: ["3D MODELING", "WORKSHOP"],
            imageSrc: "/events/blender-workshop.jpg",
            imageAlt: "Blender Workshop",
        }
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