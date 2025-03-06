import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Ronsare Consultancy Services | IT & Healthcare Staffing Solutions",
  description:
    "Ronsare Consultancy Services specializes in IT & healthcare staffing, providing top-tier recruitment, workforce solutions, and consulting services tailored to your business needs.",
  keywords:
    "IT staffing, healthcare staffing, recruitment agency, job placement, tech hiring, consulting services, workforce solutions",
  author: "Ronsare Consultancy Services",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Ronsare Consultancy Services | IT & Healthcare Staffing Solutions",
    description:
      "Providing industry-leading IT and healthcare staffing solutions. Find top talent and workforce solutions for your business with Ronsare Consultancy Services.",
    url: "https://ronsare.com", // Replace with your actual URL
    type: "website",
    images: [
      {
        url: "https://ronsare.com/logo.png", // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "Ronsare Consultancy Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RonsareConsulting", // Replace with your actual Twitter handle
    title: "Ronsare Consultancy Services | IT & Healthcare Staffing Solutions",
    description:
      "Top-rated IT & healthcare staffing solutions. Hire the best talent with Ronsare Consultancy Services.",
    image: "https://ronsare.com/logo.png", // Replace with actual Twitter image
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* SEO Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta name="viewport" content={metadata.viewport} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta
          property="og:image"
          content={metadata.openGraph.images[0].url}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={metadata.openGraph.images[0].alt} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Structured Data (JSON-LD) for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Ronsare Consultancy Services",
          "url": "https://ronsare.com",
          "logo": "https://ronsare.com/logo.png",
          "description": metadata.description,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-123-456-7890", // Replace with actual contact number
            "contactType": "customer service",
          },
          "sameAs": [
            "https://www.linkedin.com/company/ronsare", // Replace with actual social links
            "https://twitter.com/ronsare",
          ],
        }) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
