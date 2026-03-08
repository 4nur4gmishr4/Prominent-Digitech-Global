"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const industries = [
    { name: "Healthcare", icon: "local_hospital", desc: "HIPAA-compliant digital strategies for hospitals, clinics, and pharmaceutical companies." },
    { name: "Real Estate", icon: "apartment", desc: "Lead generation and brand visibility for property developers and real estate agents." },
    { name: "E-Commerce", icon: "shopping_bag", desc: "End-to-end digital commerce solutions from storefront to checkout optimisation." },
    { name: "Education", icon: "school", desc: "Student acquisition and brand building for universities, EdTech, and training institutes." },
    { name: "Finance & Banking", icon: "account_balance", desc: "Compliance-aware marketing for banks, fintech startups, and insurance providers." },
    { name: "Travel & Hospitality", icon: "flight", desc: "Booking-driven campaigns for hotels, airlines, and travel agencies worldwide." },
    { name: "Food & Beverage", icon: "restaurant", desc: "Appetite-driven marketing for restaurants, food delivery, and FMCG brands." },
    { name: "Technology", icon: "computer", desc: "B2B and B2C digital strategies for SaaS, IT services, and hardware companies." },
    { name: "Automotive", icon: "directions_car", desc: "Showroom traffic and lead generation for dealerships and automotive brands." },
    { name: "Legal Services", icon: "gavel", desc: "Client acquisition strategies for law firms and legal consultancies." },
    { name: "Manufacturing", icon: "precision_manufacturing", desc: "Digital transformation and lead generation for manufacturing enterprises." },
    { name: "Retail", icon: "store", desc: "Omnichannel marketing strategies for brick-and-mortar and online retail." },
];

export default function IndustriesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-[#1A1A1A] py-16 sm:py-24 lg:py-32 overflow-hidden clip-slant">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#FF5400]/20 via-[#1A1A1A] to-[#1A1A1A] animate-gradient-xy" />
                <div className="absolute -bottom-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-[#FF5400]/15 rounded-full blur-[80px]" />
                <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[#FF5400] text-xs sm:text-sm font-bold tracking-wide mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#FF5400] animate-pulse" />
                        INDUSTRY EXPERTISE
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 sm:mb-8 text-balance" style={{ fontFamily: "var(--font-heading)" }}>
                        Industries We <span className="text-[#FF5400]">Serve</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-base sm:text-lg md:text-xl text-[#EFE7DF]/80 max-w-3xl mx-auto font-medium leading-relaxed mb-8 sm:mb-10 pb-6 sm:pb-0">
                        We provide digital marketing solutions tailored to different market sectors, with strategies specific to each industry&apos;s unique challenges and opportunities.
                    </motion.p>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="bg-[#F6F1EB] py-14 sm:py-20">
                <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                        {industries.map((ind) => (
                            <div key={ind.name} className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#E2D9CF] hover:border-[#FF5400] hover:shadow-lg transition-all duration-200">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FFE3D6] rounded-xl sm:rounded-2xl flex items-center justify-center text-[#FF5400] mb-4 sm:mb-6 group-hover:bg-[#FF5400] group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[24px] sm:text-[32px]">{ind.icon}</span>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-[#121212] mb-2 sm:mb-3 group-hover:text-[#FF5400] transition-colors">{ind.name}</h3>
                                <p className="text-[#6B6B6B] text-xs sm:text-sm leading-relaxed">{ind.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#FF5400] to-[#E64A00] py-16 sm:py-24 px-5 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                        Don&apos;t See Your Industry?
                    </h2>
                    <p className="text-white/90 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto">
                        We work across all sectors. Get in touch and let us create a custom strategy for your market.
                    </p>
                    <Link href="/contact" className="bg-white text-[#FF5400] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-[#FFF8F2] transition-all shadow-2xl shadow-black/20">
                        Contact Us Today
                    </Link>
                </div>
            </section>
        </>
    );
}
