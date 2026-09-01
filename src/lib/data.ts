export type DealType = "promo" | "voucher" | "referral";

export type Deal = {
  id: string;
  type: DealType;
  brand: string;
  category: string;
  title: string;
  description: string;
  code?: string;
  discount: string;
  expiresAt: string;
  link?: string;
};

export const deals: Deal[] = [
  {
    id: "1",
    type: "promo",
    brand: "Shopee",
    category: "E-commerce",
    title: "Gratis Ongkir Semua Toko",
    description: "Nikmati gratis ongkir tanpa minimum belanja untuk semua kategori produk.",
    discount: "Gratis Ongkir",
    expiresAt: "2026-09-15",
    link: "https://shopee.co.id",
  },
  {
    id: "2",
    type: "voucher",
    brand: "Tokopedia",
    category: "E-commerce",
    title: "Diskon 25% Produk Elektronik",
    description: "Voucher diskon khusus kategori elektronik, maksimal potongan Rp100.000.",
    code: "ELEK25TOKO",
    discount: "25%",
    expiresAt: "2026-09-05",
    link: "https://tokopedia.com",
  },
  {
    id: "3",
    type: "referral",
    brand: "Gojek",
    category: "Transportasi",
    title: "Kode Referral Pengguna Baru",
    description: "Gunakan kode referral ini saat daftar akun baru dan dapatkan saldo GoPay gratis.",
    code: "GOJEKFRIEND88",
    discount: "Saldo Rp25.000",
    expiresAt: "2026-12-31",
    link: "https://gojek.com",
  },
  {
    id: "4",
    type: "promo",
    brand: "McDonald's",
    category: "Makanan & Minuman",
    title: "Promo Paket Hemat Weekday",
    description: "Paket hemat spesial hari kerja untuk pembelian di aplikasi McDonald's.",
    discount: "Mulai Rp25.000",
    expiresAt: "2026-09-01",
    link: "https://mcdonalds.co.id",
  },
  {
    id: "5",
    type: "voucher",
    brand: "Traveloka",
    category: "Travel",
    title: "Diskon Tiket Pesawat Domestik",
    description: "Voucher potongan harga untuk pemesanan tiket pesawat rute domestik.",
    code: "TRAVEL150K",
    discount: "Rp150.000",
    expiresAt: "2026-10-10",
    link: "https://traveloka.com",
  },
  {
    id: "6",
    type: "referral",
    brand: "Grab",
    category: "Transportasi",
    title: "Kode Referral GrabRewards",
    description: "Ajak teman daftar Grab dengan kode ini, kalian berdua dapat bonus poin GrabRewards.",
    code: "GRABREF2026",
    discount: "500 Poin",
    expiresAt: "2026-12-31",
    link: "https://grab.com/id",
  },
  {
    id: "7",
    type: "promo",
    brand: "Zalora",
    category: "Fashion",
    title: "Flash Sale Akhir Bulan",
    description: "Diskon besar-besaran untuk koleksi fashion pria dan wanita pilihan.",
    discount: "Hingga 70%",
    expiresAt: "2026-08-31",
    link: "https://zalora.co.id",
  },
  {
    id: "8",
    type: "voucher",
    brand: "Blibli",
    category: "E-commerce",
    title: "Voucher Belanja Gadget",
    description: "Potongan harga langsung untuk pembelian gadget dan aksesoris.",
    code: "GADGETBLI50",
    discount: "Rp50.000",
    expiresAt: "2026-09-20",
    link: "https://blibli.com",
  },
  {
    id: "9",
    type: "referral",
    brand: "Jenius",
    category: "Keuangan",
    title: "Kode Referral Buka Rekening",
    description: "Buka rekening Jenius baru dengan kode referral ini dan dapatkan cashback.",
    code: "JENIUSCUAN",
    discount: "Cashback Rp50.000",
    expiresAt: "2026-12-31",
    link: "https://jenius.com",
  },
];

export const categories = Array.from(new Set(deals.map((d) => d.category)));
export const brands = Array.from(new Set(deals.map((d) => d.brand)));
