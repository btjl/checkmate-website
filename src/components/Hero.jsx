import styles from "../style";
import hero from "../assets/hero.png";
import { heroPicture } from "../assets";
import ButtonCTAWhatsapp from "./ButtonCTAWhatsapp";

import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../utils/motion";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row   justify-center py-2`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: "0.25" }}
        className={`self-center w-full sm:w-auto overflow-x-hidden sm:px-24 px-8`}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="items-center"
        >
          <div className="flex flex-col items-start ss:text-[64px] text-[40px] font-poppins font-bold text-checkShadeDark">
            <p className="leading-tight">{t("hero.title_1")}</p>
            <p>
              <span className="text-checkPrimary600 leading-tight">
                {t("hero.title_2")}
              </span>{" "}
              {t("hero.title_3")}
            </p>
            <p className="text-checkSecondaryYellow500 leading-tight">
              {t("hero.title_4")}
            </p>
          </div>

          <p
            className={`${styles.paragraph} max-w-md mt-5 text-checkBlack font-workSans text-[16px] ss:text-[16px]`}
          >
            {t("hero.paragraph")}
          </p>

          <div className=" mb-2 mt-5 sm:mt-8 cursor-pointer max-w-[12rem]">
            <ButtonCTAWhatsapp link="https://ref.checkmate.sg/add?utm_source=website&utm_medium=hero" />
          </div>
        </motion.div>
      </motion.div>

      <img src={heroPicture} alt="checkmate" />
    </section>
  );
};

export const heroTranslations = {
  en: {
    "hero.title_1": "We verify",
    "hero.title_2": "Scams",
    "hero.title_3": "and",
    "hero.title_4": "Misinformation",
    "hero.paragraph":
      "Not sure if a message can be trusted? Simply forward it to CheckMate and we’ll check it for you!",
  },
  cn: {
    "hero.title_1": "我们验证",
    "hero.title_2": "诈骗",
    "hero.title_3": "与",
    "hero.title_4": "误传",
    "hero.paragraph":
      "不确定消息是否可信？只需将其转发给 CheckMate，我们就会为您检查！",
  },
};

export default Hero;
