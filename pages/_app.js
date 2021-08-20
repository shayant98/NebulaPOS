import "tailwindcss/tailwind.css";
import { Provider } from "next-auth/client";
import { ModalProvider } from "../context/ModalContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReceiptProvider } from "../context/ReceiptContext";
import { ThemeProvider, useTheme } from "../context/ThemeProvider";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const { toggleDarkMode } = useTheme();

  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ReceiptProvider>
          <ThemeProvider>
            <Component {...pageProps} />
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          </ThemeProvider>
        </ReceiptProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
