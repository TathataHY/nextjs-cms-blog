import { BackArrowIcon } from "@/app/components";
import { Lilita_One } from "next/font/google";
import Link from "next/link";

const lilita = Lilita_One({ weight: "400", subsets: ["latin"] });

export const CMSNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-5">
      <Link href="/">
        <BackArrowIcon />
      </Link>

      <div className={`${lilita.className} text-3xl dark:text-amber-50`}>
        Dev
        <span className="text-purple-500">Blook</span>
      </div>
    </div>
  );
};
