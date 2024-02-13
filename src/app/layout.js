
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-700 flex gap-20 text-lg'>{children}</body>
    </html>
  );
}
