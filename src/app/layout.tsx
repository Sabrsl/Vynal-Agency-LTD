import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Vynal Agency LTD - Gestion d'Image Digitale pour Personnalités Publiques",
  description: "Agence internationale haut de gamme spécialisée dans la gestion stratégique de l'image digitale, la réputation en ligne et le personal branding pour leaders d'opinion et personnalités publiques.",
  keywords: ["personal branding", "réputation en ligne", "image digitale", "agence prestige", "communication de crise", "influence"],
  authors: [{ name: "Vynal Agency LTD" }],
  openGraph: {
    title: "Vynal Agency LTD - Gestion d'Image Digitale",
    description: "Agence internationale spécialisée dans la gestion d'image digitale pour personnalités publiques",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vynal Agency LTD",
    description: "Agence internationale de gestion d'image digitale",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans antialiased bg-black text-silver-light">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
