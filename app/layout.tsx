import '@/app/ui/global.css';
import { lusitana} from '@/app/ui/fonts';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana} antialiased`}>{children}</body>
    </html>
  );
}
