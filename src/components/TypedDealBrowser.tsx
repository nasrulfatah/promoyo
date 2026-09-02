"use client";

import { useMemo, useState } from "react";
import { deals, categories, type DealType } from "@/lib/data";
import DealCard from "@/components/DealCard";

interface TypedDealBrowserProps {
  type: DealType;
  title: string;
  subtitle?: string;
}

export default function TypedDealBrowser({
  type,
  title,
  subtitle,
}: TypedDealBrowserProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return deals.filter((deal) => {
      const matchesQuery =
        query.trim() === "" ||
        deal.title.toLowerCase().includes(query.toLowerCase()) ||
        deal.brand.toLowerCase().includes(query.toLowerCase()) ||
        deal.description.toLowerCase().includes(query.toLowerCase());
      const matchesType = deal.type === type;
      const matchesCategory = category === "all" || deal.category === category;
      return matchesQuery && matchesType && matchesCategory;
    });
  }, [query, category]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
        {subtitle && (
          <p className="mt-2 text-neutral-500 max-w-2xl">{subtitle}</p>
        )}
      </div>

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

      <p className="mt-4 text-sm text-neutral-500">
        {filtered.length} hasil ditemukan
      </p>

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
