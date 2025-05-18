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
export const metadata = {
  title: 'Git Assistant',
  description: 'A modern Git assistant and developer tool interface built with Next.js, featuring sidebar navigation, persistent header/footer, and responsive design.',
  keywords: [
    'Git Assistant',
    'Next.js',
    'Developer Tools',
    'Geist Font',
    'Sidebar Layout',
    'Modern UI',
    'React',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Md. Sazzad Ahsan' }],
  creator: 'Md. Sazzad Ahsan',
  publisher: 'Md. Sazzad Ahsan',
  themeColor: '#ffffff',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Git Assistant',
    description: 'A powerful and user-friendly Git assistant powered by AI, designed with modern UI components.',
    url:`${process.env.PUBLIC_DOMAIN}`,
    siteName: 'Git Assistant',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Git Assistant Preview Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Git Assistant',
    description: 'An AI-powered Git helper with clean UI and intelligent features.',
    images: ['/opengraph-image.jpg'],
    creator: '@yourTwitterHandle',
  },
};


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
