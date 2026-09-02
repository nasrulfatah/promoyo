import Link from "next/link";
import { deals } from "@/lib/data";

const categories = [
  {
    name: "Promo",
    emoji: "🎉",
    description: "Promosi spesial dari berbagai brand",
    href: "/promo",
    count: deals.filter((d) => d.type === "promo").length,
  },
  {
    name: "Voucher Diskon",
    emoji: "🎟️",
    description: "Kode voucher diskon eksklusif",
    href: "/voucher",
    count: deals.filter((d) => d.type === "voucher").length,
  },
  {
    name: "Kode Referral",
    emoji: "👥",
    description: "Kode referral untuk bonus menarik",
    href: "/referral",
    count: deals.filter((d) => d.type === "referral").length,
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Link
          key={category.href}
          href={category.href}
          className="group rounded-lg border border-black/10 dark:border-white/10 p-6 hover:border-orange-500 dark:hover:border-orange-500 transition-all hover:bg-orange-50 dark:hover:bg-orange-500/10"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-3xl mb-2">{category.emoji}</div>
              <h3 className="text-lg font-bold">{category.name}</h3>
              <p className="text-sm text-neutral-500 mt-1">
                {category.description}
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-orange-500">
              {category.count}
            </span>
            <span className="text-sm text-neutral-500 group-hover:text-orange-500 transition-colors">
              Lihat →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
