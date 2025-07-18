import Image from "next/image";
import { Shield, ArrowRight } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // trigger when 30% is visible
  });
  return (
    <section className="py-28 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image with overlay */}
          <div className="relative ">
            <div className="relative rounded-2xl overflow-hidden ">
              <Image
                src="/aboutsectionimg.jpg"
                alt="Professional woman working"
                width={700}
                height={700}
                priority // ← Add this for important images
                className="object-cover w-full h-[30rem] rounded-2xl"
              />
            </div>

            {/* Satisfaction Guarantee Badge */}
            <div className="text-brand-charcoal-black absolute bottom-6 left-6 bg-[#FF5E78] text-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold ">Satisfaction Guarantee</h3>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            {/* Large Number */}
            <div className="text-8xl md:text-9xl font-bold text-soft-blush leading-none">
              {inView && <CountUp start={0} end={10} duration={3} suffix="+" />}{" "}
            
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Years Since I Help You To Grow Your Business
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              A South London based, ex award nominated sales professional with
              10+ years in the events & media industry.
            </p>

            {/* CTA Button */}
            <button className="inline-flex items-center gap-2 bg-pink-200 hover:bg-pink-300 text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200 group">
              More About Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
