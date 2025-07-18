import Image from "next/image";
import { Rocket, BarChart3 } from "lucide-react";

export default function HeroSection() {
  return (
    <div
      className="min-h-screen relative gradient-bg mb-20"
      style={{
        backgroundSize: "100% 100%, 6rem 4rem, 6rem 4rem",
      }}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#3A3A6A_1px,transparent_1px),linear-gradient(to_bottom,#3A3A6A_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-30"
        style={{
          maskImage:
            "linear-gradient(to right, black 0%, transparent 70%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, transparent 70%), linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28">
        <div className="flex gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 flex-[60%] py-8 w-full">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                FOCUS ON GROWING
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white ">
                Reliable And Trusted
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 italic">
                Virtual Assistant
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                For Busy Entrepreneurs.
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-200 text-lg leading-relaxed max-w-lg">
              The South London VA is a Virtual Assistant Service with a twist! It’s for the community driven founder  who is ready to scale and transform the way they do sales.
            </p>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap">
                Contact Now
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <Image
                    src="/dani-image.jpg"
                    alt="User 1"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <Image
                    src="/dani-image.jpg"
                    alt="User 2"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <Image
                    src="/dani-image.jpg"
                    alt="User 3"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-600 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
              </div>
              <div className="text-white">
                <div className="font-bold">250+ Corporate Trust Us</div>
                <div className="text-sm text-gray-300">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
          </div>

          {/* Right Image with Floating Cards */}
          <div className="relative flex-[40%] h-full">
            <div className="relative rounded-2xl overflow-hidden">
              <video
                src="/herovideo2.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card 1 - Boost Productivity */}
            <div className="absolute -top-20 right-4 bg-white rounded-xl p-4 shadow-xl max-w-xs backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Rocket className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Boost Your Productivity
                  </h4>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Tailored Business */}
            <div className="absolute top-60 right-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 shadow-xl max-w-xs text-white">
              <div className="flex items-start gap-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Tailored For Busy Business</h4>
                  <p className="text-sm text-white/90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
