"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const serviceCategories = [
    {
        title: "DEVELOPMENT",
        items: [
            { name: "Web Development", icon: "language" },
            { name: "IT Solutions", icon: "settings_suggest" },
            { name: "Blog", icon: "edit_note" },
            { name: "Website Designing and Support", icon: "design_services" },
            { name: "Brand Development", icon: "architecture" },
            { name: "Branding and Promotion", icon: "campaign" },
            { name: "Brand Management", icon: "workspace_premium" },
        ],
    },
    {
        title: "DIGITAL MARKETING",
        items: [
            { name: "Digital Marketing", icon: "ads_click" },
            { name: "Location", icon: "location_on" },
            { name: "SMM", icon: "thumb_up" },
            { name: "SEM", icon: "manage_search" },
            { name: "SMO", icon: "groups" },
            { name: "Content Marketing", icon: "article" },
            { name: "Affiliate Marketing", icon: "handshake" },
        ],
    },
    {
        title: "ADS MARKETING",
        items: [
            { name: "PPC/CPC Ads", icon: "touch_app" },
            { name: "Google & YouTube Ads", icon: "smart_display" },
            { name: "Facebook & Instagram Ads", icon: "photo_camera" },
            { name: "Lead Generation", icon: "trending_up" },
            { name: "WhatsApp Marketing", icon: "chat" },
            { name: "Email Marketing", icon: "mail" },
        ],
    },
    {
        title: "SEO",
        items: [
            { name: "SEO", icon: "search" },
            { name: "Off-Page / On-Page SEO", icon: "link" },
            { name: "Technical SEO", icon: "code" },
            { name: "E-Commerce SEO", icon: "shopping_cart" },
            { name: "International SEO", icon: "public" },
        ],
    },
    {
        title: "E-COMMERCE",
        items: [
            { name: "E-Commerce Product Listing", icon: "inventory" },
            { name: "E-Commerce Advertising", icon: "storefront" },
            { name: "E-Commerce Chat & Voice Support", icon: "headphones" },
        ],
    },
    {
        title: "LISHTING",
        items: [
            { name: "Tender Listing", icon: "assignment" },
            { name: "Product Listing", icon: "inventory_2" },
        ],
    },
    {
        title: "SUPPORT",
        items: [
            { name: "Voice and Chat Support", icon: "support_agent" },
            { name: "E-Commerce Chat & Voice Support", icon: "headset_mic" },
        ],
    },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services", hasDropdown: true },
    { name: "Industries We Serve", href: "/industries" },
    { name: "Case Study", href: "/case-study" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "0px";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        }
    }, [mobileOpen]);

    return (
        <header className="fixed top-0 inset-x-0 z-50 w-full bg-[#FFF4EA] border-b border-[#E2D9CF] shadow-sm transition-all duration-300">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-20 sm:h-24 transition-all duration-300">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group flex-shrink-0 -my-4 sm:-my-6 z-10">
                        <img
                            src="/Prominentlogo.png"
                            alt="Prominent Digitech Global"
                            className="h-32 sm:h-40 lg:h-44 w-auto object-contain scale-[1.15] transform origin-left transition-transform duration-500 group-hover:scale-[1.2] drop-shadow-sm"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
                        {navLinks.map((link) =>
                            link.hasDropdown ? (
                                <div
                                    key={link.name}
                                    className="relative group/nav"
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <Link
                                        href={link.href}
                                        className={`relative text-[15px] font-bold tracking-tight transition-colors flex items-center gap-1 py-8 ${pathname === link.href ? "text-[#FF5400]" : "text-[#1A1A1A] hover:text-[#FF5400]"}`}
                                    >
                                        {link.name}
                                        <span
                                            className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${(servicesOpen || (pathname === link.href)) ? "text-[#FF5400]" : ""} ${servicesOpen ? "rotate-180" : ""}`}
                                        >
                                            keyboard_arrow_down
                                        </span>
                                        <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF5400] to-[#E64A00] rounded-t-full origin-left transition-transform duration-300 ease-out ${(servicesOpen || pathname === link.href) ? "scale-x-100" : "scale-x-0"}`} />
                                    </Link>

                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                                className="absolute top-full right-0 lg:left-1/2 lg:-translate-x-1/2 mt-2 w-[95vw] max-w-[1100px] bg-[#FFF4EA] rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-[#E2D9CF] p-6 xl:p-8 overflow-hidden"
                                                style={{ backgroundColor: '#FFF4EA', opacity: 1 }}
                                            >
                                                <div className="grid grid-cols-5 gap-6 xl:gap-8 relative z-10">
                                                    {/* Column 1: Development + Brand Dev + Listing */}
                                                    <div className="space-y-6">
                                                        {serviceCategories.slice(0, 3).map((cat) => (
                                                            <div key={cat.title}>
                                                                <h4 className="text-[#FF5400] font-black text-[10px] uppercase tracking-[0.2em] mb-3 opacity-90">
                                                                    {cat.title}
                                                                </h4>
                                                                <ul className="space-y-1.5">
                                                                    {cat.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href="/services"
                                                                                className="group flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13px] font-semibold text-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#FF5400]/10 hover:to-transparent hover:text-[#FF5400] transition-colors"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[16px] text-[#FF5400]/70 group-hover:text-[#FF5400] transition-colors">
                                                                                    {item.icon}
                                                                                </span>
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Column 2: Digital Marketing */}
                                                    <div>
                                                        {serviceCategories.slice(3, 4).map((cat) => (
                                                            <div key={cat.title}>
                                                                <h4 className="text-[#FF5400] font-black text-[10px] uppercase tracking-[0.2em] mb-3 opacity-90">
                                                                    {cat.title}
                                                                </h4>
                                                                <ul className="space-y-1.5">
                                                                    {cat.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href="/services"
                                                                                className="group flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13px] font-semibold text-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#FF5400]/10 hover:to-transparent hover:text-[#FF5400] transition-colors"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[16px] text-[#FF5400]/70 group-hover:text-[#FF5400] transition-colors">
                                                                                    {item.icon}
                                                                                </span>
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                        {/* Support below Digital Marketing */}
                                                        <div className="mt-6">
                                                            {serviceCategories.slice(5, 6).map((cat) => (
                                                                <div key={cat.title}>
                                                                    <h4 className="text-[#FF5400] font-black text-[10px] uppercase tracking-[0.2em] mb-3 opacity-90">
                                                                        {cat.title}
                                                                    </h4>
                                                                    <ul className="space-y-1.5">
                                                                        {cat.items.map((item) => (
                                                                            <li key={item.name}>
                                                                                <Link
                                                                                    href="/services"
                                                                                    className="group flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13px] font-semibold text-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#FF5400]/10 hover:to-transparent hover:text-[#FF5400] transition-colors"
                                                                                >
                                                                                    <span className="material-symbols-outlined text-[16px] text-[#FF5400]/70 group-hover:text-[#FF5400] transition-colors">
                                                                                        {item.icon}
                                                                                    </span>
                                                                                    {item.name}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Column 3: Ads Marketing */}
                                                    <div>
                                                        {serviceCategories.slice(4, 5).map((cat) => (
                                                            <div key={cat.title}>
                                                                <h4 className="text-[#FF5400] font-black text-[10px] uppercase tracking-[0.2em] mb-3 opacity-90">
                                                                    {cat.title}
                                                                </h4>
                                                                <ul className="space-y-1.5">
                                                                    {cat.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href="/services"
                                                                                className="group flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13px] font-semibold text-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#FF5400]/10 hover:to-transparent hover:text-[#FF5400] transition-colors"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[16px] text-[#FF5400]/70 group-hover:text-[#FF5400] transition-colors">
                                                                                    {item.icon}
                                                                                </span>
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Column 4: SEO */}
                                                    <div>
                                                        {serviceCategories.slice(6, 7).map((cat) => (
                                                            <div key={cat.title}>
                                                                <h4 className="text-[#FF5400] font-black text-[10px] uppercase tracking-[0.2em] mb-3 opacity-90">
                                                                    {cat.title}
                                                                </h4>
                                                                <ul className="space-y-1.5">
                                                                    {cat.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href="/services"
                                                                                className="group flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13px] font-semibold text-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#FF5400]/10 hover:to-transparent hover:text-[#FF5400] transition-colors"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[16px] text-[#FF5400]/70 group-hover:text-[#FF5400] transition-colors">
                                                                                    {item.icon}
                                                                                </span>
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Column 5: E-Commerce + Free Consultation */}
                                                    <div className="flex flex-col h-full">
                                                        {serviceCategories.slice(7, 8).map((cat) => (
                                                            <div key={cat.title}>
                                                                <h4 className="text-[#FF5400] font-black text-[10px] uppercase tracking-[0.2em] mb-3 opacity-90">
                                                                    {cat.title}
                                                                </h4>
                                                                <ul className="space-y-1.5">
                                                                    {cat.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href="/services"
                                                                                className="group flex items-center gap-2.5 px-3 py-2 rounded-xl text-[13px] font-semibold text-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#FF5400]/10 hover:to-transparent hover:text-[#FF5400] transition-colors"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[16px] text-[#FF5400]/70 group-hover:text-[#FF5400] transition-colors">
                                                                                    {item.icon}
                                                                                </span>
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}

                                                        <div className="mt-auto pt-6">
                                                            <Link
                                                                href="/contact"
                                                                className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-black text-white overflow-hidden shadow-lg"
                                                            >
                                                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5400]/0 via-[#FF5400]/10 to-[#FF5400]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                                                <div>
                                                                    <div className="text-[10px] text-[#EFE7DF]/60 font-bold uppercase tracking-wider mb-1">Get Started</div>
                                                                    <div className="text-sm font-bold">Free Consultation</div>
                                                                </div>
                                                                <div className="w-8 h-8 rounded-full bg-[#FF5400] flex items-center justify-center group-hover:scale-110 transition-transform">
                                                                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative group/nav py-8"
                                >
                                    <span className={`text-[15px] font-bold tracking-tight transition-colors ${pathname === link.href ? "text-[#FF5400]" : "text-[#1A1A1A] group-hover/nav:text-[#FF5400]"}`}>
                                        {link.name}
                                    </span>
                                    <span className={`absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#FF5400] to-[#E64A00] rounded-t-full transition-transform duration-300 ease-out ${pathname === link.href ? "scale-x-100" : "scale-x-0 origin-right group-hover/nav:scale-x-100 group-hover/nav:origin-left"}`} />
                                </Link>
                            )
                        )}
                    </nav>

                    {/* CTA + Contact */}
                    <div className="flex items-center gap-3 sm:gap-5 z-20">
                        <Link
                            href="/contact"
                            className="hidden sm:inline-flex relative items-center justify-center gap-2 group overflow-hidden rounded-full bg-[#1A1A1A] px-6 py-3 text-white shadow-xl shadow-black/10 transition-all hover:bg-black hover:shadow-[#FF5400]/20 hover:shadow-2xl hover:-translate-y-0.5"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FF5400] to-[#E64A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="material-symbols-outlined text-[20px] relative z-10 transition-transform group-hover:scale-110 group-hover:rotate-[-10deg]">call</span>
                            <span className="text-sm font-bold tracking-wide relative z-10">Reach Us</span>
                        </Link>
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden relative z-50 p-2 text-[#1A1A1A] hover:text-[#FF5400] transition-colors"
                        >
                            <span className="material-symbols-outlined text-[32px]">
                                {mobileOpen ? "close" : "sort"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="lg:hidden absolute top-full left-0 w-full bg-[#FFF4EA] border-t border-[#E2D9CF] shadow-2xl overflow-hidden z-[45]"
                    >
                        <div className="px-5 py-8 space-y-2 relative z-10 max-h-[85vh] overflow-y-auto">
                            {navLinks.map((link) =>
                                link.hasDropdown ? (
                                    <div key={link.name} className="relative z-20">
                                        <button
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className={`flex items-center justify-between w-full px-5 py-3.5 rounded-2xl text-[15px] font-bold transition-all duration-200 ${mobileServicesOpen ? "bg-[#FF5400] text-white shadow-lg" : pathname === link.href ? "bg-[#FF5400]/5 text-[#FF5400]" : "text-[#1A1A1A] hover:bg-[#1A1A1A]/5"}`}
                                        >
                                            {link.name}
                                            <span
                                                className={`material-symbols-outlined text-[20px] transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                                            >
                                                keyboard_arrow_down
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {mobileServicesOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden bg-[#1A1A1A]/[0.02] rounded-2xl mt-1"
                                                >
                                                    <div className="p-4 space-y-6">
                                                        {serviceCategories.map((cat) => (
                                                            <div key={cat.title}>
                                                                <h4 className="text-[#FF5400] font-black text-[10px] uppercase tracking-[0.2em] px-2 mb-3 opacity-90">
                                                                    {cat.title}
                                                                </h4>
                                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 px-1">
                                                                    {cat.items.map((item) => (
                                                                        <Link
                                                                            key={item.name}
                                                                            href="/services"
                                                                            onClick={() => setMobileOpen(false)}
                                                                            className="flex items-center gap-3 px-3 py-2 rounded-xl text-[13px] font-semibold text-[#1A1A1A]/80 hover:bg-[#FF5400]/5 hover:text-[#FF5400] transition-all"
                                                                        >
                                                                            <span className="material-symbols-outlined text-[18px] text-[#FF5400]/70">
                                                                                {item.icon}
                                                                            </span>
                                                                            {item.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div className="pt-4 border-t border-black/5">
                                                            <Link
                                                                href="/contact"
                                                                onClick={() => setMobileOpen(false)}
                                                                className="flex items-center justify-between w-full p-4 rounded-xl bg-gradient-to-br from-[#1A1A1A] to-black text-white"
                                                            >
                                                                <span className="text-[13px] font-bold">Free Consultation</span>
                                                                <span className="material-symbols-outlined text-[18px] text-[#FF5400]">
                                                                    arrow_forward
                                                                </span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`block px-5 py-3.5 rounded-2xl text-[15px] font-bold transition-colors ${pathname === link.href ? "bg-[#FF5400]/5 text-[#FF5400]" : "text-[#1A1A1A] hover:bg-[#1A1A1A]/5"}`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            )}
                            <div className="pt-4 mt-2">
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#FF5400] to-[#E64A00] text-white px-6 py-4 rounded-2xl font-bold shadow-xl shadow-[#FF5400]/20"
                                >
                                    <span className="material-symbols-outlined text-[20px]">call</span>
                                    Call Us Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
