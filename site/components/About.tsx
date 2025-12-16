import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-60 w-screen relative bg-linear-to-b from-black to-blue-background">
            <div className="relative mx-auto flex flex-row items-center justify-center max-w-7xl">
                {/* about content */}
                <div className="w-1/2 flex flex-col items-end gap-8 px-8">
                    <h2 className="text-lg font-bold text-primary uppercase">About</h2>
                    <h3 className="text-5xl font-bold text-background">
                        Who We Are
                    </h3>
                    <p className="text-base text-right text-background/70">
                        UCI SIGGRAPH is the local student chapter of the Association
                        for Computing Machinery's Special Interest Group on 
                        Computer Graphics and Interactive Techniques.
                        <br /> <br />
                        We host workshops, industry talks, and social events to 
                        foster a community of artists, engineers, and creators 
                        passionate about the intersection of technology and art.
                    </p>
                </div>

                {/* vertical divider */}
                <div className="w-px h-full min-h-[400px] bg-primary mx-4" />

                {/* about image */}
                <div className="w-1/2 flex flex-col items-start justify-center gap-4 rounded-lg px-8">
                    <Image src="/logo/acm-siggraph-logo.jpg" alt="ACM SIGGRAPH Logo" className="rounded-lg" width={500} height={500} />
                </div>
            </div>
        </section>
    )
}