import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Toka Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/skills">Skills</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}