"use client"

import React from "react";
import {
    ActivityLogIcon,
    BellIcon,
    FileTextIcon,
    GlobeIcon,
    LightningBoltIcon,
    PaperPlaneIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "./ui/bento-grid";

const features = [
    {
        Icon: PaperPlaneIcon,
        name: "Smart Mobility",
        description: "AI Traffic Control, Smart Parking, and seamless Public Transport integration.",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-transparent opacity-80" />
        ),
        className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
        Icon: GlobeIcon,
        name: "Eco Management",
        description: "Real-time Air Quality tracking, Smart Waste systems, and Green Monitoring.",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-transparent to-transparent opacity-80" />
        ),
        className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: LightningBoltIcon,
        name: "Smart Energy",
        description: "Powered by Renewable Energy and an automated Smart Grid.",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-transparent to-transparent opacity-80" />
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
    },
    {
        Icon: ActivityLogIcon,
        name: "Smart Healthcare",
        description: "24/7 Telemedicine access and rapid Emergency Response.",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-transparent to-transparent opacity-80" />
        ),
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    },
    {
        Icon: BellIcon,
        name: "Public Safety",
        description: "CCTV AI surveillance, Disaster Alerts, and predictive Crime Analytics.",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 via-transparent to-transparent opacity-80" />
        ),
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: FileTextIcon,
        name: "Digital Governance",
        description: "Transparent E-Government services and an integrated Citizen Portal.",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 via-transparent to-transparent opacity-80" />
        ),
        className: "lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
];

export function Feature() {
    return (
        <section 
            className="relative flex w-full flex-col items-center justify-start py-24 overflow-hidden bg-[#F6FAF5] border-b border-gray-200 shadow-[0_20px_30px_-10px_rgba(0,0,0,0.08)] z-10"
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            {/* Header / Title untuk Section Feature agar tidak terlihat kosong */}
            <div className="text-center z-20 px-6 mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
                    Intelligent <span className="text-emerald-600">Infrastructure</span>
                </h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    Explore the six core pillars that make our ecosystem smarter, greener, and safer for every citizen.
                </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="w-full max-w-[1200px] px-4 md:px-8 z-20">
                <BentoGrid className="lg:grid-rows-3">
                    {features.map((feature) => (
                        <BentoCard key={feature.name} {...feature} />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}

export default Feature;