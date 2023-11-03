import { Cites } from "./components/cites/Cites";
import { SliderBanner } from "./components/sliderBanner/SliderBanner";
import { Services } from "./components/services/Services";
import { Tranding } from "./components/tranding/Tranding";
import { Awards } from "./components/awards/Awards";
import { Download } from "./components/download/Download";
import { Clients } from "./components/clients/Clients";
import { Advertising } from "./components/advertising/Advertising";
import { Venture } from "./components/venture/Venture";

export const Home = () => {
  return (
    <>
      {/* ====== cites start ====== */}
      <Cites />
      {/* ====== cites end ====== */}

      {/* ====== slider banner start ====== */}
      <SliderBanner />
      {/* ====== slider banner end ====== */}

      {/* ====== services start ====== */}
      <Services />
      {/* ====== services end ====== */}

      {/* ====== tranding offers start ====== */}
      <Tranding />
      {/* ====== tranding offers end ====== */}

      {/* ====== our latest awards start ====== */}
      <Awards />
      {/* ====== our latest awards end ====== */}

      {/* ====== download the app start ====== */}
      <Download />
      {/* ====== download the app end ====== */}

      {/* ====== what our clients say start ====== */}
      <Clients />
      {/* ====== what our clients say end ====== */}

      {/* ====== your perfect advertising partner start ====== */}
      <Advertising />
      {/* ====== your perfect advertising partner end ====== */}

      {/* ====== our venture start ====== */}
      <Venture />
      {/* ====== our venture end ====== */}
    </>
  );
};
