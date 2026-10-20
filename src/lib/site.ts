// Single source of truth for BOJA's brand details and page content.
// Contact details, founder name and partner names are placeholders until BOJA supplies real ones.

export const site = {
  name: "BOJA",
  full: "BOJA Real Estate",
  tagline: "Building Your Dreams In Real Estate",
  phone: "+234 813 118 9065",
  phoneHref: "tel:+2348131189065",
  email: "bojarealestates@gmail.com",
  whatsapp: "https://wa.me/2348131189065",
  telegram: "https://t.me/",
  youtube: "https://www.youtube.com/",
  instagram: "https://www.instagram.com/bo_ja_realestate",
  tiktok: "https://www.tiktok.com/",
  address: ["Plot 12, Admiralty Way,", "Federal Capital Territory,", "Abuja, Nigeria"],
  founder: { name: "Onyedika Okafor", role: "BOJA Founder", image: "/images/founder.jpeg" },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Our Properties", href: "#properties" },
  { label: "Our Advantages", href: "#advantages" },
  { label: "Our Services", href: "#services" },
];

export const heroStats = [
  "More than 1,500 real estate properties",
  "From ₦145M with a rental yield of up to 12% per annum",
];

export const marqueeOffers = [
  "Instalments with an initial payment from ₦25M",
  "interest-free",
  "verified C of O titles",
  "0% commission",
];

export type Listing = {
  title: string;
  image: string;
  location: string;
  price: string;
  plan: string;
  initial: string;
  completion: string;
};

const L = (
  title: string,
  image: string,
  location: string,
  price: string,
  plan: string,
  initial: string,
  completion: string,
): Listing => ({ title, image, location, price, plan, initial, completion });

export const portfolio: Record<string, Listing[]> = {
  Apartments: [
    L("Lagoon Crest Luxury Residences", "/images/portfolio-civic.jpg", "Victoria Island", "from ₦290M", "for 5 years", "₦30M", "09/2027"),
    L("Admiralty Bay Apartments", "/images/portfolio-kitchen.jpg", "Lekki Phase 1", "from ₦185M", "for 4 years", "₦18M", "03/2027"),
    L("Ikoyi Executive Suites", "/images/portfolio-office.jpg", "Ikoyi", "from ₦420M", "for 5 years", "₦45M", "12/2027"),
    L("Skyline Rooftop Residences", "/images/portfolio-rooftop.jpg", "Eko Atlantic", "from ₦510M", "for 5 years", "₦55M", "06/2028"),
    L("Atlantic Pearl Towers", "/images/portfolio-eko.jpg", "Eko Atlantic", "from ₦350M", "for 5 years", "₦35M", "11/2027"),
  ],
  Villas: [
    L("Banana Island Waterfront Villa", "/images/villa-1.jpg", "Banana Island", "from ₦1.2B", "for 3 years", "₦150M", "08/2027"),
    L("Maitama Signature Villa", "/images/villa-2.jpg", "Maitama, Abuja", "from ₦780M", "for 3 years", "₦90M", "05/2027"),
    L("Ikoyi Garden Villa", "/images/villa-3.jpg", "Old Ikoyi", "from ₦950M", "for 4 years", "₦110M", "10/2027"),
    L("Asokoro Hillside Villa", "/images/villa-4.jpg", "Asokoro, Abuja", "from ₦690M", "for 3 years", "₦75M", "02/2028"),
    L("Lekki Coastal Villa", "/images/villa-5.jpg", "Lekki Peninsula", "from ₦540M", "for 4 years", "₦60M", "07/2027"),
  ],
  "For Rent": [
    L("Oniru Serviced Apartment", "/images/rent-1.jpg", "Oniru", "₦18M / year", "monthly option", "₦4.5M", "Ready"),
    L("Ikoyi Penthouse Lounge", "/images/rent-2.jpg", "Ikoyi", "₦45M / year", "quarterly option", "₦11M", "Ready"),
    L("Victoria Island Loft", "/images/rent-3.jpg", "Victoria Island", "₦24M / year", "monthly option", "₦6M", "Ready"),
    L("Wuse II Townhouse", "/images/rent-4.jpg", "Wuse II, Abuja", "₦15M / year", "quarterly option", "₦3.8M", "Ready"),
    L("Ajah Family Duplex", "/images/rent-5.jpg", "Ajah", "₦9M / year", "monthly option", "₦2.3M", "Ready"),
  ],
};

// Pins on the Lagos map, as % of the map image (Mainland, Island, Ikoyi, VI, Eko Atlantic, Lekki).
export const mapPins = [
  [9, 31], [13, 44], [15, 58], [27, 56], [31, 61], [33, 69], [26, 79], [45, 63], [56, 64], [63, 60], [76, 61],
] as const;

export const team = ["/images/team-1.jpg", "/images/team-2.jpg", "/images/team-3.jpg", "/images/team-4.jpg"];

export const stats = [
  { value: 85, suffix: "+", label: ["Successful", "Transactions Monthly"] },
  { value: 98, suffix: "%", label: ["Customer", "Satisfaction Rate"] },
  { value: 499, suffix: "", label: ["Exquisite Properties", "Ready for Your Selection"] },
];

export const services = [
  {
    title: "Market Analysis",
    image: "/images/service-1.jpg",
    text: "Data-driven reports on prices, rental demand and growth corridors across Lagos, Abuja and Port Harcourt, so you buy where value is rising.",
  },
  {
    title: "Property Management",
    image: "/images/service-2.jpg",
    text: "We find tenants, collect rent, handle maintenance and send you clear monthly statements wherever you live.",
  },
  {
    title: "Investment Advisory",
    image: "/images/service-3.jpg",
    text: "Tailored portfolios for off-plan, short-let and land banking strategies, matched to your budget and timeline.",
  },
  {
    title: "Legal & Title Verification",
    image: "/images/service-4.jpg",
    text: "Our lawyers verify every C of O, Governor's Consent and survey plan before you pay a single naira.",
  },
];

export const tickerChips = [
  "Pay From Anywhere In The Diaspora",
  "0% Commission",
  "Free Site Inspection",
  "Verified Titles",
  "Interest-Free Instalments",
];

export const ownershipSteps = ["10% Initial\nDeposit", "5 years instalment,\n0% interest", "Rental income ~ 12%"];

export const advantages = [
  {
    icon: "users",
    title: "Booming Demand",
    text: "Africa's most populous nation has over 220 million people and a housing deficit estimated in the tens of millions, so quality homes stay in demand.",
  },
  {
    icon: "shield",
    title: "Secure Titles",
    text: "Every BOJA property comes with verified documentation (C of O, Governor's Consent or registered survey), checked by our in-house legal team.",
  },
  {
    icon: "database",
    title: "Inflation Hedge",
    text: "Prime real estate in Lagos and Abuja has long held its value against inflation, making bricks and mortar a trusted store of wealth.",
  },
  {
    icon: "file",
    title: "Diaspora-Friendly Buying",
    text: "Nigerians abroad can buy, inspect through live video tours and pay in instalments from anywhere in the world.",
  },
  {
    icon: "plus",
    title: "Strong Rental Yields\nfor Investors",
    text: "Short-let and long-let homes in Lekki, Ikoyi and Victoria Island earn strong returns, driven by corporate and expatriate demand.",
  },
  {
    icon: "chart",
    title: "Flexible Payment Plans",
    text: "Spread payments over up to 60 months interest-free with our developer partners, or use mortgage options through partner banks.",
  },
  {
    icon: "home",
    title: "Remote Property Acquisition",
    text: "Reach out to us and we'll help you pick the right property while handling every formality. With 0% commission, our fees are paid by developers.",
  },
];

export const propertyTypes: { n: string; title: string; image: string; tall: boolean }[][] = [
  [
    { n: "01", title: "Luxury Villas", image: "/images/type-01.jpg", tall: false },
    { n: "06", title: "Commercial Spaces", image: "/images/type-06.jpg", tall: true },
  ],
  [
    { n: "02", title: "Penthouse Suites", image: "/images/type-02.jpg", tall: true },
    { n: "07", title: "Townhouses", image: "/images/type-07.jpg", tall: true },
    { n: "10", title: "Investment", image: "/images/type-10.jpg", tall: false },
  ],
  [
    { n: "03", title: "Apartments", image: "/images/type-03.jpg", tall: false },
    { n: "08", title: "Waterfront Homes", image: "/images/type-08.jpg", tall: true },
  ],
  [
    { n: "04", title: "Beachfront Properties", image: "/images/type-04.jpg", tall: true },
    { n: "09", title: "Holiday Homes", image: "/images/type-09.jpg", tall: false },
    { n: "11", title: "Eco-friendly Properties", image: "/images/type-11.jpg", tall: true },
  ],
  [
    { n: "05", title: "Golf Course Residences", image: "/images/type-05.jpg", tall: true },
    { n: "12", title: "Gated Estates", image: "/images/type-12.jpg", tall: false },
  ],
];

export const faqs = [
  {
    q: "What types of properties do we offer in Nigeria?",
    a: "Apartments, penthouses, terraces, detached villas, land and commercial spaces across Lagos, Abuja and Port Harcourt, both off-plan and ready to move in.",
  },
  {
    q: "What are the payment options available for purchasing a property?",
    a: "Outright payment, interest-free developer instalments of up to 60 months, and mortgage financing through our partner banks. Payments can be made in naira or by international transfer.",
  },
  {
    q: "Can Nigerians in the diaspora buy property through BOJA?",
    a: "Yes. We run live video inspections, send documents for e-signing and can act for you on the ground, so you never need to fly in to close a deal.",
  },
  {
    q: "How do I know a property's title is genuine?",
    a: "Before any listing goes live, our legal team searches the land registry and confirms the C of O, Governor's Consent or deed of assignment. You receive copies of every search.",
  },
  {
    q: "Are there any additional costs associated with property ownership in Nigeria?",
    a: "Expect legal fees, survey and registration costs, and service charges for estates. We give you a full cost breakdown upfront, with no hidden charges.",
  },
  {
    q: "Do we offer property management services for rental properties?",
    a: "Yes. We handle tenant sourcing, rent collection, short-let operations, maintenance and reporting for a simple monthly fee.",
  },
  {
    q: "Can we assist with property financing for non-resident buyers?",
    a: "We work with partner banks and mortgage institutions that offer diaspora mortgages, and guide you through eligibility and documentation.",
  },
];

// Placeholder partner wordmarks: swap for BOJA's real developer partners.
export const partners = ["LAGOONCREST", "Meridian", "IROKO", "ATLANTIC", "Ọ̀PẸ́ HOMES"];
