// import "./globals.css";
import FirstNavbar from "@/components/Navbars/FirstNavbar";
import SecondNavbar from "@/components/Navbars/SecondNavbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Box, Divider } from "@mui/material";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ px: 20 }}>
          <div>
            <FirstNavbar />
            <Divider variant="middle" />
            <SecondNavbar />
          </div>
        </Box>

        {children}
      </body>
    </html>
  );
}
