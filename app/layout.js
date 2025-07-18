import "./globals.css";
import { ToastProvider } from "./components/ui/toast";
import { ToastViewport } from "./components/ui/toast";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "The South London VA",
  description: "Your Virtual Assistant for Community Driven Founders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
        <ToastProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
}
