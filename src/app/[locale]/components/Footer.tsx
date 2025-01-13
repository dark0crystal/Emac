import { useTranslations } from "next-intl";
import Image from "next/image";
import brand from "../../../../public/logo.png";

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                {/* Profile and Title */}
                <div className="flex items-center space-x-4">
                    <Image
                        src={brand}
                        alt="Profile Picture"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <h2 className="text-lg font-bold">{t("designerName")}</h2>
                        <p className="text-sm">{t("jobTitle")}</p>
                    </div>
                </div>

                {/* Time and Location */}
                <div className="text-center">
                    <p className="text-sm">
                        {t("time")} - {t("day")} {t("date")}
                    </p>
                    <p className="text-sm">{t("location")}</p>
                </div>

                {/* Social Icons */}
                <div className="flex space-x-4">
                    <button className="bg-white text-black rounded-full p-2">
                        X
                    </button>
                    <button className="bg-white text-black rounded-full p-2">
                        in
                    </button>
                </div>

                {/* Footer Bottom */}
                <div className="text-sm text-center mt-4 border-t border-white/20 pt-4 w-full">
                    <p>
                        © 2024{" "}
                        <span className="font-bold">{t("designerName")}</span>.{" "}
                        {t("madeWithPride")}{" "}
                        <span className="font-bold">{t("frameworkName")}</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
}
