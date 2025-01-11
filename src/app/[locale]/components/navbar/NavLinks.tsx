import { Link } from "@/i18n/routing";
import LanguageChange from "./LanguageChange";

export default function NavLinks({ navLinks }:any) {
  return (
    <div className="flex items-center text-black mx-20">
      {navLinks.map((navLink:any, index:any) => (
        <Link href={navLink.direction} key={index}>
          <h1 className="text-lg mx-4 font-normal">{navLink.name}</h1>
        </Link>
      ))}
      <LanguageChange/>
    </div>
  );
}
