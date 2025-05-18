'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/MySidebar';
import { SidebarProvider } from '@/components/SidebarContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans antialiased ${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}
      >
        <SidebarProvider>
          {/* Fixed Header */}
          <Header className="fixed top-0 left-0 right-0 z-50" />

          {/* Sidebar */}
          <Sidebar />

          {/* Main content with padding for header/footer */}
          <main className="flex-1 pt-16 pb-16 lg:pl-64 overflow-auto">
            {children}
          </main>

          {/* Fixed Footer */}
          <Footer className="fixed bottom-0 left-0 right-0 z-30" />
        </SidebarProvider>
      </body>
    </html>
  );
}
