import Image from "next/image";
import { IconBrandDiscord, IconBrandInstagram, IconMail } from "@tabler/icons-react";

export function Footer() {
    const navLinks = [
        { name: "Home", link: "/" },
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Events", link: "#events" },
    ];

    const socialLinks = [
        { icon: IconBrandDiscord, link: "https://discord.gg/wGP3uAkz", label: "Discord" },
        { icon: IconBrandInstagram, link: "https://www.instagram.com/siggraph.uci/", label: "Instagram" },
        { icon: IconMail, link: "mailto:uci-chapter@acmsiggraph.org", label: "Email" },
    ];

    return (
        <footer className="w-screen relative bg-[#0b132b] border-t border-border/20">
            <div className="relative mx-auto max-w-7xl px-6 py-12">
                {/* main footer content */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-8">
                    {/* left side - logo and text */}
                    <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/logo/siggraph-logo.png"
                                alt="UCI SIGGRAPH Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-background font-semibold text-lg">UCI SIGGRAPH</span>
                            <span className="text-background/70 text-sm">University of California, Irvine</span>
                        </div>
                    </div>

                    {/* center - navigation links */}
                    <nav className="flex flex-wrap items-center gap-6">
                        {navLinks.map((link, idx) => (
                            <a
                                key={idx}
                                href={link.link}
                                className="text-background hover:text-primary transition-colors text-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* right side - social media icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, idx) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={idx}
                                    href={social.link}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full border-2 border-background/30 flex items-center justify-center text-background hover:border-primary hover:text-primary transition-all duration-300"
                                >
                                    <IconComponent className="w-5 h-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* divider */}
                <div className="border-t border-border/20 mb-6" />

                {/* copyright */}
                <div className="text-center">
                    <p className="text-background/60 text-xs">
                        © 2025 UCI SIGGRAPH. All rights reserved. Not officially affiliated with ACM SIGGRAPH national organization.
                    </p>
                </div>
            </div>
        </footer>
    );
}

