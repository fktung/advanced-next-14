const cookieObj =
  typeof window === "undefined"
    ? require("next/headers")
    : require("universal-cookie");

import en from "./lang/en.json";
import ae from "./lang/ae.json";
import da from "./lang/da.json";
import de from "./lang/de.json";
import el from "./lang/el.json";
import es from "./lang/es.json";
import fr from "./lang/fr.json";
import hu from "./lang/hu.json";
import it from "./lang/it.json";
import ja from "./lang/ja.json";
import pl from "./lang/pl.json";
import pt from "./lang/pt.json";
import ru from "./lang/ru.json";
import sv from "./lang/sv.json";
import tr from "./lang/tr.json";
import zh from "./lang/zh.json";
const langObj: any = {
  en,
  ae,
  da,
  de,
  el,
  es,
  fr,
  hu,
  it,
  ja,
  pl,
  pt,
  ru,
  sv,
  tr,
  zh,
};

const getLang = () => {
  let lang = null;
  if (typeof window !== "undefined") {
    // Client-side
    const cookies = new cookieObj();
    lang = cookies.get("i18nextLng");
  } else {
    const cookies = cookieObj.cookies();
    lang = cookies.get("i18nextLng")?.value;
  }
  return lang;
};

export const getTranslation = () => {
  const lang = getLang();
  const data: any = langObj[lang || "en"];

  const t = (key: string) => {
    return data[key] ? data[key] : key;
  };

  const initLocale = (themeLocale: string) => {
    const lang = getLang();
    i18n.changeLanguage(lang || themeLocale);
  };

  const i18n = {
    language: lang,
    changeLanguage: (lang: string) => {
      const cookies = new cookieObj.default(null, { path: "/" });
      cookies.set("i18nextLng", lang);
    },
  };

  return { t, i18n, initLocale };
};
