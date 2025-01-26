import { Marquee } from "./marquee-component/marquee";

const marqueeElems = document.querySelectorAll("[data-marquee='wrap']");
marqueeElems.forEach((marqueeElem) => {
  const marquee = new Marquee(marqueeElem);
});
