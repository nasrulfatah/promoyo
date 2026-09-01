"use client";

import { useMemo, useState } from "react";
import { deals, categories, type DealType } from "@/lib/data";
import DealCard from "@/components/DealCard";

const typeFilters: { label: string; value: DealType | "all" }[] = [
  { label: "Semua", value: "all" },
  { label: "Promo", value: "promo" },
  { label: "Voucher Diskon", value: "voucher" },
  { label: "Kode Referral", value: "referral" },
];

export default function DealBrowser() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<DealType | "all">("all");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return deals.filter((deal) => {
      const matchesQuery =
        query.trim() === "" ||
        deal.title.toLowerCase().includes(query.toLowerCase()) ||
        deal.brand.toLowerCase().includes(query.toLowerCase()) ||
        deal.description.toLowerCase().includes(query.toLowerCase());
      const matchesType = type === "all" || deal.type === type;
      const matchesCategory = category === "all" || deal.category === category;
      return matchesQuery && matchesType && matchesCategory;
    });
  }, [query, type, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari brand, promo, atau voucher..."
          className="w-full sm:max-w-sm rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-orange-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 px-3 py-2.5 text-sm outline-none"
        >
          <option value="all">Semua Kategori</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {typeFilters.map((f) => (
          <button
            key={f.value}
            onClick={() => setType(f.value)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium border transition-colors ${
              type === f.value
                ? "bg-orange-500 border-orange-500 text-white"
                : "border-black/10 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-neutral-500">{filtered.length} hasil ditemukan</p>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-neutral-500 py-12">
            Tidak ada hasil yang cocok. Coba kata kunci lain.
          </p>
        )}
      </div>
    </div>
  );
}
