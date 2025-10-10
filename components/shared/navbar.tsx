"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Pivot as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.querySelector(".hero");

      if (heroSection) {
        const heroBottom =
          (heroSection as HTMLElement).offsetTop +
          (heroSection as HTMLElement).offsetHeight;
        setScrolled(scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const linkClasses = (path: string) =>
    `relative transition-colors duration-300 hover:text-primary ${
      location === path
        ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-white"
        : ""
    }`;

  return (
    <div className="relative">
      <nav
        className={cn(
          "flex items-center fixed w-full py-4 sm:py-6 px-4 sm:px-8 lg:px-12 justify-between z-50",
          scrolled ? "bg-dark" : "",
          { "bg-white shadow-2xs": location === "/contact-us" }
        )}
      >
        <Link href={`/`}>
          <Image
            src={location === "/contact-us" ? `/logo-white.png` : `/logo.png`}
            width={107}
            height={68}
            alt="core innovate logo"
          />
        </Link>

        <div
          className={cn(
            "hidden lg:flex items-center bg-[#193D6B] py-4 px-10 rounded-[40px] text-base text-white font-dm-sans font-medium gap-8",
            { "bg-[#F7F9FC] text-[#101928]": location === "/contact-us" }
          )}
        >
          <Link className={linkClasses("/services")} href={"/services"}>
            Services
          </Link>
          <Link className={linkClasses("/resources")} href={"/resources"}>
            Resources
          </Link>
          <Link className={linkClasses("/about-us")} href={"/about-us"}>
            About Us
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link href={`/contact-us`}>
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            color={location === "/contact-us" ? "#101928" : "#fff"}
            size={24}
          />
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-dark z-[70] flex flex-col p-4 items-center gap-12 text-white font-dm-sans text-lg font-medium"
          >
            <div className="w-full flex items-center justify-between top-6">
              <Image
                src={`/logo.png`}
                width={107}
                height={68}
                alt="core innovate logo"
              />

              <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                color="#fff"
                size={24}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8 flex flex-col items-center"
            >
              <Link
                href={"/services"}
                className={linkClasses("/services")}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href={"/resources"}
                className={linkClasses("/resources")}
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <Link
                href={"/about-us"}
                className={linkClasses("/about-us")}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link href={`/contact-us`} onClick={() => setIsOpen(false)}>
                <Button size="lg">Contact Us</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
