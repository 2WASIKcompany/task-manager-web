import { Nunito } from "@next/font/google";

import "../styles/style.scss";

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} h-screen w-screen bg-darkest font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
