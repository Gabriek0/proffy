import './global.css';

export const metadata = {
  title: 'Proffy',
  description: 'Sua plataforma de estudos online',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
