"use client";

import { useState } from "react";
import type { Deal } from "@/lib/data";

const typeLabel: Record<Deal["type"], string> = {
  promo: "Promo",
  voucher: "Voucher",
  referral: "Referral",
};

const typeColor: Record<Deal["type"], string> = {
  promo: "bg-orange-100 text-orange-700 dark:bg-orange-500/15 dark:text-orange-300",
  voucher: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300",
  referral: "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-300",
};

export default function DealCard({ deal }: { deal: Deal }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!deal.code) return;
    try {
      await navigator.clipboard.writeText(deal.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable, ignore
    }
  }

  return (
    <div className="flex flex-col justify-between rounded-xl border border-black/10 dark:border-white/10 p-4 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-neutral-900">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${typeColor[deal.type]}`}>
            {typeLabel[deal.type]}
          </span>
          <span className="text-xs text-neutral-500">{deal.category}</span>
        </div>
        <h3 className="mt-3 font-semibold text-lg leading-snug">{deal.title}</h3>
        <p className="text-sm text-neutral-500 mt-1">{deal.brand}</p>
        <p className="text-sm mt-2 text-neutral-600 dark:text-neutral-300">{deal.description}</p>
        <p className="mt-2 text-sm font-medium text-orange-600 dark:text-orange-400">
          Diskon: {deal.discount}
        </p>
        <p className="text-xs text-neutral-400 mt-1">
          Berlaku hingga {new Date(deal.expiresAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
        </p>
      </div>
      <div className="mt-4 flex items-center gap-2">
        {deal.code && (
          <button
            onClick={handleCopy}
            className="flex-1 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 px-3 py-2 text-sm font-mono font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
          >
            {copied ? "Tersalin!" : deal.code}
          </button>
        )}
        {deal.link && (
          <a
            href={deal.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-3 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Kunjungi
          </a>
        )}
      </div>
    </div>
  );
}
