import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initSmoothScroll from "./scripts/smoothScroll";
import initI18n from "./scripts/i18n";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initI18n();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initSmoothScroll();
