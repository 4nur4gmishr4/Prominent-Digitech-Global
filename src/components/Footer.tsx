import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#0F0F0F] pt-20 pb-10">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 items-start relative z-10">
                    {/* Brand */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-4 lg:gap-0">
                        <Link href="/" className="mb-0 lg:mb-8 block relative flex-shrink-0 w-[120px] sm:w-[150px] lg:w-full lg:-ml-4">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF5400]/10 to-transparent blur-2xl -z-10 rounded-full" />
                            <Image
                                src="/Prominentloaderlogo.png"
                                alt="Prominent Digitech Global"
                                width={280}
                                height={80}
                                className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] h-auto object-contain object-left drop-shadow-xl"
                            />
                        </Link>

                        {/* Social Media Icons - Horizontally below logo */}
                        <div className="flex flex-row flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                            {/* Facebook */}
                            <a
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#EFE7DF] hover:bg-[#FF5400] hover:border-[#FF5400] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5400]/20 hover:-translate-y-1"
                                href="https://www.facebook.com/prominentdigitechsolutionassociates"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            {/* X (Twitter) */}
                            <a
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#EFE7DF] hover:bg-[#FF5400] hover:border-[#FF5400] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5400]/20 hover:-translate-y-1"
                                href="https://x.com/Prominent_dts"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#EFE7DF] hover:bg-[#FF5400] hover:border-[#FF5400] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5400]/20 hover:-translate-y-1"
                                href="https://www.instagram.com/prominentglobalofficial?igsh=MTlnamVlM2N6ZjVheg=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#EFE7DF] hover:bg-[#FF5400] hover:border-[#FF5400] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5400]/20 hover:-translate-y-1"
                                href="https://www.youtube.com/@prominentdigitech-neweraof8569"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 00-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.945 24 12 24 12s0-3.945-.402-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#EFE7DF] hover:bg-[#FF5400] hover:border-[#FF5400] hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5400]/20 hover:-translate-y-1"
                                href="https://www.linkedin.com/company/prominent-digitech-solution-associates"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                        </div>
                        <p className="text-[#EFE7DF]/70 text-xs sm:text-sm lg:text-base leading-relaxed mb-8 lg:mb-8 max-w-sm font-medium text-center lg:text-left">
                            Full-service digital marketing agency driven by creativity, innovation, and results.
                            Your partner in sustainable growth and digital transformation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 lg:col-span-8 gap-8 items-start">
                        {/* Reach Us (Address/Contact) */}
                        <div className="lg:col-span-4">
                            <h4 className="font-bold text-white mb-8 text-sm tracking-[0.2em] uppercase opacity-90">Reach Us</h4>
                            <ul className="space-y-6 text-sm sm:text-base text-[#EFE7DF]/60">
                                <li className="group flex items-start gap-4 hover:text-white transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5400] flex-shrink-0 group-hover:bg-[#FF5400] group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined text-[20px]">mail</span>
                                    </div>
                                    <div className="mt-1">
                                        <span className="block font-bold text-white mb-1 tracking-wide text-xs uppercase opacity-80">Email</span>
                                        prominentdigitechsolution@gmail.com
                                    </div>
                                </li>
                                <li className="group flex items-start gap-4 hover:text-white transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5400] flex-shrink-0 group-hover:bg-[#FF5400] group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined text-[20px]">call</span>
                                    </div>
                                    <div className="mt-1">
                                        <span className="block font-bold text-white mb-1 tracking-wide text-xs uppercase opacity-80">Phone</span>
                                        +91 83490-94764
                                    </div>
                                </li>
                                <li className="group flex items-start gap-4 hover:text-white transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5400] flex-shrink-0 group-hover:bg-[#FF5400] group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined text-[20px]">location_on</span>
                                    </div>
                                    <div className="mt-1">
                                        <span className="block font-bold text-white mb-1 tracking-wide text-xs uppercase opacity-80">Head Office</span>
                                        Office no:- 400, Plot, no:- 507, MR-5, Mahalaxmi Nagar, Indore, Madhya Pradesh 452010
                                    </div>
                                </li>
                                <li className="group flex items-start gap-4 hover:text-white transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5400] flex-shrink-0 group-hover:bg-[#FF5400] group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined text-[20px]">business</span>
                                    </div>
                                    <div className="mt-1">
                                        <span className="block font-bold text-white mb-1 tracking-wide text-xs uppercase opacity-80">1st Branch Office</span>
                                        Jabalpur , India
                                    </div>
                                </li>
                                <li className="group flex items-start gap-4 hover:text-white transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5400] flex-shrink-0 group-hover:bg-[#FF5400] group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined text-[20px]">business</span>
                                    </div>
                                    <div className="mt-1">
                                        <span className="block font-bold text-white mb-1 tracking-wide text-xs uppercase opacity-80">2nd Branch Office</span>
                                        California, USA
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Services, Elevate Box, Company Layout */}
                        <div className="lg:col-span-4 flex flex-col justify-between h-full gap-10">
                            <div className="grid grid-cols-2 gap-8">
                                {/* Services */}
                                <div>
                                    <h4 className="font-bold text-white mb-8 text-sm tracking-[0.2em] uppercase opacity-90">Services</h4>
                                    <ul className="space-y-5 text-base text-[#EFE7DF]/60 font-medium tracking-wide">
                                        <li>
                                            <Link className="group flex items-center gap-3 hover:text-white transition-colors" href="/services#seo">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                                                <span className="-translate-x-3 group-hover:translate-x-0 transition-transform duration-300">SEO Optimization</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="group flex items-center gap-3 hover:text-white transition-colors" href="/services#social-media-ads">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                                                <span className="-translate-x-3 group-hover:translate-x-0 transition-transform duration-300">Social Media</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="group flex items-center gap-3 hover:text-white transition-colors" href="/services#web-development">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                                                <span className="-translate-x-3 group-hover:translate-x-0 transition-transform duration-300">Web Development</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="group flex items-center gap-3 hover:text-white transition-colors" href="/services#google-ads">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                                                <span className="-translate-x-3 group-hover:translate-x-0 transition-transform duration-300">PPC Advertising</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* Company */}
                                <div>
                                    <h4 className="font-bold text-white mb-8 text-sm tracking-[0.2em] uppercase opacity-90">Company</h4>
                                    <ul className="space-y-5 text-base text-[#EFE7DF]/60 font-medium tracking-wide">
                                        <li>
                                            <Link className="group flex items-center gap-3 hover:text-white transition-colors" href="/about">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                                                <span className="-translate-x-3 group-hover:translate-x-0 transition-transform duration-300">About Us</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="group flex items-center gap-3 hover:text-white transition-colors" href="/case-study">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                                                <span className="-translate-x-3 group-hover:translate-x-0 transition-transform duration-300">Case Studies</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="group flex items-center gap-3 hover:text-white transition-colors" href="/industries">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                                                <span className="-translate-x-3 group-hover:translate-x-0 transition-transform duration-300">Industries</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="group flex items-center gap-3 hover:text-white transition-colors" href="/contact">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5400] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
                                                <span className="-translate-x-3 group-hover:translate-x-0 transition-transform duration-300">Contact</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Premium Space Filler Box (Centered conceptually between services/company via vertical flow) */}
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0a0a0a] border border-white/10 p-6 sm:p-8 backdrop-blur-md group hover:border-[#FF5400]/40 transition-colors duration-500">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5400]/20 blur-[50px] group-hover:bg-[#FF5400]/40 transition-colors duration-500" />
                                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>Ready to Elevate?</h4>
                                <p className="text-[#EFE7DF]/60 text-sm mb-6 leading-relaxed">Join the world&apos;s most innovative brands and transform your digital presence.</p>
                                <Link href="/contact" className="inline-flex items-center justify-center w-full gap-2 bg-[#FF5400] hover:bg-[#E64A00] text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-lg group-hover:shadow-[#FF5400]/25">
                                    Start Your Project
                                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#EFE7DF]/40">
                        © 2025 Prominent Digitech Global. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
