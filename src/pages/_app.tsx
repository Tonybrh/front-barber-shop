import "/src/styles/globals.css";
import type { AppProps } from "next/app";
import {GlobalStyle} from "/src/styles/global-style";
import { ThemeProvider } from '@mui/material/styles';
import theme from "/src/styles/theme";
export default function App({ Component, pageProps }: AppProps) {
  return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />;
            </ThemeProvider>
        </>
      )
}
