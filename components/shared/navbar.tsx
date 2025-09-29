import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

const NavBar = () => {
  return (
    <nav className="flex items-center fixed w-full py-6 px-4 sm:px-8 lg:px-12 justify-between">
      <Image
        src={`/logo.png`}
        width={107}
        height={68}
        alt="core innovate logo"
      />

      <div className="hidden lg:flex items-center text-base text-white font-dm-sans font-medium gap-8">
        <Link href={"/services"}>Services</Link>

        <Link href={"/resources"}>Resources</Link>

        <Link href={"/about-us"}>About Us</Link>
      </div>

      <Button size="lg">Contact Us</Button>
    </nav>
  );
};

export default NavBar;
