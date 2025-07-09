import "@/styles/globals.css";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "@/components/Layout";
import { CartProvider } from "@/context/CartContext";
import { CartServiceProvider } from "@/context/CartServiceContext";

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <CartServiceProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </CartServiceProvider>
  );
}
