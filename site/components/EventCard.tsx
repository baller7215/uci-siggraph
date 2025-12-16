import { IconCalendar, IconMicrophone } from "@tabler/icons-react";

interface EventCardProps {
    date: string;
    title: string;
    description: string;
    icon: "calendar" | "microphone";
    rsvpLink?: string;
}

export function EventCard({ date, title, description, icon, rsvpLink = "#" }: EventCardProps) {
    const IconComponent = icon === "calendar" ? IconCalendar : IconMicrophone;

    return (
        <div className="group flex flex-col gap-4 bg-sidebar-primary/15 rounded-lg overflow-hidden border-2 border-secondary/20 hover:border-primary/30 transition-all ease-in-out duration-300 relative">
            {/* gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a4b]/0 via-[#1a2a4b]/0 to-[#0b132b]/0 group-hover:from-[#1a2a4b]/80 group-hover:via-[#1a2a4b]/90 group-hover:to-primary/20 transition-all duration-500 ease-in-out rounded-lg pointer-events-none z-0" />
            
            {/* content wrapper with relative positioning */}
            <div className="relative z-10 flex flex-col gap-4">
                {/* event header with date badge and icon */}
                <div className="flex items-start justify-between px-6 pt-6">
                    <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase">
                        {date}
                    </span>
                    <IconComponent className="w-5 h-5 text-background" />
                </div>
                
                {/* event content */}
                <div className="flex flex-col gap-3 px-6 pb-6">
                    <h4 className="text-xl font-bold text-background">{title}</h4>
                    <p className="text-sm text-background/70 leading-relaxed">{description}</p>
                    
                    {/* RSVP button */}
                    <a
                        href={rsvpLink}
                        className="mt-2 inline-flex items-center justify-center px-6 py-2 rounded-full bg-transparent border-2 border-primary text-primary text-sm font-semibold uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-fit"
                    >
                        RSVP NOW
                    </a>
                </div>
            </div>
        </div>
    );
}