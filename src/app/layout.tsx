import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '工程控制论学习笔记 - 钱学森思想与AI进化应用',
  description: '系统学习钱学森《工程控制论》，探索控制论在AI助手进化中的应用，记录学习过程与思考。',
  keywords: ['工程控制论', '钱学森', '控制论', 'AI进化', '学习笔记', '博客'],
  authors: [{ name: 'Sniper1211' }],
  creator: 'Sniper1211',
  publisher: 'Sniper1211',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://engineering-cybernetics-blog.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://engineering-cybernetics-blog.vercel.app',
    title: '工程控制论学习笔记',
    description: '系统学习钱学森《工程控制论》，探索控制论在AI助手进化中的应用',
    siteName: '工程控制论学习笔记',
  },
  twitter: {
    card: 'summary_large_image',
    title: '工程控制论学习笔记',
    description: '系统学习钱学森《工程控制论》，探索控制论在AI助手进化中的应用',
    creator: '@Sniper1211',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
