import { Marquee } from "./marquee-component/marquee";
import { Cursor } from "./helpers/cursor";

const marqueeElems = document.querySelectorAll("[data-marquee='wrap']");
marqueeElems.forEach((marqueeElem) => {
  const marquee = new Marquee(marqueeElem);
});

const customCursor = new Cursor();
