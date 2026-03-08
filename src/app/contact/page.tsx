"use client";

import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative bg-[#1A1A1A] py-16 sm:py-24 lg:py-32 overflow-hidden clip-slant">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#FF5400]/20 via-[#1A1A1A] to-[#1A1A1A]" />
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FF5400]/15 rounded-full blur-[100px]" />
                <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-[#FF5400] text-sm font-bold tracking-wide mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#FF5400] animate-pulse" />
                        GET IN TOUCH
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 sm:mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                        Let&apos;s <span className="text-[#FF5400]">Connect</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-[#EFE7DF]/80 max-w-3xl mx-auto font-medium leading-relaxed pb-6 sm:pb-0">
                        Ready to elevate your digital game? Reach out and let&apos;s start your success story.
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-[#F6F1EB] py-14 sm:py-20">
                <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#121212] mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                                Contact Information
                            </h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-[#FFE3D6] rounded-2xl flex items-center justify-center text-[#FF5400] flex-shrink-0">
                                        <span className="material-symbols-outlined text-[28px]">mail</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#121212] mb-1">Email</h4>
                                        <a href="mailto:prominentdigitechsolution@gmail.com" className="text-[#6B6B6B] hover:text-[#FF5400] transition-colors">
                                            prominentdigitechsolution@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-[#FFE3D6] rounded-2xl flex items-center justify-center text-[#FF5400] flex-shrink-0">
                                        <span className="material-symbols-outlined text-[28px]">call</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#121212] mb-1">Phone</h4>
                                        <a href="tel:+918349094764" className="text-[#6B6B6B] hover:text-[#FF5400] transition-colors">
                                            +91 83490-94764
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-[#FFE3D6] rounded-2xl flex items-center justify-center text-[#FF5400] flex-shrink-0">
                                        <span className="material-symbols-outlined text-[28px]">location_on</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#121212] mb-1">Head Office</h4>
                                        <p className="text-[#6B6B6B]">507 MR-5, Mahalaxmi Nagar, Indore, Madhya Pradesh</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 bg-[#FFE3D6] rounded-2xl flex items-center justify-center text-[#FF5400] flex-shrink-0">
                                        <span className="material-symbols-outlined text-[28px]">apartment</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#121212] mb-1">Branch Offices</h4>
                                        <p className="text-[#6B6B6B]">Jabalpur, India &bull; California, USA</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="flex flex-wrap gap-4 mt-10">
                                <a href="tel:+918349094764" className="bg-[#FF5400] hover:bg-[#E64A00] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-[#FF5400]/25 flex items-center gap-2">
                                    <span className="material-symbols-outlined">call</span>
                                    Call Us
                                </a>
                                <a href="https://wa.me/918349094764" target="_blank" rel="noopener noreferrer" className="bg-[#121212] hover:bg-[#FF5400] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                                    WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E2D9CF] shadow-[0_10px_40px_-10px_rgba(255,84,0,0.06)]">
                                <h3 className="text-2xl font-bold text-[#121212] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                                    Send Us a Message
                                </h3>
                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-[#121212] mb-2">
                                                First Name
                                            </label>
                                            <input
                                                id="firstName"
                                                type="text"
                                                placeholder="John"
                                                className="w-full px-4 py-3 rounded-xl border border-[#E2D9CF] bg-[#FFF8F2] text-[#121212] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#FF5400] focus:ring-2 focus:ring-[#FF5400]/20 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-semibold text-[#121212] mb-2">
                                                Last Name
                                            </label>
                                            <input
                                                id="lastName"
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full px-4 py-3 rounded-xl border border-[#E2D9CF] bg-[#FFF8F2] text-[#121212] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#FF5400] focus:ring-2 focus:ring-[#FF5400]/20 transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-[#121212] mb-2">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-3 rounded-xl border border-[#E2D9CF] bg-[#FFF8F2] text-[#121212] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#FF5400] focus:ring-2 focus:ring-[#FF5400]/20 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-[#121212] mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full px-4 py-3 rounded-xl border border-[#E2D9CF] bg-[#FFF8F2] text-[#121212] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#FF5400] focus:ring-2 focus:ring-[#FF5400]/20 transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-semibold text-[#121212] mb-2">
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            className="w-full px-4 py-3 rounded-xl border border-[#E2D9CF] bg-[#FFF8F2] text-[#121212] focus:outline-none focus:border-[#FF5400] focus:ring-2 focus:ring-[#FF5400]/20 transition-all"
                                        >
                                            <option value="">Select a service</option>
                                            <option>SEO</option>
                                            <option>Google Ads</option>
                                            <option>Social Media Marketing</option>
                                            <option>Web Development</option>
                                            <option>Mobile App</option>
                                            <option>E-Commerce</option>
                                            <option>Branding</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-[#121212] mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            placeholder="Tell us about your project..."
                                            className="w-full px-4 py-3 rounded-xl border border-[#E2D9CF] bg-[#FFF8F2] text-[#121212] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:border-[#FF5400] focus:ring-2 focus:ring-[#FF5400]/20 transition-all resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-[#FF5400] hover:bg-[#E64A00] text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-[#FF5400]/25"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
