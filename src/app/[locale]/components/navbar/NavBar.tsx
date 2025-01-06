import Brand from "./Brand";
import NavLinks from "./NavLinks";
import MobileBar from "./MobileBar";

export default function NavBar() {
  const navLinks = [
    { direction: "/", name: "نبذة عنّا" },
    { direction: "/", name: "خدماتنا" },
    { direction: "/", name: "أعمالنا" },
    { direction: "/", name: "تواصل معنا" },
  ];

  return (
    <div className="flex justify-between items-center w-screen h-[10vh] bg-white shadow-lg shadow-gray-300 border-b-[1px] ">
      

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
