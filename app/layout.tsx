import ClientOnly from "./components/ClientOnly";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";
import { nunito } from "./styles/font";

import dynamic from "next/dynamic";
import getCurrentUser from "./actions/getCurrentUser";
import AuthContext from "./providers/SessionProvider";

export const metadata = {
  title: "Flora Nativa Guayaquil",
  description: "Catalogo de Especies de Plantas Nativas de Guayaquil, Ecuador",
  icons: [
    {
      url: "/favicon.ico",
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: "/favicon.ico",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
  ],
};
const SiembraModal = dynamic(
  async () => await import("./components/modals/SiembraModal")
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="es">
      <body className={nunito.className}>
        <AuthContext>
          <ClientOnly>
            <ToasterProvider />
            {<SiembraModal />}
          </ClientOnly>
          <Header currentUser={currentUser} />
          <div className="my-auto">{children}</div>
          <ClientOnly>
            <Footer />
          </ClientOnly>
        </AuthContext>
      </body>
    </html>
  );
}
