import TypedDealBrowser from "@/components/TypedDealBrowser";

export default function VoucherPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <header className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏷️</span>
            <span className="text-xl font-bold">Promoyo</span>
          </div>
          <p className="hidden sm:block text-sm text-neutral-500">
            Promo, voucher diskon &amp; kode referral dalam satu tempat
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <TypedDealBrowser
          type="voucher"
          title="Voucher Diskon"
          subtitle="Kumpulan kode voucher diskon untuk berbagai kategori belanja."
        />
      </main>

      <footer className="mt-12 border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-neutral-500">
          Promoyo — kumpulan promo, voucher, dan referral. Data bersifat contoh.
        </div>
      </footer>
    </div>
  );
}
