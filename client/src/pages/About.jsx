import { useTranslation } from "react-i18next";
import CV_Eng from "/CV_MaiVanThinh_Frontend.pdf";
import CV_Vi from "/CV_VanThinh_Frontend.pdf";
export default function About() {
  const { i18n } = useTranslation();
  console.log("lang", i18n.language);
  return (
    <div className="min-h-screen flex flex-col items-center">
      {i18n.language === "vi" && (
        <iframe
          src={CV_Vi}
          title="CV Mai Van Thinh"
          className="rounded w-[70%] min-h-screen"
        ></iframe>
      )}
      {i18n.language === "uk" && (
        <iframe
          src={CV_Eng}
          title="CV Mai Van Thinh"
          className="rounded w-[70%] min-h-screen"
        ></iframe>
      )}
    </div>
  );
}
