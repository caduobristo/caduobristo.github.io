let currentAnimationId = null;

function cancelAnimation() {
  if (currentAnimationId) {
    cancelAnimationFrame(currentAnimationId);
    currentAnimationId = null;
  }
}

// Allow user to break out of programmatic scroll with wheel or touch
window.addEventListener("wheel", cancelAnimation, { passive: true });
window.addEventListener("touchmove", cancelAnimation, { passive: true });

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function smoothScrollToElement(targetElement, targetId, duration = 750) {
  cancelAnimation();

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const targetRect = targetElement.getBoundingClientRect();
  const targetY = targetRect.top + startY;
  const distance = targetY - startY;

  if (Math.abs(distance) < 2) {
    if (targetId && window.history && window.history.pushState) {
      window.history.pushState(null, null, targetId);
    }
    return;
  }

  let startTime = null;

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, Math.round(startY + distance * ease));

    if (elapsed < duration) {
      currentAnimationId = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      currentAnimationId = null;
      if (targetId && window.history && window.history.pushState) {
        window.history.pushState(null, null, targetId);
      }
    }
  }

  currentAnimationId = requestAnimationFrame(step);
}

export default function initSmoothScroll() {
  document.addEventListener("click", (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || href === "#" || href === "#!") return;

    let targetElement = null;
    try {
      targetElement = document.querySelector(href);
    } catch (err) {
      return;
    }

    if (targetElement) {
      e.preventDefault();
      smoothScrollToElement(targetElement, href);
    }
  });
}
