"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const serviceCategories = [
    {
        title: "DEVELOPMENT",
        items: [
            { name: "Web Development", icon: "language" },
            { name: "IT Solutions", icon: "settings_suggest" },
            { name: "Blog", icon: "edit_note" },
            { name: "Website Designing and Support", icon: "design_services" },
        ],
    },
    {
        title: "BRAND DEVELOPMENT",
        items: [
            { name: "Branding and Promotion", icon: "campaign" },
            { name: "Brand Management", icon: "workspace_premium" },
        ],
    },
    {
        title: "LISTING",
        items: [
            { name: "Tender Listing", icon: "assignment" },
            { name: "Product Listing", icon: "inventory_2" },
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
        title: "SUPPORT",
        items: [
            { name: "Voice and Chat Support", icon: "support_agent" },
            { name: "E-Commerce Chat & Voice Support", icon: "headset_mic" },
        ],
    },
    {
        title: "SEO",
        items: [
            { name: "SEO", icon: "search" },
            { name: "Off-Page/On-Page SEO", icon: "link" },
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
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services", hasDropdown: true },
    { name: "Industries We Serve", href: "/industries" },
    { name: "Case Study", href: "/case-study" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-[#FFF8F2]/90 backdrop-blur-md border-b border-[#E2D9CF]">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group flex-shrink-0 -my-2">
                        <img
                            src="/Prominentlogo.png"
                            alt="Prominent Digitech Global"
                            className="h-16 sm:h-20 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navLinks.map((link) =>
                            link.hasDropdown ? (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => setServicesOpen(true)}
                                    onMouseLeave={() => setServicesOpen(false)}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-[#3A3A3A] hover:text-[#FF5400] text-sm font-semibold transition-colors flex items-center gap-1"
                                    >
                                        {link.name}
                                        <span
                                            className={`material-symbols-outlined text-[16px] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                                                }`}
                                        >
                                            keyboard_arrow_down
                                        </span>
                                    </Link>

                                    <AnimatePresence>
                                        {servicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 8 }}
                                                transition={{ duration: 0.2 }}
                                                className="fixed top-[64px] sm:top-[80px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1100px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-[#E2D9CF] p-5 xl:p-8"
                                            >
                                                <div className="grid grid-cols-5 gap-6 xl:gap-8">
                                                    {/* Column 1: Development + Brand Dev + Listing */}
                                                    <div className="space-y-5">
                                                        {serviceCategories.slice(0, 3).map((cat) => (
                                                            <div key={cat.title}>
                                                                <h4 className="text-[#FF5400] font-bold text-xs uppercase tracking-wider mb-2">
                                                                    {cat.title}
                                                                </h4>
                                                                <ul className="space-y-1">
                                                                    {cat.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href="/services"
                                                                                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium text-[#3A3A3A] hover:bg-[#FFE3D6] hover:text-[#FF5400] transition-colors"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[14px] text-[#FF5400]">
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
                                                                <h4 className="text-[#FF5400] font-bold text-xs uppercase tracking-wider mb-2">
                                                                    {cat.title}
                                                                </h4>
                                                                <ul className="space-y-1">
                                                                    {cat.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href="/services"
                                                                                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium text-[#3A3A3A] hover:bg-[#FFE3D6] hover:text-[#FF5400] transition-colors"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[14px] text-[#FF5400]">
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
                                                        <div className="mt-5">
                                                            {serviceCategories.slice(5, 6).map((cat) => (
                                                                <div key={cat.title}>
                                                                    <h4 className="text-[#FF5400] font-bold text-xs uppercase tracking-wider mb-2">
                                                                        {cat.title}
                                                                    </h4>
                                                                    <ul className="space-y-1">
                                                                        {cat.items.map((item) => (
                                                                            <li key={item.name}>
                                                                                <Link
                                                                                    href="/services"
                                                                                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium text-[#3A3A3A] hover:bg-[#FFE3D6] hover:text-[#FF5400] transition-colors"
                                                                                >
                                                                                    <span className="material-symbols-outlined text-[14px] text-[#FF5400]">
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
                                                                <h4 className="text-[#FF5400] font-bold text-xs uppercase tracking-wider mb-2">
                                                                    {cat.title}
                                                                </h4>
                                                                <ul className="space-y-1">
                                                                    {cat.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href="/services"
                                                                                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium text-[#3A3A3A] hover:bg-[#FFE3D6] hover:text-[#FF5400] transition-colors"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[14px] text-[#FF5400]">
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
                                                                <h4 className="text-[#FF5400] font-bold text-xs uppercase tracking-wider mb-2">
                                                                    {cat.title}
                                                                </h4>
                                                                <ul className="space-y-1">
                                                                    {cat.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href="/services"
                                                                                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium text-[#3A3A3A] hover:bg-[#FFE3D6] hover:text-[#FF5400] transition-colors"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[14px] text-[#FF5400]">
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
                                                    <div>
                                                        {serviceCategories.slice(7, 8).map((cat) => (
                                                            <div key={cat.title}>
                                                                <h4 className="text-[#FF5400] font-bold text-xs uppercase tracking-wider mb-2">
                                                                    {cat.title}
                                                                </h4>
                                                                <ul className="space-y-1">
                                                                    {cat.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href="/services"
                                                                                className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium text-[#3A3A3A] hover:bg-[#FFE3D6] hover:text-[#FF5400] transition-colors"
                                                                            >
                                                                                <span className="material-symbols-outlined text-[14px] text-[#FF5400]">
                                                                                    {item.icon}
                                                                                </span>
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                        <div className="mt-6 pt-4 border-t border-[#E2D9CF]">
                                                            <Link
                                                                href="/contact"
                                                                className="flex items-center gap-2 text-sm font-bold text-[#3A3A3A] hover:text-[#FF5400] transition-colors"
                                                            >
                                                                Free Consultation
                                                                <span className="material-symbols-outlined text-[16px]">
                                                                    chevron_right
                                                                </span>
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
                                    className="text-[#3A3A3A] hover:text-[#FF5400] text-sm font-semibold transition-colors whitespace-nowrap"
                                >
                                    {link.name}
                                </Link>
                            )
                        )}
                    </nav>

                    {/* CTA + Contact */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <Link
                            href="/contact"
                            className="hidden sm:flex items-center gap-2 text-[#121212] text-sm font-semibold hover:text-[#FF5400] transition-colors"
                        >
                            <span className="material-symbols-outlined text-[20px]">call</span>
                            <span>Contact</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="hidden sm:flex bg-[#FF5400] hover:bg-[#E64A00] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-xl shadow-[#FF5400]/20"
                        >
                            Get Proposal
                        </Link>
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden text-[#121212] p-2 hover:bg-[#EFE7DF] rounded-lg transition-colors"
                        >
                            <span className="material-symbols-outlined text-[28px]">
                                {mobileOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-t border-[#E2D9CF] overflow-hidden max-h-[80vh] overflow-y-auto"
                    >
                        <div className="px-5 py-4 space-y-1">
                            {navLinks.map((link) =>
                                link.hasDropdown ? (
                                    <div key={link.name}>
                                        <button
                                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                            className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-[#3A3A3A] hover:bg-[#FFE3D6] hover:text-[#FF5400] text-base font-semibold transition-colors"
                                        >
                                            {link.name}
                                            <span
                                                className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""
                                                    }`}
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
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="pl-4 pr-2 pb-2 space-y-4">
                                                        {serviceCategories.map((cat) => (
                                                            <div key={cat.title}>
                                                                <h4 className="text-[#FF5400] font-bold text-[10px] uppercase tracking-wider px-2 pt-2 pb-1">
                                                                    {cat.title}
                                                                </h4>
                                                                {cat.items.map((item) => (
                                                                    <Link
                                                                        key={item.name}
                                                                        href="/services"
                                                                        onClick={() => setMobileOpen(false)}
                                                                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-[#3A3A3A] hover:bg-[#FFE3D6] hover:text-[#FF5400] transition-colors"
                                                                    >
                                                                        <span className="material-symbols-outlined text-[14px] text-[#FF5400]">
                                                                            {item.icon}
                                                                        </span>
                                                                        {item.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        ))}
                                                        <div className="px-3 pt-2 pb-1 border-t border-[#E2D9CF]">
                                                            <Link
                                                                href="/contact"
                                                                onClick={() => setMobileOpen(false)}
                                                                className="flex items-center gap-2 text-sm font-bold text-[#3A3A3A] hover:text-[#FF5400] transition-colors py-2"
                                                            >
                                                                Free Consultation
                                                                <span className="material-symbols-outlined text-[16px]">
                                                                    chevron_right
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
                                        className="block px-4 py-3 rounded-xl text-[#3A3A3A] hover:bg-[#FFE3D6] hover:text-[#FF5400] text-base font-semibold transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                )
                            )}
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="block mt-3 bg-[#FF5400] text-white text-center px-6 py-3 rounded-full font-bold"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
