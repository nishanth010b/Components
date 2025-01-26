import gsap from "gsap";

export class Cursor {
  constructor() {
    document.body.style.cursor = "none";
    if (!matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }
    this.setup();
    this.animate();
  }

  setup() {
    this.cursor = document.createElement("div");
    this.cursor.style.position = "fixed";
    this.cursor.style.top = "0";
    this.cursor.style.left = "0";
    this.cursor.style.width = "14px";
    this.cursor.style.height = "14px";
    this.cursor.style.backgroundColor = "var(--swatch--yellow)";
    this.cursor.style.zIndex = "9999";
    //this.cursor.style.mixBlendMode = "difference";
    this.cursor.style.pointerEvents = "none";
    document.body.appendChild(this.cursor);

    gsap.set(this.cursor, { xPercent: -50, yPercent: -50 });
  }

  animate() {
    let xTo = gsap.quickTo(this.cursor, "x", { duration: 0.01, ease: "none" }),
      yTo = gsap.quickTo(this.cursor, "y", { duration: 0.01, ease: "none" });
    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }
}
