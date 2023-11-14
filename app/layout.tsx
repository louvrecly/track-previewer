import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from './components/nav-bar';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: '🎸 Track Previewer',
  description: 'Preview tracks available on Spotify',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className} suppressHydrationWarning>
        <CssBaseline />

        <NavBar />

        {children}
      </body>
    </html>
  );
}
