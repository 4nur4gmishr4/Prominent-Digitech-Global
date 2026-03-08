"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const values = [
    { title: "Integrity", desc: "We uphold the highest standards of honesty and transparency in all our actions.", icon: "verified" },
    { title: "Innovation", desc: "We constantly push boundaries to create solutions that are ahead of the curve.", icon: "psychology" },
    { title: "Collaboration", desc: "We believe in the power of working together to achieve shared goals.", icon: "handshake" },
    { title: "Impact", desc: "We measure our success by the tangible results we deliver to our clients.", icon: "monitoring" },
];

const leaders = [
    {
        name: "Example Founder",
        role: "Founder & CEO",
        quote: "Leadership is not about being in charge. It is about taking care of those in your charge.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI2vrVRxChgsxRh2ZPxFfqV2Kcl_R6-5vebRseW2eyHUNR6JFUTUGdFVIXh4phoHPC1FaZb_o2N4KJx8-IAPl2lzAXWqW1adp890Zewym9vPV58pGu5ObnWkDekt4-vq6HwkAuSIKchpDG_GYtpGfViGYB5YFg3s1FIj7y7AuS2T7XPS36XIzzWa2GlIoecgXQPacZZr6uv7EzpgVuamC_xJ2jyGZeCv32i1Kl7q3RRWKFeulBGRaGoH4XZgupmj03SKyraLfwBqzf",
    },
    {
        name: "Example CTO",
        role: "Chief Technology Officer",
        quote: "Technology is best when it brings people together.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3Jl9T3nPSIZ6eQfe6KOP956BYiRU5sW-KASQoFxHfbQ3EZasDhZ5YXbkQpLkTkUZmzj5dS28vN1gRdbr4NLRtejdYkfnhY5lphYjj7nqgfBq0GwDFhrmFkxoBi6nMP1GWb5PiJirScIeR1E6ANGR7asbyRn_S32PNwpTRSdqL_aUyRYlm3XFnXovJi_9PDILs_lwh2vR7Oku93ocsWq9id-tb36KMc7XFZQY9nLBVlc7qcP3DFVD1M-AyWsUERHDANx4h4jf5x78D",
    },
    {
        name: "Example COO",
        role: "Chief Operating Officer",
        quote: "Efficiency is doing things right; effectiveness is doing the right things.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAarwj4dAQe7F-RSYJ9xrg9ClFllMpNsV-Mm5W3M9Fn0l1msyYPCNbDT6dXH3LRO2fX8Z-ia1kh7E-9sdMAzucKK9w9ADRdWEIpmR7JbuXbP_AjQW1WlfNkQZbfnzlSLRJykMJUwYh29yrRCkFaEkoIikSCcIKE_y4ZTT5XJUJmwcTB685pCH1nOw08ioyYmZdNA69rjSdo7A3d57zvLgDLphiwD4Xhgn07CTyZPlzje-RFlRVG0TnqK0mwDFeURRM8ol4tgwCRssVv",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-[#1A1A1A] py-16 sm:py-24 lg:py-32 overflow-hidden clip-slant">
                {/* Slanted gradient accent - Animated */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#FF5400]/20 via-[#1A1A1A] to-[#1A1A1A] animate-gradient-xy" />
                <div className="absolute -bottom-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-[#FF5400]/15 rounded-full blur-[80px]" />

                <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit mb-6">
                                <span className="w-2 h-2 rounded-full bg-[#FF5400]" />
                                <span className="text-[#FF5400] text-xs font-bold uppercase tracking-wide">Our Story</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                                Innovating the <span className="text-[#FF5400]">Digital Future</span> Since 2010
                            </h1>
                            <p className="text-[#EFE7DF]/80 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                                At Prominent Digitech Global, our story is one of relentless growth and a passion for technology.
                                We bridge the gap between complex IT challenges and seamless digital solutions, empowering
                                enterprises to scale without limits.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pb-6 sm:pb-0">
                                <Link href="/contact" className="bg-[#FF5400] hover:bg-[#E64A00] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all shadow-lg shadow-[#FF5400]/25 text-center">
                                    View Our Journey
                                </Link>
                                <Link href="/case-study" className="bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold transition-all text-center">
                                    View Portfolio
                                </Link>
                            </div>
                            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10 mt-4 sm:mt-8">
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-white">12+</h3>
                                    <p className="text-xs sm:text-sm text-[#EFE7DF]/60 font-medium">Years Experience</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-white">500+</h3>
                                    <p className="text-xs sm:text-sm text-[#EFE7DF]/60 font-medium">Projects Delivered</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-black text-white">50+</h3>
                                    <p className="text-xs sm:text-sm text-[#EFE7DF]/60 font-medium">Global Partners</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="relative hidden lg:block">
                            <div
                                className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                                style={{
                                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNbyITllJzt8-gQSeOJ3Ch8gdscCL4VAtGSrxkAiCP04mtUcnh6_UARfUqhVGfGqfR5wJucODh7anxeE61ZjiORSXLnppzelTSWY8fQxT18G6K8WSWBm2JnRu_j3Yo2_28PN_IJ79AAAS7XfMO77AKj6-IE7m9QmrlKNmxd4XCcLW5V_HQec5dxqQLAbOyixD9tCkc5gUSZfN4Ckw05NRURRa75FufF_gz6-JCcyE-sH97tHLbpcInJGyAhTGGMskkLIpQrR7TlFVJ')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section >

            {/* Mission & Vision */}
            < section className="bg-white py-14 sm:py-20 px-5 md:px-10" >
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="flex flex-col justify-center">
                            <span className="text-[#FF5400] text-sm font-bold uppercase tracking-wider mb-2">Our Philosophy</span>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                                Driving Success Through Strategic Innovation
                            </h3>
                            <p className="text-[#3A3A3A] text-base sm:text-lg mb-8">
                                We believe technology should be an enabler, not a barrier. Our mission is to make
                                enterprise-grade digital solutions accessible for businesses of all sizes.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-[#FFE3D6] p-3 rounded-lg h-fit text-[#FF5400] flex-shrink-0">
                                        <span className="material-symbols-outlined">lightbulb</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-[#121212] mb-2">Our Vision</h4>
                                        <p className="text-[#6B6B6B] text-sm sm:text-base">To be the global catalyst for digital transformation, setting new standards for quality and innovation in the IT sector.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-[#FFE3D6] p-3 rounded-lg h-fit text-[#FF5400] flex-shrink-0">
                                        <span className="material-symbols-outlined">rocket_launch</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg sm:text-xl font-bold text-[#121212] mb-2">Our Mission</h4>
                                        <p className="text-[#6B6B6B] text-sm sm:text-base">Empowering organisations with robust, scalable, and secure digital ecosystems that drive tangible business outcomes.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            <div className="space-y-3 sm:space-y-4 mt-8">
                                <div className="h-48 sm:h-64 w-full rounded-2xl overflow-hidden" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1nQL_Sa3t4nXPquUqCRenq9Ax9BuH-g9ZCw-4BcoY7e1dQierF1A_QgPqd8CnraaAcwAnwgyO9aHqjBMWfx-5CV2jkrHkXl5zeyhWovzZ1eRjJLQKWKyZJGSTF6xiHOA-pZmAxRe5RCdVqFPlG1MlUlaPbbErQqnN18jBrKbzOQs2cdlfOFgIapf0FotvbIRxd8tjYULMf9BFLJmLR06PzLi-rINn6cQTCABGyPJtd9MlYLe5R1CU2s4wHm5q7_Oryu5KhyFSvU8k')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                                <div className="bg-[#FF5400] p-5 sm:p-6 rounded-2xl text-white">
                                    <span className="material-symbols-outlined text-3xl sm:text-4xl mb-3 sm:mb-4">diamond</span>
                                    <p className="font-bold text-sm sm:text-lg">Excellence in every pixel.</p>
                                </div>
                            </div>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="bg-[#F1E6DC] p-5 sm:p-6 rounded-2xl">
                                    <span className="material-symbols-outlined text-3xl sm:text-4xl mb-3 sm:mb-4 text-[#FF5400]">diversity_3</span>
                                    <p className="font-bold text-sm sm:text-lg text-[#121212]">People-first culture.</p>
                                </div>
                                <div className="h-48 sm:h-64 w-full rounded-2xl overflow-hidden" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqkKqz062cp29vErSxNXblblIYsFA2VYESWX0CNzCuMFBfwC49KmM6F9q0NWB_ZVtdJmNJ41raadNG4RwfMgIY6qq21V-i2vq0crnW04Y5MawZBJTaj4Shks2OOguFK_MdZTtRcSYks5W1VWkUPxu1-JfeCVUlOJacgXNnUP_iM1LUhOEUEboH3DLZvkYulyJXOpIB7EpfaeDAK2_6G0C91XYPVKHwp3ps4BXS0QoLNZ7kxX3qI4p6T_TeeO54MfUf-8e6Q3aWPIh7')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Core Values */}
            < section className="py-14 sm:py-20 px-5 md:px-10 bg-[#F6F1EB]" >
                <div className="max-w-[1280px] mx-auto">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212] mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our Core Values</h2>
                        <p className="text-[#6B6B6B] text-sm sm:text-base">The principles that guide our decisions and define our culture.</p>
                    </motion.div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {values.map((v) => (
                            <div key={v.title} className="group bg-white p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-[#E2D9CF] hover:border-[#FF5400] transition-all duration-200 hover:shadow-lg">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FFE3D6] rounded-lg sm:rounded-xl flex items-center justify-center text-[#FF5400] mb-4 sm:mb-6 group-hover:bg-[#FF5400] group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-xl sm:text-2xl">{v.icon}</span>
                                </div>
                                <h3 className="text-base sm:text-xl font-bold text-[#121212] mb-2 sm:mb-3">{v.title}</h3>
                                <p className="text-[#6B6B6B] text-xs sm:text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Leadership */}
            < section className="bg-white py-14 sm:py-20 px-5 md:px-10" >
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 sm:mb-12 gap-4">
                        <div className="max-w-xl">
                            <span className="text-[#FF5400] text-sm font-bold uppercase tracking-wider mb-2 block">Our Leaders</span>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212]" style={{ fontFamily: "var(--font-heading)" }}>Meet the Minds Behind the Magic</h3>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {leaders.map((leader) => (
                            <div key={leader.name} className="group relative overflow-hidden rounded-2xl bg-[#F6F1EB]">
                                <div className="aspect-[4/5] w-full overflow-hidden">
                                    <div className="w-full h-full transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${leader.img}')`, backgroundSize: "cover", backgroundPosition: "top center" }} />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-white font-medium mb-2 text-sm sm:text-base">&ldquo;{leader.quote}&rdquo;</p>
                                    </div>
                                </div>
                                <div className="p-5 sm:p-6 relative bg-white border-t border-[#E2D9CF]">
                                    <h4 className="text-lg sm:text-xl font-bold text-[#121212]">{leader.name}</h4>
                                    <p className="text-[#FF5400] font-medium text-sm">{leader.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* CTA */}
            < section className="py-14 sm:py-20 px-5 md:px-10" >
                <div className="max-w-[1280px] mx-auto rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-[#FF5400] to-[#E64A00] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 md:p-16 gap-8 sm:gap-10">
                        <div className="max-w-2xl text-center md:text-left">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ready to start your digital transformation?</h2>
                            <p className="text-white/80 text-base sm:text-lg">Join hundreds of successful companies who trusted Prominent Digitech Global for their IT solutions.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
                            <Link href="/contact" className="bg-white text-[#FF5400] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base hover:bg-[#FFF8F2] transition-colors shadow-lg text-center">
                                Contact Us Today
                            </Link>
                            <Link href="/case-study" className="border border-white/30 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-colors text-center">
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
