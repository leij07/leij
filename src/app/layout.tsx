import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anjiel Mae Niño | Portfolio',
  description: 'Personal portfolio of Anjiel Mae Niño - IT Student, Web Developer, and UI/UX Designer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground antialiased transition-colors duration-500`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>  
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
