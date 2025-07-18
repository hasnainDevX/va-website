"use client";
import { ArrowRight, CheckCircle, PenTool, Shield, Star } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import { ButtonLink } from "./components/ui/ButtonLink";
import { TextGenerateEffect } from "./components/ui/TextGenerateEffect";
import { useGsap } from "./hooks/useGsap";
import Aboutsection from "./components/Aboutsection";
import TestimonialSection from "./components/TestimonialSection";
import HeroSection from "./components/Herosection";
import Faqs from "./components/Faqs";

const Home = () => {
  const scope = useGsap((gsap) => {
    gsap.fromTo(
      ".hero-text-reveal",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      ".hero-image-reveal",
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power4.out", delay: 1 }
    );
    gsap.from(".feature-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".features-section",
        start: "top 80%",
      },
    });
  });

  const words = `Your Business Simplified`;

  return (
    <div ref={scope}>
      <Head>
        <title>
          The South London VA - Virtual Assistant for Female Founders
        </title>
        <meta
          name="description"
          content="Warm, minimal, and professional virtual assistant services for female founders and small business owners. Let's simplify your business."
        />
      </Head>

      {/* <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <TextGenerateEffect
                duration={2}
                filter={false}
                words={words}
                className="font-playfair text-5xl sm:text-6xl !lg:text-7xl font-bold text-brand-charcoal-black leading-tight"
              />
              <p className="hero-text-reveal text-lg sm:text-xl text-gray-700 font-inter leading-relaxed max-w-lg mx-auto lg:mx-0">
                the South London VA is a Virtual Assistant Service with a twist!
                It’s for the community driven founder who is ready to scale and
                transform the way they do sales.
              </p>
              <div className="hero-text-reveal flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <ButtonLink
                  href="/contact"
                  color="#EAE0D5"
                  size="sm"
                  icon="arrow-right"
                  className="bg-[#F2CDC9] font-semibold transition-all duration-300 "
                >
                  Contact Me
                </ButtonLink>
                <ButtonLink
                  href="/services"
                  color="#D4AF37"
                  size="sm"
                  icon="arrow-right"
                  className="bg-[#FFB6C1] font-semibold transition-all duration-300"
                >
                  View Services
                </ButtonLink>
              </div>
            </div>
            <div className="relative">
              <video
                width={800}
                height={500}
                alt="Professional workspace with laptop, coffee, and notebooks in a light, airy style"
                className="rounded-2xl shadow-2xl w-[50rem] h-[24rem] object-fill relative z-10"
                src="/herovideo2.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section> */}

      <HeroSection />

      {/* About section */}
      <Aboutsection />


      <section className="py-24 sm:py-32 bg-[#EAE0D5]/30 features-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-charcoal-black mb-6">
              Why Choose The South London VA?
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-inter max-w-3xl mx-auto">
              I understand the unique challenges female entrepreneurs face. My
              approach is personal, supportive, and designed to help your
              business thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="fruity-pink-text" size={36} />,
                title: "Reliable Support",
                description:
                  "Consistent, dependable assistance you can count on, delivered with warmth and professionalism.",
              },
              {
                icon: <Star className="fruity-pink-text" size={36} />,
                title: "Personal Touch",
                description:
                  "I take time to understand your business and work style, creating a truly personalized experience.",
              },
              {
                icon: <PenTool className="fruity-pink-text" size={36} />,
                title: "Growth Focused",
                description:
                  "Every task is designed to free up your time for strategic growth and what you love most.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="feature-card brand-ivory-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-5 icon-hover-effect">{feature.icon}</div>
                <h3
                  style={{ fontFamily: "Playfair Display, serif" }}
                  className=" text-2xl font-semibold text-brand-charcoal-black mb-4"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection />

      <Faqs />

      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6">
          <div className="brand-charcoal-black rounded-2xl p-12 sm:p-16 text-center overflow-hidden relative">
            <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-[#D4AF37]/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#EAE0D5]/10 rounded-full filter blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#FFF5F3] mb-6">
                Ready to Feel in Control of Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-[#FFF5F3] font-inter mb-10 max-w-2xl mx-auto">
                Let's have a conversation about how I can support your business
                goals. No pressure, just a friendly chat about your needs.
              </p>
              <ButtonLink
                href="/contact"
                color="#EAE0D5"
                size="sm"
                icon="arrow-right"
                className="brand-soft-blush hover:bg-[#EAE0D5] font-semibold transition-all duration-300"
              >
                Book your VA
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
