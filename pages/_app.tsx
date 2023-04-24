import { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { IntlProvider } from "react-intl";

import enUsMsg from "@/compiled-lang/en-US.json";
import koMsg from "@/compiled-lang/ko-KR.json";

export default function App({ Component, pageProps }: AppProps) {
  const [usersLocale, setUsersLocale] = useState("ko");
  const [translationsForUsersLocale, setTranslationsForUsersLocale] = useState(enUsMsg);

  useEffect(() => {
    const userAgentLocale = navigator.language;
    setUsersLocale(userAgentLocale);

    const messages = { en: enUsMsg, "en-US": enUsMsg, ko: koMsg, "ko-KR": koMsg }[usersLocale];
    setTranslationsForUsersLocale(messages);
  }, []);

  return (
    <IntlProvider defaultLocale="en" locale={usersLocale} messages={translationsForUsersLocale}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
