"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const servicesDetailed = [
    {
        id: "seo",
        title: "Search Engine Optimization (SEO)",
        tag: "Organic Growth",
        icon: "manage_search",
        desc: "Dominate search results with our data-driven SEO strategies. We ensure your brand ranks high on search engines, driving sustainable organic traffic and qualified leads without the constant ad spend.",
        benefits: ["Increased organic visibility across all engines", "Higher conversion rates from qualified traffic", "Long-term brand credibility and authority"],
        process: ["Audit & Analysis", "Keyword Strategy", "Optimization"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO01E5jGFQdnFPFGGwjkvBLL_KgxZGm5qsnu5jkGWoevyfn9EO8E-O9dB0RBtzDxeJ98di3qfiDdQMagcfJPGp6gQq86wIDinEf5AmjMaYXdZ1-yAuiksJZuUYggd_jLKzqDxxaIjcaJGiZaXrXyxmLr0KDqCB10VGK6Vv1Q45m2BHtNBJjgaCwQ-d9iU8wilgLUK4FdzDNbaPVAYz5qqL66zmYy3dHMZsOCCAccXxxPJiCtNfDwoRHxWoGeaz9kfkOw4EmB6jIvdq",
        stat: "+124% Traffic Growth",
    },
    {
        id: "social-media-ads",
        title: "Social Media Marketing (SMM)",
        tag: "Audience Engagement",
        icon: "campaign",
        desc: "We create compelling social media campaigns that resonate with your target audience, fostering community engagement and building lasting brand loyalty across all major platforms.",
        benefits: ["Enhanced brand awareness & reach", "Direct customer engagement loop", "High viral content potential"],
        process: ["Audience Profiling", "Content Calendar", "Community Management"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiEhC5C4Z3ryFJhmb8IXuveK6WYDeZ9oStvfGLiJj3NV5G-oWqTMcK7E3b7a_HeWXQGnQ-5G8d0c7NuFEAH4yax6Gt7Uq7zN-PeJgNb35Ep11rDDjBaPQNHKRPfqNApgv8bNVC2KckM_sYNH8ip5Si4l2WxW1NpbRZKhZR0ULAj8rSWrceYzJO1MxQngqpLyPpY_Mhx8zTWRbn-fZqBUvXM5z1Er2MNv_jOboXL29Mwfaf9orX2bhYM31kM4yCUMm1iXx40377Jp69",
        stat: "24/7 Engagement",
    },
    {
        id: "web-development",
        title: "Custom Web Development",
        tag: "Tech Innovation",
        icon: "terminal",
        desc: "Robust, scalable, and fast. From custom web applications to responsive corporate websites, our development team builds secure and high-performance solutions that grow with your business.",
        benefits: ["Lightning-fast load times", "Mobile-first responsiveness", "Enterprise-grade security"],
        process: ["Requirements", "UI/UX & Prototyping", "Development & QA"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDrZMVexAXuCZaQCa5PEojN9Bh8_JOJCoM_rCee7a6pgQLiiuIyfuAs-TfmENWWNrQh-muIvMz-qdYtZ8I3cL2RBixD-89kl-uXYNX96w3eJw-nCCoAH3UDUhC0TmNx3jZ1WQiXWF1XLLg_-aUYo7D_do8GQRg5dmYPtSo3-ye7UO72lH0hMWPdaVdpvTT9Dn-A_kiV1Hxb1flR_qWhQRuQFsRSVIcYlUFyF1rvwpm8HSfHC6Bcnhp0MS5pV9h_sWXfKIe5Kn3QmCuN",
        stat: "Clean & Optimized",
    },
    {
        id: "branding",
        title: "Branding & Identity",
        tag: "Visual Identity",
        icon: "design_services",
        desc: "Your brand is more than just a logo. We help define your voice, visual identity, and positioning to create a cohesive brand experience that stands out in a crowded market.",
        benefits: ["Distinct market positioning", "Emotional customer connection", "Consistent visual language"],
        process: ["Discovery Workshop", "Identity Design", "Collateral Creation"],
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7V-u5QLQu51tjNtVuUFphH9mDV-p4kMmKXkT6qYG1TG_uMFABKofmzDg_UPWr8CEa3WMV6qkdYKh-M5nOgWcRQ2ZSRVJJPFZGK5GbwWbhkLrBdL_XOV8CjW_RevXq7FPyZ7dycwgKcKGitUO8Cd_waY24Y2bdv0JNl_0Or_esAuwoUiYOMDbdYyZP9n_w_JXJncecLt_w5YThmJyzMtfM54Z_hSwSkKlKIRJDZLVQ7D5JR0dvuyNCkr5Sb4Q3NsE1EegJX-Rql_RO",
        stat: "Premium Design",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-[#1A1A1A] py-16 sm:py-24 lg:py-32 overflow-hidden clip-slant">
                <div className="absolute inset-0 z-0 opacity-30 mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF5400' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#FF5400]/30 via-[#1A1A1A] to-[#1A1A1A]" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FF5400]/15 rounded-full blur-[100px]" />

                <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[#FF5400] text-xs sm:text-sm font-bold tracking-wide mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#FF5400] animate-pulse" />
                        PREMIUM DIGITAL SERVICES
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 sm:mb-8 text-balance" style={{ fontFamily: "var(--font-heading)" }}>
                        Digital Excellence{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5400] via-white to-[#FF5400]">
                            Redefined.
                        </span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-[#EFE7DF]/80 max-w-3xl mx-auto font-medium leading-relaxed mb-8 sm:mb-10 text-balance">
                        We craft data-driven strategies and build robust digital systems that position your brand ahead of the curve.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pb-6 sm:pb-0">
                        <a href="#seo" className="bg-[#FF5400] hover:bg-[#E64A00] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg shadow-[#FF5400]/25 text-center">
                            View All Services
                        </a>
                        <Link href="/about" className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all text-center">
                            Our Methodology
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            <div className="max-w-[1000px] mx-auto px-5 pt-14 sm:pt-20 pb-8 sm:pb-12 text-center">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#121212] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Make Your Marketing Irresistible</h2>
                    <p className="text-[#3A3A3A] text-lg leading-relaxed">
                        In a world full of noise, we help your brand stand out. At <span className="text-[#FF5400] font-bold">Prominent Digitech Global</span>, we craft compelling strategies that captivate your audience and drive real engagement.
                    </p>
                </motion.div>
            </div>

            {/* Service Cards */}
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pb-14 sm:pb-24 flex flex-col gap-12 sm:gap-24">
                {servicesDetailed.map((service, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                        <div key={service.id} id={service.id}
                            className="group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 shadow-[0_10px_40px_-10px_rgba(255,84,0,0.06)] hover:shadow-lg border border-[#E2D9CF] transition-all duration-200">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
                                <div className={`lg:col-span-7 ${isEven ? "order-2 lg:order-1" : "order-2"}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-[#FFE3D6] flex items-center justify-center text-[#FF5400]">
                                            <span className="material-symbols-outlined text-[28px]">{service.icon}</span>
                                        </div>
                                        <span className="text-[#FF5400] font-bold tracking-wider text-sm uppercase">{service.tag}</span>
                                    </div>
                                    <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#121212] mb-4 sm:mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>{service.title}</h2>
                                    <p className="text-[#3A3A3A] text-sm sm:text-lg mb-6 sm:mb-10 leading-relaxed border-l-4 border-[#FF5400] pl-4 sm:pl-6">{service.desc}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-10">
                                        <div>
                                            <h4 className="font-bold text-[#121212] mb-4 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                                                    <span className="material-symbols-outlined text-[14px]">check</span>
                                                </span>
                                                Key Benefits
                                            </h4>
                                            <ul className="space-y-3">
                                                {service.benefits.map((b) => (
                                                    <li key={b} className="flex items-start gap-3 text-sm text-[#3A3A3A]">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] mt-2" />
                                                        {b}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#121212] mb-4 flex items-center gap-2">
                                                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                                                    <span className="material-symbols-outlined text-[14px]">settings</span>
                                                </span>
                                                Our Process
                                            </h4>
                                            <div className="space-y-4 relative">
                                                <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-[#E2D9CF]" />
                                                {service.process.map((p) => (
                                                    <div key={p} className="relative pl-6">
                                                        <span className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-white border-2 border-[#FF5400] rounded-full z-10" />
                                                        <p className="text-sm font-semibold text-[#121212]">{p}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-[#FF5400] font-bold hover:text-[#E64A00] transition-colors group-hover:translate-x-1 duration-300">
                                        Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                </div>
                                <div className={`lg:col-span-5 ${isEven ? "order-1 lg:order-2" : "order-1"}`}>
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#FF5400]/10 aspect-[4/3] transform group-hover:-translate-y-2 transition-transform duration-500">
                                        <div className="absolute inset-0 bg-[#FF5400]/5 mix-blend-overlay z-10" />
                                        <div className="w-full h-full" style={{ backgroundImage: `url('${service.img}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                                        <div className="absolute bottom-4 right-4 bg-[#1A1A1A]/80 text-white text-xs font-bold p-3 rounded-lg z-20">
                                            {service.stat}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#FF5400] via-[#E64A00] to-[#FF5400] py-16 sm:py-24 px-5 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>Ready to Transform Your Digital Presence?</h2>
                        <p className="text-white/90 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto font-medium">
                            Let&apos;s discuss how our tailored services can help you achieve your business goals. Our team is ready to build your success story.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                            <Link href="/contact" className="bg-white text-[#FF5400] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-[#FFF8F2] transition-all shadow-2xl shadow-black/20 text-center">
                                Schedule a Consultation
                            </Link>
                            <Link href="/case-study" className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                                View Our Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
