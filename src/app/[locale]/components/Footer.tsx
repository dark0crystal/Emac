import { useTranslations } from "next-intl";
import Image from "next/image";
import brand from "../../../../public/logo.png";

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className="bg-sky-950 text-white py-6">
            <div className="container mx-auto flex flex-col items-center space-y-4">
                {/* Profile and Title */}
                <div className="flex flex-col items-center justify-center space-x-4 bg-white rounded-3xl h-[20vh] w-[90vw] md:w-[70vw]">
                    <Image
                        src={brand}
                        alt="Profile Picture"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                    <div>
                        <p className="text-sm md:text-lg text-center text-black mt-2">{t("CompanyfullName")}</p>
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
