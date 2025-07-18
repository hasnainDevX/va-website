"use client";
import React from "react";
import Head from "next/head";
import { Heart, Users, Target, Coffee } from "lucide-react";
import { useGsap } from "../hooks/useGsap";
import Image from "next/image";

const About = () => {
  const scope = useGsap((gsap) => {
    gsap.from(".fade-in-up", {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
    gsap.from(".fade-in-left", {
      opacity: 0,
      x: -100,
      duration: 1.2,
      ease: "power3.out",
    });
    gsap.from(".value-card", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".values-section",
        start: "top 80%",
      },
    });
  });

  return (
    <div ref={scope}>
      <Head>
        <title>About - The South London VA</title>
        <meta
          name="description"
          content="Meet Sarah, the founder of The South London VA. Learn about my mission to support female entrepreneurs with warm, professional virtual assistance services."
        />
      </Head>

      <section className="pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative fade-in-left">
              <div className="absolute -top-4 -right-4 w-full h-full bg-brand-soft-beige rounded-2xl transform rotate-[3deg]"></div>
              <Image
                width={600}
                height={900}
                alt="Founder Dani, a professional woman smiling in a bright, modern setting"
                className="rounded-2xl shadow-2xl w-full h-[400px] sm:h-[600px] object-cover relative z-10"
                src="/danipic.png"
              />
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-brand-charcoal-black fade-in-up">
                Hello, I'm Dani
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 font-inter leading-relaxed fade-in-up">
                A South London based, ex award nominated sales professional with
                10+ years in the events & media industry.
              </p>
              <p className="text-base sm:text-lg text-gray-600 font-inter leading-relaxed fade-in-up">
                I get a kick out of driving business growth, alongside writing
                long form content to engage and build online communities. I’ve
                always been inspired by people who have the courage to start and
                build their own businesses, and wanted to be part of that
                network - so I quit my 9-5 to focus on supporting community
                driven founders who are ready to scale. I’m able to do
                everything that your regular Virtual Assistant does, but the
                twist? I’m also the person who refines and tweaks your marketing
                & sales copy, builds your prospect list, and drives your new
                business conversations. So, Are you ready to scale? Apply to
                work with me here
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-brand-charcoal-black text-brand-ivory-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Cloud SVG Background */}
            <svg
              className="absolute scale-200 left-1/2 -top-6 transform -translate-x-1/2 w-72 sm:w-96 text-pink-300 opacity-30 z-0"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FF0066"
                d="M44.1,-68.8C57.4,-68.8,68.4,-57.3,74.1,-43.9C79.8,-30.6,80.2,-15.3,75.4,-2.8C70.6,9.7,60.5,19.4,53.1,29.8C45.6,40.2,40.8,51.2,32.4,58.1C23.9,65,12,67.8,-1.6,70.5C-15.1,73.3,-30.3,76,-41.8,70.8C-53.3,65.7,-61.3,52.9,-61.9,39.8C-62.4,26.6,-55.6,13.3,-55.8,-0.1C-56.1,-13.6,-63.4,-27.2,-61.2,-37.4C-58.9,-47.5,-47,-54.2,-35.2,-55C-23.5,-55.8,-11.7,-50.7,1.9,-53.9C15.5,-57.1,30.9,-68.7,44.1,-68.8Z"
                transform="translate(100 100)"
              />
            </svg>

            {/* Heading with cloud behind */}
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-8 fade-in-up relative z-10">
              My Story+
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-lg text-brand-soft-beige font-inter leading-relaxed relative z-10">
              <p className="fade-in-up">
                My journey began in the bustling world of corporate admin, where
                I honed my skills in organization and problem-solving. But I
                always felt something was missing – the personal connection and
                meaningful impact I craved.
              </p>
              <p className="fade-in-up">
                The turning point came when I started helping a friend with her
                growing online business. Seeing how my support freed her to
                focus on her creative work was incredibly fulfilling. That's
                when I realized my purpose: being the reliable backbone that
                allows female entrepreneurs to shine.
              </p>
              <p className="fade-in-up">
                Based in South London, I've built The South London VA on the
                principles of warmth, reliability, and genuine care. I don't
                just complete tasks – I become an extension of your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 values-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-charcoal-black mb-6">
              My Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-inter max-w-3xl mx-auto">
              These core principles guide everything I do and shape how I work
              with each client.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {[
              {
                icon: <Heart className="text-brand-antique-gold" size={40} />,
                title: "Genuine Care",
                description:
                  "I truly care about your success and treat your business as if it were my own.",
              },
              {
                icon: <Users className="text-brand-antique-gold" size={40} />,
                title: "Personal Connection",
                description:
                  "Building real relationships, not just professional transactions.",
              },
              {
                icon: <Target className="text-brand-antique-gold" size={40} />,
                title: "Excellence",
                description:
                  "Delivering high-quality work with attention to detail and pride.",
              },
              {
                icon: <Coffee className="text-brand-antique-gold" size={40} />,
                title: "Warmth",
                description:
                  "Bringing a friendly, supportive approach to every interaction.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="value-card text-center bg-brand-soft-beige/30 p-8 rounded-xl border border-slate-300"
              >
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="font-playfair text-2xl font-semibold text-brand-charcoal-black mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
