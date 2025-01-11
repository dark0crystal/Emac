import Brand from "./Brand";
import NavLinks from "./NavLinks";
import MobileBar from "./MobileBar";
import { useTranslations } from "next-intl";
export default function NavBar() {
  const t= useTranslations("navbar");
  const navLinks = [
    { direction: "#about-us", name:t("about-us")},
    { direction: "#our-services", name: t("our-services") },
    { direction: "#our-projects", name: t("our-projects")},
    { direction: "#contact-us", name: t("contact-us")},
  ];

  return (
    <div   className="flex justify-between items-center w-screen h-[10vh] bg-white/40  border-b-[1px] ">
      

      {/* Navigation Links (hidden on small screens) */}
      <div className="hidden md:flex">
        <NavLinks navLinks={navLinks} />
      </div>
      
      
      {/* Mobile Menu (visible on small screens) */}
      <MobileBar navLinks={navLinks} />

      {/* Brand Section */}
      <Brand />
    </div>
  );
}
