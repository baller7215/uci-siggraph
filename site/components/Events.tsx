import { EventCard } from "./EventCard";

export function Events() {
    const events = [
        {
            date: "OCT 21",
            title: "Ray Tracing Workshop @ UCI",
            description: "Interested in learning on where those cool images where diffuse and specular spheres come from? Why do we trace rays? What does that even mean? This workshop is perfect place to learn about beginner ray tracing and what you can do with it!",
            icon: "calendar" as const,
            rsvpLink: "#",
        },
        {
            date: "OCT 14",
            title: "Blender Workshop @ UCI",
            description: "A workshop from a guest speaker, Michael Moretti, on 3D modeling and digital sculpting with Blender.",
            icon: "microphone" as const,
            rsvpLink: "https://forms.gle/h7YeC9iBfigjDEbB9",
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

