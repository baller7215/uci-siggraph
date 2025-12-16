import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    imageSrc: string;
    imageAlt: string;
}

export function ProjectCard({ title, description, tags, imageSrc, imageAlt }: ProjectCardProps) {
    return (
        <div className="group flex flex-col gap-4 bg-sidebar-primary/15 rounded-lg overflow-hidden border-2 border-secondary/20 hover:border-primary/30 transition-all ease-in-out duration-300 relative">
            {/* gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a4b]/0 via-[#1a2a4b]/0 to-[#0b132b]/0 group-hover:from-[#1a2a4b]/80 group-hover:via-[#1a2a4b]/90 group-hover:to-primary/20 transition-all duration-500 ease-in-out rounded-lg pointer-events-none z-0" />
            
            {/* content wrapper with relative positioning */}
            <div className="relative z-10 flex flex-col gap-4">
                {/* project image */}
                <div className="relative w-full h-96 overflow-hidden rounded-lg rounded-b-none">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover rounded-lg rounded-b-none transition-transform duration-500 ease-in-out group-hover:scale-110"
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