"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const categories = ["All", "E-commerce", "SEO", "App Development", "Cloud", "Analytics", "Consulting"];

const caseStudies = [
    {
        title: "Scalable Retail Architecture",
        category: "E-commerce",
        desc: "Optimising checkout flow for high-volume retail clients during peak holiday seasons. We re-engineered the backend to support 10x traffic surge without downtime.",
        stat: "+200% ROI",
        statIcon: "trending_up",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhU73kxMMk2hLIwKujYZsM88UGNxVnuOzmM_RQ9xMWBhqpW4MwVB2J1ng-5ntHFMyD51gFQunzssYss1VWB_n7TkRbx6YEgYHDPScXQrBr0ie2tPBDjdFlyIqBkXiLv8k-9MMx7p5nImsQr4jxo9g8CdgUYp3h0UcIvJKlUBQaz_xBsSWmMDqDZ-zFh9-5ipJKcaHoiEd-kMpCgudeUnZbxE6xqPI8N9geIFUjQ_k3xsMfHSIH-xKlHMNJFrBZOsR1IYL2zb48LY8r",
        initials: ["JP", "AS"],
    },
    {
        title: "Global SEO Revamp",
        category: "SEO",
        desc: "Ranking #1 for competitive keywords across 3 continents. A comprehensive content strategy overhaul that dominated search engines.",
        stat: "+150% Traffic",
        statIcon: "visibility",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvywkCWXdYwdQJaEZb8rgHW5ryijA6B1MjvSIAlEDtTgMkdah5s7PIPRh2zJ4xLjbcZhUwOSUIhRbZXHBZ6Nd_oY1XbRFOxdlwIHgFmN0skxLBxzMZ3E0hmZP89h7krrfmqmI-YQUZxGzDJ54pKIxnwVCt-UoG4XafwDh3AuugRvJAAZ_MuuXUTlqxSyieCFip8UpL_JPD7E0xYZoyR_61yApjl8mDByYoj48rECHV4KJm6O7RUUvM8QGTCRLwYv612uUAijOPuy0_",
        initials: ["MK"],
    },
    {
        title: "FinTech Mobile Wallet",
        category: "App Development",
        desc: "Developed a secure, user-friendly mobile wallet for a leading bank, integrating biometric security, instant transfers, and cryptocurrency support.",
        stat: "1M+ Users",
        statIcon: "download",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRzD-H-OF3iY4m5gW3UvlrfPUd8Xs9cZAwRKWbv9OBDoAAZNzxe0tGagGP-l4iPTzAEQEAOEnDYideVUB4iuE9Yp6q9Bnwviv4j-Pq2eQfdjasAHJ0GFmuF5LBbW1w1kU2iXv4iQhHso1Rolk2Qy6J7dj_ePKGDkmyaaMaN6HretruC2XC04E64cWyAvtdow6fmDE3cVRY1A3pU6K6w8-abyKiv_vuqbow_nwkzRs7jXmlsLFEmlAc8JYhp7n7frmg-KVIw1kMCh7X",
        initials: ["TD", "LR", "+2"],
    },
    {
        title: "Legacy System Overhaul",
        category: "Cloud",
        desc: "Migrating a 20-year-old on-premise infrastructure to AWS, reducing operational costs and drastically improving uptime reliability.",
        stat: "-40% Costs",
        statIcon: "savings",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBH2NVX_tIhBwaGtE_IWmNpiEWT3sRTMq5ivJepMXi4mG5DZXTfJtCfkAEy37UuExLExSlaQJq0Gb7PAdUTJPer4ujux5WOAVC4ui_BD0v8FBQSVI74h7IapcN_8Myygq5YdSx1s2s9o2anblKoiDtwTXlSEhpGp01vttD4taArtro6zXOMTS-D-8qqhi3uFM4fMalkyfetUKBPJpe1nFhVVMHnyw9TiaIhPR3Tm9yNGceqMw2HhdPHAAhEr93cZPZdJ5xwrG3CpEvY",
        initials: ["DK"],
    },
    {
        title: "Predictive Market Analysis",
        category: "Analytics",
        desc: "Implementing AI-driven analytics to predict market trends for a global logistics partner, enabling proactive supply chain adjustments.",
        stat: "95% Accuracy",
        statIcon: "psychology",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCn427jZ852PIIlNuVJHuHRLtieDeP4dn-tG2TUSSfoNrxDFYuXPxoHQYLbvj1mIj85gNoB34ei7kHVyRD-4-Gz-spJw8GEJdXNYT20JaeyhlcR-s8OYBASbZSrBbzCouoin0o4GFfETo7pQuW8HNEQPR3kiLMxX8ng7g3O_3yxKATlFhWMYYw-Tz-lS7_V8F_QqCSbXlcICqNCcnT-RahW1T2AsJNcuDC1_wtIYDMG_nnUqbIgY1GNkeWL5hC5HbftY_wlLCHQDhn",
        initials: ["AI", "ML"],
    },
    {
        title: "Healthcare Digital Transformation",
        category: "Consulting",
        desc: "Digitising patient records and implementing telehealth solutions for a regional hospital network, reducing wait times and errors.",
        stat: "30% Faster",
        statIcon: "speed",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW2rhKudxyvMjd1j2N8gf1WwuiBL3I6EL6bvF4Y86jnSyxa4YdPWRUdVB5q4k2Y0vQzhyX1CQH7DXY5_RNE_Z0_uMXYz8mXjl8-GFcDiF9a1mWk_Ozvr4VewJFzz2oz-i2G9Fe8igDdz09tVX3d9PNX4tMBDo4hzxPbr0kCXEDQ_F6yFgY-G7I_dCkwMl6qMKbwKNBYDZZNgtZpP3ABOBIQBuD-SQsJMVTRPzcmjMxlVLIQ8VDISe9h0WEIG03zNfi4gZ6olND5wdi",
        initials: ["HC"],
    },
];

export default function CaseStudyPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered = activeFilter === "All"
        ? caseStudies
        : caseStudies.filter((cs) => cs.category === activeFilter);

    return (
        <>
            {/* Hero */}
            <section className="bg-[#F6F1EB] pt-10 sm:pt-16 pb-8 sm:pb-12 px-5">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-6 border-b border-[#E2D9CF] pb-8">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE3D6] text-[#FF5400] text-xs font-bold uppercase tracking-wider mb-2">
                                <span className="w-2 h-2 rounded-full bg-[#FF5400] animate-pulse" />
                                Proven Results
                            </div>
                            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight tracking-tight text-[#121212]" style={{ fontFamily: "var(--font-heading)" }}>
                                Case Studies & <br />
                                <span className="text-[#FF5400]">Global Impact</span>
                            </h1>
                            <p className="text-[#6B6B6B] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                                Deep dive into our portfolio of digital transformations. See how we drive measurable growth through innovation.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:flex gap-4">
                            <div className="text-right">
                                <p className="text-3xl font-bold text-[#121212]">500+</p>
                                <p className="text-sm text-[#6B6B6B] font-medium">Projects Delivered</p>
                            </div>
                            <div className="w-px h-12 bg-[#E2D9CF]" />
                            <div className="text-right">
                                <p className="text-3xl font-bold text-[#121212]">98%</p>
                                <p className="text-sm text-[#6B6B6B] font-medium">Client Retention</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filter */}
            <section className="bg-[#F6F1EB] sticky top-20 z-40 py-3 sm:py-4 px-5 border-b border-[#E2D9CF]/50">
                <div className="max-w-[1280px] mx-auto flex gap-2 sm:gap-3 overflow-x-auto pb-2 items-center">
                    <span className="text-[10px] font-bold text-[#6B6B6B] mr-1 sm:mr-2 uppercase tracking-wider whitespace-nowrap">Filter:</span>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`flex h-8 sm:h-9 items-center justify-center rounded-lg px-3 sm:px-5 text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${activeFilter === cat
                                ? "border-2 border-[#FF5400] bg-[#FF5400] text-white shadow-lg shadow-[#FF5400]/20 font-bold"
                                : "border border-[#E2D9CF] bg-white text-[#3A3A3A] hover:border-[#FF5400] hover:text-[#FF5400]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Case Study Grid */}
            <section className="bg-[#F6F1EB] py-8 sm:py-12 px-5 min-h-[60vh]">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    {filtered.map((cs) => (
                        <article
                            key={cs.title}
                            className="group relative flex flex-col h-full rounded-2xl sm:rounded-3xl bg-white shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#E2D9CF]"
                        >
                            <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${cs.img}')` }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                </div>
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="inline-flex items-center rounded-lg bg-white/95 backdrop-blur-md px-3 py-1.5 text-xs font-bold text-[#FF5400] shadow-lg border border-[#FFE3D6]">
                                        {cs.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 right-4 z-10 transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <div className="flex items-center gap-2 bg-[#FF5400] text-white px-4 py-2 rounded-full shadow-[0_0_15px_rgba(255,84,0,0.3)] font-bold text-sm">
                                        <span className="material-symbols-outlined text-base">{cs.statIcon}</span>
                                        {cs.stat}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col p-5 sm:p-8">
                                <div className="space-y-4 mb-6">
                                    <h3 className="text-2xl font-bold text-[#121212] group-hover:text-[#FF5400] transition-colors leading-tight">
                                        {cs.title}
                                    </h3>
                                    <p className="text-[#6B6B6B] text-sm leading-relaxed line-clamp-3">{cs.desc}</p>
                                </div>
                                <div className="mt-auto pt-6 border-t border-[#E2D9CF] flex items-center justify-between">
                                    <div className="flex -space-x-2 overflow-hidden">
                                        {cs.initials.map((init) => (
                                            <div key={init} className="inline-block h-8 w-8 rounded-full bg-[#EFE7DF] ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-[#6B6B6B]">
                                                {init}
                                            </div>
                                        ))}
                                    </div>
                                    <button className="group/btn flex items-center gap-2 text-sm font-bold text-[#121212] hover:text-[#FF5400] transition-colors">
                                        View Case Study
                                        <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover/btn:translate-x-1">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4">
                <div className="max-w-[1280px] mx-auto">
                    <div className="relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#FF5400] via-[#E64A00] to-[#FF5400] px-6 py-12 sm:py-16 md:px-20 md:py-24 text-center shadow-2xl shadow-[#FF5400]/20">
                        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl mix-blend-overlay" />
                        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-[80px]" />
                        <div className="relative z-10 mx-auto max-w-3xl space-y-8">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                                Ready to write your <br />
                                <span className="text-[#FFE3D6]">success story?</span>
                            </h2>
                            <p className="text-xl text-white/90 font-light max-w-2xl mx-auto">
                                Let&apos;s collaborate to build digital solutions that propel your business forward. Join 500+ happy clients.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
                                <Link href="/contact" className="w-full sm:w-auto rounded-xl bg-white px-10 py-4 text-lg font-bold text-[#FF5400] shadow-xl hover:bg-[#FFF8F2] hover:scale-105 transition-all duration-300">
                                    Start a Project
                                </Link>
                                <Link href="/services" className="w-full sm:w-auto rounded-xl border border-white/30 bg-white/5 px-10 py-4 text-lg font-bold text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300">
                                    View Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
