import { Poppins } from 'next/font/google';
import './global.css';

export const metadata = {
  title: 'Proffy',
  description: 'Sua plataforma de estudos online',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: 'normal',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-background">{children}</body>
    </html>
  );
}
