"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "./ui/ButtonLink";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Digital Downloads", path: "/digital-downloads" },
  ];

  return (
    <>
      <motion.header
        className={`overflow-hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isOpen
            ? "bg-[#FFB6C1]/10 backdrop-blur-lg shadow-md" // Changed from FDFBF8 to soft blush
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <nav className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link
              style={{ fontFamily: "'Playfair Display', serif" }}
              href="/"
              className="font-playfair text-2xl font-bold soft-black-text transition-colors " // Changed text and hover colors
            >
              <Image
                src="/salogo.jpg"
                alt="Logo"
                width={50}
                height={50}
                className="inline-block mr-2 mb-1 rounded-full"
              />
              <span className="underline-offset-4 underline text-sm sm:text-md md:text-xl lg:text-2xl underline-[#FF2D70] text-[#f7677f]">
                The South London VA
              </span>{" "}
              {/* Changed underline color */}
            </Link>

            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  href={item.path}
                  className={`font-inter font-medium relative after:absolute after:bottom-[-4px] px-2 py-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#FF2D70] after:transition-all after:duration-300 hover:after:w-full text-lg ${
                    pathname === item.path
                      ? "text-[#FF2D70]"
                      : isScrolled
                      ? "text-[#e60049]"
                      : "text-[#300036]"
                  }
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <ButtonLink
                href="/contact"
                color="#FFB6C1" // Changed button background
                size="sm"
                icon="arrow-right"
                className="brand-soft-blush text-white hover:bg-[#D23C57] font-semibold transition-all duration-300" // Updated button colors
              >
                Let's Work Together
              </ButtonLink>
            </div>

            <button
              className="md:hidden text-[#000000] z-50" // Changed icon color
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-[#FFB6C1] py-20 px-4 z-40 flex flex-col items-center justify-center space-y-8" // Changed mobile menu background
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-col items-center space-y-4 p-40">

            
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-playfair text-4xl text-[#000000] ${
                    pathname === item.path ? "text-[#FF2D70]" : "" // Changed active color
                  }`}
                  onClick={() => setIsOpen(false)}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + navItems.length * 0.1 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-[#FF2D70] text-white hover:bg-[#FF10F0] font-semibold transition-all duration-300" // Updated button colors
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Let's Work Together
                </Link>
              </Button>
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
