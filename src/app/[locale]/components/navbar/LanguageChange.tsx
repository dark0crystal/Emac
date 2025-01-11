'use client'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] ,display: 'swap',});

export default function LanguageChange() {
    const t = useTranslations("navbar");
    const pathName = usePathname();
    const locale = useLocale();

    // Remove the current locale from the pathname
    const pathWithoutLocale = pathName.replace(`/${locale}`, "");

    return (
        <div >
            {locale === "ar" ? (
                <Link className="mx-6 text-xl font-normal" href={`/en${pathWithoutLocale}`} locale="en">
                    {t("langChange")}
                </Link>
            ) : (
                <Link className="mx-6 text-xl font-normal" href={`/ar${pathWithoutLocale}`} locale="ar">
                   {t("langChange")}
                </Link>
            )}
        </div>
    );
}