import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "./assets/images/up-arrow-hand-drawn-outline-svgrepo-com.svg";

import { useDispatch } from "react-redux";
import { changeMode } from "./redux/features/modes/modes";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";
// import cookies from "js-cookie";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import ContactPage from "./pages/ContactPage/ContactPage";
import MobileNav from "./components/UI/MobileNav/MobileNav";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

import { LIGHT_MODE, DARK_MODE, languages } from "./constants/const";

import "./assets/styles/reset.scss";
import "./assets/styles/global.scss";
import "./App.scss";
import WorningModal from "./components/UI/WorningModal/WarningModal";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          flName: "Karen Manasyan",
          hello: "Hello, my name is",
          home: "Home",
          about: "About",
          services: "Services",
          portfolio: "Portfolio",
          contact: "Contact",
          as: "As a",
          wd: "Web Developer",
          hpText:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur amet reprehenderit vero cum odit, earum temporibus voluptates sed soluta officiis alias consectetur natus neque quibusdam reiciendis provident quisquam cupiditate voluptas.",
          mam: "More About Me",
          am: "About Me",
          ikm: "I'm Karen Manasyan as a",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam qui esse sit consequatur dicta distinctio quo laborum nemo sequi vero, dolorum praesentium, nesciunt perferendis possimus totam reiciendis. Quisquam quae incidunt amet voluptatem eius. Nemo officiis facilis eveniet veritatis quos ea sit atque placeat vitae unde laudantium, sunt explicabo illo, ad iure assumenda, iste sequi maiores numquam architecto? Error totam est, quo dicta ducimus molestiae distinctio explicabo eos sunt numquam consectetur neque corrupti accusantium architecto, illo quae?",
          pi: "Personal Info",
          bd: "Birthday",
          wb: "Website",
          city: "City",
          cityName: "Yerevan, Armenia",
          email: "Email",
          phone: "Phone",
          fc: "Freelance",
          fcAns: "Not availabel",
          dowCV: "Download CV",
          hm: "Hire Me",
          skills: "Skills",
          ed: "Education",
          ex: "Experience",
          ut: "Utilized",
          ss: "Services",
          mcp: "My Complited Projects:",
          cm: "Contact Me",
          hyaq: "Have You Any Questions?",
          ys: "I'M AT YOUR SERVICE",
          cuo: "Call Us On",
          office: "Office",
          smae: "SEND ME AN EMAIL",
          ivrtm: "I'M VERY RESPONSIVE TO MESSAGES",
          sm: "Send Message",
          name: "Name",
          subject: "Subject",
          message: "Message",
          ed_title_b: "Bachelor In Software Enginering / NPUA",
          ed_title_ms: "Master In Software Enginering / NPUA",
          ed_title_eng: "4th level of English / Lezuneri tun",
          ed_des_b:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est voluptas, possimus, quos quisquam voluptatibus quae laborum quibusda",
          ed_des_ms:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis est voluptas, possimus, quos quisquam voluptatibus quae laborum quibusda",
          ed_des_eng: "some text",
          ex_pos: "Front-End Developer",
          ex_type: "Training / practice",
          services_title_mb: "Mobile",
          services_title_fc: "Free Consultation",
          services_desc_mb: "The service is not yet available",
          services_desc_fe:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus numquam voluptas, quaerat exercitationem earum et porro voluptatem beatae cupiditate mollitia possimus, consequatur illo repellat?",
          services_desc_be:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus numquam voluptas, quaerat exercitationem earum et porro voluptatem beatae cupiditate mollitia possimus, consequatur illo repellat?",
          services_desc_fc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus numquam voluptas, quaerat exercitationem earum et porro voluptatem beatae cupiditate mollitia possimus, consequatur illo repellat?",
          error_page_title: "OPPS! PAGE NOT FOUND",
          error_page_desc: "Sorry, the page you're looking for doesn't exist.",
          error_page_btn: "Return Home",
        },
      },
      am: {
        translation: {
          flName: "Կարեն Մանասյան",
          hello: "Բարև Ձեզ, իմ անունն է",
          home: "Գլխավոր",
          about: "Իմ մասին",
          services: "Ծառայություններ",
          portfolio: "Պորտֆոլիո",
          contact: "Հետադարձ կապ",
          as: "Որպես",
          wd: "Վեբ Ծրագրավորող",
          hpText:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur amet reprehenderit vero cum odit, earum temporibus voluptates sed soluta officiis alias consectetur natus neque quibusdam reiciendis provident quisquam cupiditate voluptas.",
          mam: "Ավելին իմ մասին",
          am: "Իմ մասին",
          ikm: "Ես Կարեն Մանասյանն եմ, որպես",
          desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam qui esse sit consequatur dicta distinctio quo laborum nemo sequi vero, dolorum praesentium, nesciunt perferendis possimus totam reiciendis. Quisquam quae incidunt amet voluptatem eius. Nemo officiis facilis eveniet veritatis quos ea sit atque placeat vitae unde laudantium, sunt explicabo illo, ad iure assumenda, iste sequi maiores numquam architecto? Error totam est, quo dicta ducimus molestiae distinctio explicabo eos sunt numquam consectetur neque corrupti accusantium architecto, illo quae?",
          pi: "Անձնական տեղեկատվություն",
          bd: "Ծննդյան օր",
          wb: "Վեբ կայք",
          city: "Հասցե",
          cityName: "Երևան, Հայաստան",
          email: "Էլ․ հասցե",
          phone: "Հեռախոսահամար",
          fc: "Ֆրիլանս",
          fcAns: "Անհասանելի է",
          dowCV: "Ներբեռնել CV",
          hm: "Վարձել",
          skills: "Հմտություններ",
          ed: "Կրթություն",
          ex: "Փորձ",
          ut: "Օգտագործված լեզուներ",
          ss: "Ծառայություններ",
          mcp: "Իմ ավարտած նախագծերը.",
          cm: "Հետադարձ կապ",
          hyaq: "Հարցեր ունե՞ք",
          ys: "Ես Ձեր ծառայության տակ եմ",
          cuo: "Զանգահարեք մեզ",
          office: "Գրասենյակ",
          smae: "Ուղղարկեք ինձ էլ․ նամակ",
          ivrtm: "Ես շատ արագ կարձագանքեմ Ձեր նամակներին",
          sm: "Ուղղարկել նամակ",
          name: "Անուն",
          subject: "Թեմա",
          message: "Նամակ",
          ed_title_b: "Բակալավր Ծրագրային ճարտարագիտություն / ՀԱՊՀ",
          ed_title_ms: "Մագիստրատուրա Ծրագրային ճարտարագիտություն / ՀԱՊՀ",
          ed_des_b: "բակալավր ներկայացում",
          ed_des_ms: "մագիստրատուրա ներկայացում",
          ed_title_eng: "Անգլերեն 4-րդ փուլ / Լեզուների տուն",
          ed_des_eng: "անգլերենի մասին ներկայացում",
          ex_pos: "Front-End Ծրագրավորող",
          ex_type: "Պարապմունք / պրակտիկա",
          services_title_mb: "Բջջային հավելված",
          services_title_fc: "Անվճար խորհրդատվություն",
          services_desc_mb: "Ծառայությունը դեռ հասանելի չէ",
          services_desc_fe:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus numquam voluptas, quaerat exercitationem earum et porro voluptatem beatae cupiditate mollitia possimus, consequatur illo repellat?",
          services_desc_be:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus numquam voluptas, quaerat exercitationem earum et porro voluptatem beatae cupiditate mollitia possimus, consequatur illo repellat?",
          services_desc_fc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minus numquam voluptas, quaerat exercitationem earum et porro voluptatem beatae cupiditate mollitia possimus, consequatur illo repellat?",
          error_page_title: "Ooպաա! Էջը չի գտնվել",
          error_page_desc: "Ներեցեք, էջը, որը փնտրում եք, գոյություն չունի",
          error_page_btn: "Վերադառնալ գլխավոր էջ",
        },
      },
      ru: {
        translation: {
          flName: "Карен Манасян",
          hello: "Привет, меня зовут",
          home: "Главный",
          about: "О нас",
          services: "Услуги",
          portfolio: "Портфолио",
          contact: "Обратная связь",
          as: "As a",
          wd: "Web Developer",
          hpText:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur amet reprehenderit vero cum odit, earum temporibus voluptates sed soluta officiis alias consectetur natus neque quibusdam reiciendis provident quisquam cupiditate voluptas.",
        },
      },
    },
    lng: document.querySelector("html").lang,
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
  });

function App() {
  const dispatch = useDispatch();
  const lightIcon = <FontAwesomeIcon icon={faSun} />;
  const darkIcon = <FontAwesomeIcon icon={faMoon} />;
  const [mode, setMode] = useState(LIGHT_MODE);
  const [isOpenModal, setIsOpenModal] = useState(true);
  const [warning, setWarning] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("flName");
    setWarning(localStorage.getItem("warning_cv"));
  }, [t]);

  function handleChangeMode() {
    setMode((prev) => {
      return prev === LIGHT_MODE ? DARK_MODE : LIGHT_MODE;
    });
    dispatch(changeMode(mode));
  }

  function handleClose() {
    setIsOpenModal(false);
    setWarning(true);
    localStorage.setItem("warning_cv", true);
  }

  return (
    <div className="App">
      <ScrollToTop
        smooth
        top="450"
        className="scroll-btn"
        component={<MySVG />}
      />
      <Sidebar />
      <MobileNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sevices" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <div
        className={`light-dark-mode ${
          mode === DARK_MODE
            ? "white-bg-color dark-text-color light-box-shadow"
            : "sidebar-dark-bg-color light-text-color dark-box-shadow"
        }`}
        onClick={handleChangeMode}
      >
        {mode === LIGHT_MODE ? (
          <div className="light-mode">{lightIcon}</div>
        ) : (
          <div className="dark-mode">{darkIcon}</div>
        )}
      </div>

      <div className="languages">
        <ul>
          {languages.map(({ code, country_code }) => {
            return (
              <li
                key={country_code}
                onClick={() => i18next.changeLanguage(code)}
              >
                <span class={`fi fi-${country_code}`}></span>
              </li>
            );
          })}
        </ul>
      </div>
      {isOpenModal && !warning && <WorningModal handleClose={handleClose} />}
    </div>
  );
}

export default App;
