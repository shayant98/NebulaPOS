import "tailwindcss/tailwind.css";
import { Provider } from "next-auth/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReceiptProvider } from "../context/ReceiptContext";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ReceiptProvider>
          <ThemeProvider enableSystem={true} attribute="class">
            <Component {...pageProps} />
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
          </ThemeProvider>
        </ReceiptProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
