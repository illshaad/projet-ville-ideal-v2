import "../styles/globals.css";
import { DataCityProvider } from "../context/context";

function MyApp({ Component, pageProps }) {
  return (
    <DataCityProvider>
      <Component {...pageProps} />
    </DataCityProvider>
  );
}

export default MyApp;
