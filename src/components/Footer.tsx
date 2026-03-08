import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#0F0F0F] pt-20 pb-10">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-[#FF5400] text-white p-1.5 rounded-lg">
                                <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
                            </div>
                            <h3 className="text-xl font-extrabold text-white">Prominent Digitech</h3>
                        </div>
                        <p className="text-[#EFE7DF]/70 text-sm leading-relaxed mb-6 max-w-sm">
                            Full-service digital marketing agency driven by creativity, innovation, and results.
                            Your partner in sustainable growth and digital transformation.
                        </p>
                        <div className="flex gap-4">
                            <a
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#EFE7DF] hover:bg-[#FF5400] hover:text-white transition-all"
                                href="#"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#EFE7DF] hover:bg-[#FF5400] hover:text-white transition-all"
                                href="#"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#EFE7DF] hover:bg-[#FF5400] hover:text-white transition-all"
                                href="#"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
                        <ul className="space-y-4 text-sm text-[#EFE7DF]/60 font-medium">
                            <li>
                                <Link className="hover:text-[#FF5400] transition-colors" href="/services#seo">
                                    SEO Optimization
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#FF5400] transition-colors" href="/services#social-media-ads">
                                    Social Media
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#FF5400] transition-colors" href="/services#web-development">
                                    Web Development
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#FF5400] transition-colors" href="/services#google-ads">
                                    PPC Advertising
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
                        <ul className="space-y-4 text-sm text-[#EFE7DF]/60 font-medium">
                            <li>
                                <Link className="hover:text-[#FF5400] transition-colors" href="/about">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#FF5400] transition-colors" href="/case-study">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#FF5400] transition-colors" href="#">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link className="hover:text-[#FF5400] transition-colors" href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-4">
                        <h4 className="font-bold text-white mb-6 text-lg">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-[#EFE7DF]/60">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#FF5400] mt-0.5">mail</span>
                                <div>
                                    <span className="block font-semibold text-[#EFE7DF]">Email</span>
                                    prominentdigitechsolution@gmail.com
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#FF5400] mt-0.5">call</span>
                                <div>
                                    <span className="block font-semibold text-[#EFE7DF]">Phone</span>
                                    +91 83490-94764
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#FF5400] mt-0.5">location_on</span>
                                <div>
                                    <span className="block font-semibold text-[#EFE7DF]">Head Office</span>
                                    507 MR-5, Mahalaxmi Nagar, Indore, Madhya Pradesh
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#FF5400] mt-0.5">location_on</span>
                                <div>
                                    <span className="block font-semibold text-[#EFE7DF]">Branch Offices</span>
                                    Jabalpur, India &bull; California, USA
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[#EFE7DF]/40">
                        © 2025 Prominent Digitech Global. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-[#EFE7DF]/40">
                        <Link className="hover:text-[#FF5400]" href="#">
                            Privacy Policy
                        </Link>
                        <Link className="hover:text-[#FF5400]" href="#">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
