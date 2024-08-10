import { useTranslation } from "react-i18next";
import CV_Eng from "/Resum_MaiVanThinh_Frontend_English.pdf";
import CV_Vi from "/Resum_MaiVanThinh_Frontend_Vi.pdf";
import Header from "../components/Header";
export default function About() {
  const { i18n } = useTranslation();
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center">
        {i18n.language === "vi" && (
          <iframe
            src={CV_Vi}
            title="CV Mai Van Thinh"
            className="rounded w-[70%] min-h-screen mt-20"
          ></iframe>
        )}
        {i18n.language === "uk" && (
          <iframe
            src={CV_Eng}
            title="CV Mai Van Thinh"
            className="rounded w-[70%] min-h-screen mt-20"
          ></iframe>
        )}
      </div>
    </>
  );
}
