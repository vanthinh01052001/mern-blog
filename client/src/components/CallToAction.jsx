import { Button } from "flowbite-react";
import React from "react";
import bannerAVT from "../assets/img/banner-avt.JPG";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CallToAction() {
  const {t} = useTranslation("translation", {
    keyPrefix: "callToAction"
  })
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">{t("goMyProfile")}</h2>
        <Link to="https://github.com/vanthinh01052001">
          <Button
            gradientDuoTone="purpleToPink"
            outline
            className="w-full my-4"
          >
            {t('github')}
          </Button>
        </Link>
        <Link to="https://www.linkedin.com/in/mai-v%C4%83n-thinh-b24681288/">
          <Button gradientDuoTone="purpleToPink" className="w-full">
            {t('linkedin')}
          </Button>
        </Link>
      </div>
      <div className="p-7 flex-1">
        <img src={bannerAVT} alt="bannerAVT" className="rounded-lg" />
      </div>
    </div>
  );
}
