import { ArrowDown, ArrowUp, Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FAQSection() {
  // Use an array to track open state
  const [openIndexes, setOpenIndexes] = useState([true, false, false]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : false))
    );
  };

  const faqData = [
    {
      question: "Can I change my assistant if I need to?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    },
    {
      question: "What if I want to cancel?",
      answer:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 md:py-20 lg:py-24" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* Main Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 md:mb-12 text-brand-deep-black">
        Answers To The <span className="text-highlight-orange">Most</span> Common <span className="text-highlight-purple">Questions</span> Business Owners Ask.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left: Video */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-brand-soft-blush flex items-center justify-center shadow-xl">
          <video src="/herovideo1.mp4" controls className="object-cover w-full h-full"></video>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center cursor-pointer shadow-2xl transition-transform duration-300 hover:scale-105">
              <Play className="w-10 h-10 text-brand-neon-pink ml-2" />
            </div>
          </div>
        </div>

        {/* Right: Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="accordian" onClick={() => toggleAccordion(index)}>
              <div
                className={`question cursor-pointer font-semibold border-2 border-gray-700 rounded-3xl p-4 mb-2 flex items-center justify-between ${
                  openIndexes[index]
                    ? "bg-gradient-to-r from-pink-600 to-fuchsia-950 text-white"
                    : "bg-pink-50"
                } transition-all duration-300 ease-in-out`}
              >
                <div>{faq.question}</div>
                <div className="transition-colors">
                  {openIndexes[index] ? (
                    <ArrowDown className={`w-6 h-6 text-gray-700 ${openIndexes[index] ? "text-white" : ""}`} />
                  ) : (
                    <ArrowUp className={`w-6 h-6 text-gray-700 ${openIndexes[index] ? "text-white" : ""}`} />
                  )}
                </div>
              </div>
              <div
                className={`answer p-4 text-gray-600 bg-white transition-all duration-300 ease-in-out ${
                  openIndexes[index] ? "" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
