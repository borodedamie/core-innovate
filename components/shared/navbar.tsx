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

  const location = usePathname();

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
      <div className="fixed w-full z-50">
        <nav
          className={cn(
            "bg-dark py-4 sm:pt-6 sm:pb-4 px-4 z-50"
            // { "bg-white shadow-2xs": location === "/contact-us" }
          )}
        >
          <div className="max-w-7xl flex flex-col gap-4 mx-auto">
            <div className="flex items-center justify-between">
              <Link href={`/`}>
                <Image
                  src={`/logo.png`}
                  width={107}
                  height={68}
                  alt="core innovate logo"
                />
              </Link>

              <div
                className={cn(
                  "hidden lg:flex items-center text-base text-white font-dm-sans font-medium gap-8"
                  // { "text-[#101928]": location === "/contact-us" }
                )}
              >
                {/* <Link className={linkClasses("/services")} href={"/services"}>
              Services
            </Link> */}
                <Link className={linkClasses("/resources")} href={"/resources"}>
                  Resources
                </Link>
                <Link className={linkClasses("/about-us")} href={"/about-us"}>
                  About Us
                </Link>

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
            </div>
            <div
              className={cn(
                " px-4 hidden lg:flex items-center gap-3 justify-end"
                // { "bg-white": location === "/contact-us" }
              )}
            >
              {services.map((service) => (
                <Link
                  key={service}
                  className={cn(
                    "text-md font-dm-sans hover:text-white hover:underline font-medium text-white/70"
                    // {
                    //   "text-[#101928]/70 hover:text-[#101928]":
                    //     location === "/contact-us",
                    // }
                  )}
                  href={`/services`}
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>

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
              <Link onClick={() => setIsOpen(false)} href={`/`}>
                <Image
                  src={`/logo.png`}
                  width={107}
                  height={68}
                  alt="core innovate logo"
                />
              </Link>

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
              {services.map((service) => (
                <Link
                  key={service}
                  onClick={() => setIsOpen(false)}
                  href={`/services`}
                >
                  {service}
                </Link>
              ))}

              {/* <Link
                href={"/services"}
                className={linkClasses("/services")}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link> */}
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

const services = [
  "Managed IT Services",
  "Cloud Management",
  "Managed Security",
  "Project Management",
  "Software Development",
  "Project Risk",
];
