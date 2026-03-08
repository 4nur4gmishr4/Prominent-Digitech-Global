"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const servicesList = [
  { name: "SEO", icon: "manage_search" },
  { name: "Google Ads", icon: "ads_click" },
  { name: "YouTube Ads", icon: "smart_display" },
  { name: "Facebook Ads", icon: "thumb_up" },
  { name: "Instagram Ads", icon: "photo_camera" },
  { name: "Email Management", icon: "mail" },
  { name: "Snapchat Ads", icon: "perm_media" },
  { name: "Social Media Ads", icon: "campaign" },
  { name: "X Ads", icon: "tag" },
  { name: "Google Shopping", icon: "shopping_cart" },
  { name: "Lead Generation", icon: "trending_up" },
  { name: "Web Development", icon: "terminal" },
  { name: "Amazon Marketing", icon: "store" },
  { name: "Motion Ads", icon: "movie" },
  { name: "LinkedIn Ads", icon: "work" },
  { name: "Wikipedia Services", icon: "menu_book" },
  { name: "E-Commerce", icon: "storefront" },
  { name: "Mobile App", icon: "smartphone" },
  { name: "Quora Marketing", icon: "question_answer" },
  { name: "Creative Strategy", icon: "palette" },
];

const industries = [
  { name: "Healthcare", icon: "local_hospital" },
  { name: "Real Estate", icon: "apartment" },
  { name: "E-Commerce", icon: "shopping_bag" },
  { name: "Education", icon: "school" },
  { name: "Finance & Banking", icon: "account_balance" },
  { name: "Travel & Hospitality", icon: "flight" },
  { name: "Food & Beverage", icon: "restaurant" },
  { name: "Technology", icon: "computer" },
];

const whyChooseUs = [
  { title: "Proven Track Record", desc: "Successful campaigns across industries worldwide.", icon: "verified" },
  { title: "Tailor-Made Strategies", desc: "Custom solutions designed for your unique business goals.", icon: "tune" },
  { title: "Transparent Reporting", desc: "Clear, honest insights into every campaign.", icon: "analytics" },
  { title: "Measurable Results", desc: "Data-driven outcomes you can see and measure.", icon: "monitoring" },
  { title: "Passionate Team", desc: "A growth-focused team dedicated to your success.", icon: "group" },
];

const howWeOperate = [
  { title: "Globally Distributed Team", desc: "Professionals across multiple time zones for round-the-clock productivity.", icon: "public" },
  { title: "Advanced Communication", desc: "Modern collaboration and project management platforms.", icon: "forum" },
  { title: "Rotational Shifts", desc: "Our team works in shifts to ensure constant productivity.", icon: "schedule" },
  { title: "Proactive Monitoring", desc: "Systems monitored continuously using cutting-edge technology.", icon: "visibility" },
  { title: "Dedicated Support", desc: "Customer queries handled by a dedicated support team.", icon: "support_agent" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#1A1A1A] py-16 sm:py-24 lg:py-36 overflow-hidden clip-slant">
        <div
          className="absolute inset-0 z-0 opacity-20 mix-blend-soft-light"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF5400' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#FF5400]/20 via-[#1A1A1A] to-[#1A1A1A] animate-gradient-xy" />
        <div className="absolute -bottom-32 -left-32 w-64 sm:w-96 h-64 sm:h-96 bg-[#FF5400]/15 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 sm:mb-8 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Transforming Good Businesses <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5400] via-[#FF7A33] to-[#FF5400]">
              into GREAT Success Stories!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base sm:text-lg md:text-xl text-[#EFE7DF]/80 max-w-3xl mx-auto font-medium leading-relaxed mb-8 sm:mb-10 px-2"
          >
            At Prominent Digitech Global, we are your long-term growth partner, dedicated to
            aligning your brand&apos;s purpose with your target market. By identifying and engaging with
            your Ideal Customer Profile (ICP), we craft data-driven marketing campaigns that
            resonate deeply with your audience, drive meaningful connections, build brand loyalty, and
            fuel sustainable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0 pb-8 sm:pb-0"
          >
            <Link
              href="/services"
              className="bg-[#FF5400] hover:bg-[#E64A00] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all shadow-lg shadow-[#FF5400]/25 text-center"
            >
              View All Services
            </Link>
            <Link
              href="/about"
              className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all text-center"
            >
              Our Methodology
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PROMINENT EDGE */}
      <section className="bg-[#FFF8F2] py-14 sm:py-20">
        <div className="max-w-[1000px] mx-auto px-5 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              The Prominent Edge <span className="text-[#FF5400]">Disruptive Difference</span>
            </h2>
            <p className="text-[#3A3A3A] text-base sm:text-lg leading-relaxed mb-6">
              At Prominent Digitech Global, we don&apos;t just follow trends, we redefine them. Our
              disruptive approach to digital marketing goes beyond conventional strategies, ensuring
              your brand stands out in a crowded marketplace. By blending innovation, data-driven
              insights, and deep audience connection, we craft campaigns that drive real impact,
              sustainable growth, and long-term success.
            </p>
            <p className="text-[#FF5400] font-bold text-base sm:text-lg italic">
              Experience the Prominent Difference, where disruption leads to domination.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAKE YOUR MARKETING IRRESISTIBLE */}
      <section className="bg-[#F6F1EB] py-14 sm:py-20">
        <div className="max-w-[1000px] mx-auto px-5 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212] mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Make Your Marketing Irresistible with{" "}
              <span className="text-[#FF5400]">Prominent Digitech Global</span>
            </h2>
            <p className="text-[#3A3A3A] text-base sm:text-lg leading-relaxed mb-4">
              In a world full of noise, we help your brand stand out. At Prominent Digitech
              Global, we craft compelling, data-driven marketing strategies that captivate your
              audience and drive real engagement.
            </p>
            <p className="text-[#3A3A3A] text-base sm:text-lg leading-relaxed mb-4">
              By aligning your brand&apos;s message with your ideal customers&apos; needs, we create
              campaigns that are not just seen but felt, remembered, and acted upon.
            </p>
            <p className="text-[#FF5400] font-bold text-base sm:text-lg">
              Let&apos;s transform your branding into an unstoppable force for growth!
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#FFF8F2] py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Our Services
            </h2>
            <p className="text-[#6B6B6B] text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to accelerate your business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {servicesList.map((service) => (
              <div
                key={service.name}
                className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E2D9CF] hover:border-[#FF5400] hover:shadow-lg transition-all duration-200 text-center cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-[#FFE3D6] rounded-lg sm:rounded-xl flex items-center justify-center text-[#FF5400] mb-3 sm:mb-4 group-hover:bg-[#FF5400] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px] sm:text-[24px]">{service.icon}</span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#121212] group-hover:text-[#FF5400] transition-colors">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-[#FF5400] hover:bg-[#E64A00] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#FF5400]/25"
            >
              Read More Our Services
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-[#F6F1EB] py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
              <span className="text-[#FF5400] text-sm font-bold uppercase tracking-wider">Who We Are</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212] mb-6 mt-2" style={{ fontFamily: "var(--font-heading)" }}>
                A Full-Service Digital Marketing Agency
              </h2>
              <p className="text-[#3A3A3A] text-base sm:text-lg leading-relaxed mb-8">
                Prominent Digitech Global is a full-service digital marketing agency driven by
                creativity, innovation, and results. We have a team of experienced professionals who
                work relentlessly to craft data-driven strategies tailored to your business needs.
              </p>
              <ul className="space-y-4">
                {[
                  "Boost website visibility and drive organic traffic",
                  "Build meaningful connections with audiences",
                  "Deliver engaging content that converts",
                  "Generate leads and increase ROI through advertising campaigns",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FFE3D6] text-[#FF5400] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="material-symbols-outlined text-[14px]">check</span>
                    </span>
                    <span className="text-[#3A3A3A] font-medium text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="relative">
              <div
                className="w-full aspect-[4/3] bg-[#EFE7DF] rounded-2xl overflow-hidden shadow-xl"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNbyITllJzt8-gQSeOJ3Ch8gdscCL4VAtGSrxkAiCP04mtUcnh6_UARfUqhVGfGqfR5wJucODh7anxeE61ZjiORSXLnppzelTSWY8fQxT18G6K8WSWBm2JnRu_j3Yo2_28PN_IJ79AAAS7XfMO77AKj6-IE7m9QmrlKNmxd4XCcLW5V_HQec5dxqQLAbOyixD9tCkc5gUSZfN4Ckw05NRURRa75FufF_gz6-JCcyE-sH97tHLbpcInJGyAhTGGMskkLIpQrR7TlFVJ')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 SERVICES */}
      <section className="bg-[#FFF8F2] py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              24/7 Services <span className="text-[#FF5400]">How We Operate</span>
            </h2>
            <p className="text-[#6B6B6B] text-base sm:text-lg max-w-2xl mx-auto">
              Our globally distributed team ensures your projects thrive around the clock.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {howWeOperate.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E2D9CF] hover:border-[#FF5400] hover:shadow-lg transition-all duration-200 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-[#FFE3D6] rounded-xl sm:rounded-2xl flex items-center justify-center text-[#FF5400] mb-3 sm:mb-4 group-hover:bg-[#FF5400] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[24px] sm:text-[28px]">{item.icon}</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#121212] mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed hidden sm:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#F6F1EB] py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#E2D9CF] hover:border-[#FF5400] hover:shadow-lg transition-all duration-200 text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto bg-[#FFE3D6] rounded-xl sm:rounded-2xl flex items-center justify-center text-[#FF5400] mb-3 sm:mb-4 group-hover:bg-[#FF5400] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[24px] sm:text-[28px]">{item.icon}</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#121212] mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed hidden sm:block">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="bg-[#1A1A1A] py-12 sm:py-16">
        <div className="max-w-[1000px] mx-auto px-5">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            {[
              { number: "100+", label: "Services & Features" },
              { number: "150+", label: "Happy Customers" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl sm:text-5xl font-black text-[#FF5400] mb-1 sm:mb-2">{stat.number}</h3>
                <p className="text-[#EFE7DF] text-xs sm:text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#FFF8F2] py-14 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#121212] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Industries We Serve
            </h2>
            <p className="text-[#6B6B6B] text-base sm:text-lg max-w-2xl mx-auto">
              We provide digital marketing solutions tailored to different market sectors, with strategies specific to each industry.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 border border-[#E2D9CF] hover:border-[#FF5400] hover:shadow-lg transition-all duration-200 text-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-[#FFE3D6] rounded-xl sm:rounded-2xl flex items-center justify-center text-[#FF5400] mb-3 sm:mb-4 group-hover:bg-[#FF5400] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[24px] sm:text-[32px]">{ind.icon}</span>
                </div>
                <h3 className="text-xs sm:text-base font-bold text-[#121212] group-hover:text-[#FF5400] transition-colors">
                  {ind.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 border-2 border-[#121212] hover:border-[#FF5400] hover:text-[#FF5400] text-[#121212] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all"
            >
              Explore All Industries
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-[#F6F1EB] py-14 sm:py-20">
        <div className="max-w-[900px] mx-auto px-5 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}>
            <span className="material-symbols-outlined text-[36px] sm:text-[48px] text-[#FF5400] mb-4 sm:mb-6">format_quote</span>
            <blockquote className="text-lg sm:text-xl md:text-2xl text-[#3A3A3A] leading-relaxed mb-6 sm:mb-8 italic">
              &ldquo;We have been working with Prominent Digitech Global for our digital marketing needs,
              and we could not be more satisfied with the results and the overall experience.
              The team is attentive, creative, and highly professional.
              We recommend their service to any business looking for a stronger digital presence.&rdquo;
            </blockquote>
            <div>
              <p className="text-[#121212] font-bold text-lg">Lebu Electric</p>
              <p className="text-[#6B6B6B] text-sm">Satisfied Client</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#FF5400] via-[#E64A00] to-[#FF5400] py-16 sm:py-24 px-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s Build Something Great Together
          </h2>
          <p className="text-white/90 text-base sm:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto font-medium">
            Ready to elevate your digital game? Contact Prominent Digitech Global today and
            let&apos;s start your success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#FF5400] px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-[#FFF8F2] transition-all shadow-2xl shadow-black/20"
            >
              Call Us
            </Link>
            <a
              href="https://wa.me/918349094764"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white/30 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
