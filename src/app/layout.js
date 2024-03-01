
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' bg-gray-300 flex flex-col justify-center items-center text-lg'>{children}</body>
    </html>
  );
}
