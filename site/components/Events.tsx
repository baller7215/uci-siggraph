import { EventCard } from "./EventCard";

export function Events() {
    const events = [
        {
            date: "OCT 24",
            title: "Intro to Blender 4.0",
            description: "Join us for a beginner-friendly workshop on modeling, sculpting, and texturing in the latest version of Blender.",
            icon: "calendar" as const,
            rsvpLink: "#",
        },
        {
            date: "NOV 08",
            title: "Industry Speaker: Pixar",
            description: "A special guest lecture from a Pixar technical director discussing pipeline tools and character rigging.",
            icon: "microphone" as const,
            rsvpLink: "#",
        },
    ];

    return (
        <section id="events" className="py-64 w-screen relative bg-[#0b132b]">
            <div className="relative mx-auto flex flex-col gap-12 items-start justify-center max-w-7xl px-6">
                {/* events section title */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold text-primary uppercase">Events</h2>
                    <h3 className="text-5xl font-bold text-background">
                        Upcoming Events
                    </h3>
                </div>

                {/* events grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {events.map((event, idx) => (
                        <EventCard
                            key={idx}
                            date={event.date}
                            title={event.title}
                            description={event.description}
                            icon={event.icon}
                            rsvpLink={event.rsvpLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

