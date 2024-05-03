import { ThemeSwitch } from "@/app/components";
import { Lilita_One } from "next/font/google";
import Link from "next/link";

const lilita = Lilita_One({ subsets: ["latin"], weight: "400" });

export const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div className={`${lilita.className} text-3xl dark:text-amber-50`}>
            <span className="text-purple-500">Dev</span>Blook
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};
