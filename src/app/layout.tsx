import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["100", "400", "600", "800"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Dhairya Trivedi",
  description: "Engineer, musician and photographer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{
        fontFamily: `${montserrat.style.fontFamily}, sans-serif`,
        fontWeight: "200",
        fontSize: "14px",
      }}
    >
      <body
        style={{
          padding: 0,
          margin: 0,
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
