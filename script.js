// --- Product Database ---
const products = [
  { title: "Ribbon Ring", 
    price: "$99.99", 
    image: "https://images.unsplash.com/photo-1770721478216-3e5dbbe8dcc2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1750891892189-cae53172de09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: "4.5",
    isBestSeller: true },
  { title: "Frame",
    price: "$62", 
    image: "https://images.unsplash.com/photo-1771551962347-532f35d630ff?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1565706359762-e9c05485fd88?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: "3.2",
    discount: "Save 15%",
    isBestSeller: true }, 
  { title: "Gift Card", 
    price: "$100", 
    image: "https://plus.unsplash.com/premium_photo-1772065874102-2cfc09013300?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://plus.unsplash.com/premium_photo-1728670182314-a8aefbb9d53c?q=80&w=1647&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: "4",
    discount: "Save 15%",
    isBestSeller: true  },
  { title: "Red Jacket", 
    price: "$79.99", 
    image: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1742151103941-d35daa354609?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVkJTIwamFja2V0fGVufDB8fDB8fHww",
    stars: "4",
    discount: "Save 15%",
    isBestSeller: true  },
  { title: "Blue T Shirt",
    price: "$19.99", 
    image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://plus.unsplash.com/premium_photo-1770559428079-ac7bfb8eea78?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: "5",
    isBestSeller: true  },
  { title: "Pink Sweater", 
    price: "$50", 
    image: "https://images.unsplash.com/photo-1520591799316-6b30425429aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://plus.unsplash.com/premium_photo-1715876268791-c5a3a00ed45b?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: "4.3",
    isBestSeller: true  },
  { title: "Jeans Dress", 
    price: "$80", 
    image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://plus.unsplash.com/premium_photo-1675877946243-bc3f83e65afe?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: "4.7",
    isBestSeller: true  },
  { title: "Hamburger", 
    price: "$5.99", 
    image: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=999&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: "3.8",
    isBestSeller: true  },
  { title: "Pizza", 
    price: "$14.99", 
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: "2.5",
    isBestSeller: true  },
  { title: "BMW", 
    price: "$75.000", 
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageHover: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=1215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stars: "5",
    isBestSeller: true  },
]

const carouselContainer = document.getElementById("carouselContainer");
const template = document.getElementById("card-template");
const scrollIndicator = document.getElementById("scroll-indicator");

// Creates the star rating system using SVGs
function generateStars(rating) {
  let starsHtml = '';
  const totalStars = 5;
  const numericRating = parseFloat(rating);

  for (let i = 1; i <= totalStars; i++) {
    let fillPercentage = 0;

    if (i <= numericRating) {
      fillPercentage = 100;
    } else if (i - 1 < numericRating && i > numericRating) {
      fillPercentage = (numericRating % 1) * 100;
    } else {
      fillPercentage = 0;
    }

    // Unique ID for each gradient so they don't overwrite each other
    const gradientId = `grad-${Math.random().toString(5)}`;

    starsHtml += `
      <svg class="w-4 h-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${gradientId}">
            <stop offset="${fillPercentage}%" stop-color="black" />
            <stop offset="${fillPercentage}%" stop-color="#D1D5DB" /> </linearGradient>
        </defs>
        <path fill="url(#${gradientId})" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    `;
  }
  return starsHtml;
}

// --- Card Rendering Loop ---
products.forEach((product, index) => {
  const clone = template.content.cloneNode(true);
  const cardContainer = clone.querySelector('div');

  //create a secondary image for the "hover" effect
  const imgContainer = document.createElement("div");
  imgContainer.className = "relative w-full aspect-square mb-4 overflow-hidden rounded-[10px]";

  const mainImg = clone.querySelector("img");
  mainImg.src = product.image;
  mainImg.alt = product.title;
  mainImg.className = "w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 relative z-10";

  const hoverImg = document.createElement("img");
  hoverImg.src = product.imageHover || product.image;
  hoverImg.alt = `${product.title} - view 2`;
  hoverImg.className = "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-0";

  // Badges: only show "Best Seller" or "Discount" if they actually exist in the data
  if (product.isBestSeller) {
    const bestSellerTag = document.createElement("span");
    bestSellerTag.textContent = "BEST SELLER";
    bestSellerTag.className = "absolute top-2 left-2 z-20 bg-white border font-neue text-[10px] font-normal px-2 py-1 rounded-[100px] uppercase tracking-[0.06em]";
    imgContainer.appendChild(bestSellerTag);
  }

  if (product.discount) {
    const discountTag = document.createElement("span");
    discountTag.textContent = product.discount;
    discountTag.className = "absolute top-2 right-2 z-20 font-neue bg-tag-green border border-black text-neutral-white text-[10px] font-normal px-2 py-1 rounded-[100px] tracking-[0.06em]";
    imgContainer.appendChild(discountTag);
  }

  imgContainer.appendChild(hoverImg);
  imgContainer.appendChild(mainImg);
  cardContainer.prepend(imgContainer);

  clone.querySelector("p#product-title").textContent = product.title;
  clone.querySelector("p#product-price").textContent = product.price;

  const starContainer = clone.querySelector(".product-stars");
  if (starContainer) {
    starContainer.innerHTML = generateStars(product.stars);
  }

  // --- Responsive Visibility Logic ---
  // Card width/gap on md+ comes from the .product-card / #carouselContainer rules in input.css
  const baseClasses = "product-card w-full group cursor-pointer transition-[opacity,max-height] ease-in-out duration-500";

  if (index > 3) {
    cardContainer.className = `${baseClasses} hidden-product opacity-0 max-h-0 overflow-hidden pointer-events-none md:opacity-100 md:max-h-none md:overflow-visible md:pointer-events-auto`;
  } else {
    cardContainer.className = `${baseClasses} opacity-100 max-h-none`;
  }
  carouselContainer.appendChild(clone);
});

// =====================================================================
// Scroll & Interaction (md and up)
// - mouse wheel over the carousel  -> one card per notch
// - click & drag on the cards      -> free scroll, snaps to a card on release
// - custom scrollbar               -> click to jump, drag the thumb (keeps grab offset)
// - trackpad / touch               -> native scrolling + CSS scroll-snap
// =====================================================================
const carousel = document.getElementById("carouselContainer");
const scrollBar = document.getElementById("carousel-scroll");
const indicator = document.getElementById("scroll-indicator");
const cards = Array.from(carousel.querySelectorAll(".product-card"));
const desktopQuery = window.matchMedia("(min-width: 48rem)"); // Tailwind `md`

const DRAG_THRESHOLD = 6;   // px before a mousedown counts as a drag (keeps clicks working)
const WHEEL_STEP = 50;      // accumulated deltaY needed to move one card
const WHEEL_LOCK = 150;     // ms between wheel steps

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const isCarouselMode = () => desktopQuery.matches;
const maxScroll = () => Math.max(0, carousel.scrollWidth - carousel.clientWidth);

// scrollLeft of each card's start edge, clamped to the scrollable range
function cardPositions() {
  const base = carousel.getBoundingClientRect().left - carousel.scrollLeft;
  const max = maxScroll();
  return cards.map(card => clamp(card.getBoundingClientRect().left - base, 0, max));
}

function nearestIndex(positions, x) {
  let best = 0;
  positions.forEach((pos, i) => {
    if (Math.abs(pos - x) < Math.abs(positions[best] - x)) best = i;
  });
  return best;
}

// last card that can actually be reached as a snap point (the ones after it share the end position)
function lastReachableIndex(positions) {
  const end = positions[positions.length - 1];
  const i = positions.findIndex(pos => pos >= end - 1);
  return i === -1 ? positions.length - 1 : i;
}

// --- Scroll snap on/off ------------------------------------------------
// CSS scroll-snap fights programmatic scrolling (it re-snaps on every scrollLeft
// change), so it is turned off while the script drives the scroll and restored
// once the scroll settles. `snapGeneration` invalidates stale restores.
let snapGeneration = 0;
let wheelTargetIndex = null; // card the wheel is heading to; null = read it from scrollLeft

function disableSnap() {
  snapGeneration++;
  wheelTargetIndex = null;
  carousel.style.scrollSnapType = "none";
}

function onScrollSettled(callback) {
  let idleTimer;
  const done = () => {
    carousel.removeEventListener("scroll", onScroll);
    clearTimeout(idleTimer);
    callback();
  };
  const onScroll = () => {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(done, 100);
  };
  carousel.addEventListener("scroll", onScroll, { passive: true });
  idleTimer = setTimeout(done, 150); // also covers a scrollTo that produces no scroll event
}

// Smoothly scroll to `target` (a card start) with snap off, then hand control back to CSS snap
function scrollToPosition(target) {
  const generation = ++snapGeneration;
  const restore = () => {
    if (generation === snapGeneration) carousel.style.scrollSnapType = "";
  };

  if (Math.abs(carousel.scrollLeft - target) < 1) {
    restore();
    return;
  }
  carousel.style.scrollSnapType = "none";
  carousel.scrollTo({ left: target, behavior: "smooth" });
  onScrollSettled(restore);
}

// Land on the card nearest to `x` (drag / scrollbar releases)
function settleAt(x) {
  wheelTargetIndex = null;
  const positions = cardPositions();
  scrollToPosition(positions[nearestIndex(positions, x)]);
}

// --- Scrollbar indicator -----------------------------------------------
let indicatorFrame = null;

function updateIndicator() {
  indicatorFrame = null;
  const max = maxScroll();
  const travel = scrollBar.clientWidth - indicator.offsetWidth;
  if (max <= 0 || travel <= 0) {
    indicator.style.left = "0px";
    return;
  }
  const ratio = clamp(carousel.scrollLeft / max, 0, 1);
  indicator.style.left = `${ratio * travel}px`;
}

function scheduleIndicatorUpdate() {
  if (indicatorFrame === null) indicatorFrame = requestAnimationFrame(updateIndicator);
}

carousel.addEventListener("scroll", scheduleIndicatorUpdate, { passive: true });
window.addEventListener("resize", () => {
  wheelTargetIndex = null;
  scheduleIndicatorUpdate();
});
if ("ResizeObserver" in window) {
  new ResizeObserver(scheduleIndicatorUpdate).observe(carousel);
}
updateIndicator();

// --- Mouse wheel -> horizontal, one card per notch ----------------------
let wheelAccumulated = 0;
let wheelResetTimer = null;
let wheelTargetUntil = 0;
let lastWheelStep = 0;

carousel.addEventListener("wheel", (event) => {
  if (!isCarouselMode() || event.ctrlKey || event.shiftKey) return;
  // horizontal gesture (trackpad, shift+wheel): let the browser handle it natively
  if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
  if (maxScroll() <= 0) return;

  const unit = event.deltaMode === 1 ? 40 : event.deltaMode === 2 ? 800 : 1;
  const deltaY = event.deltaY * unit;
  const direction = deltaY > 0 ? 1 : -1;
  const now = performance.now();
  const positions = cardPositions();
  const lastIndex = lastReachableIndex(positions);

  // where a scroll already in flight is heading; otherwise where we are now
  if (wheelTargetIndex === null || now > wheelTargetUntil) {
    wheelTargetIndex = nearestIndex(positions, carousel.scrollLeft);
  }

  // at either end: don't capture the wheel, so the page keeps scrolling normally
  if ((direction > 0 && wheelTargetIndex >= lastIndex) || (direction < 0 && wheelTargetIndex <= 0)) {
    wheelAccumulated = 0;
    return;
  }

  event.preventDefault();

  if (Math.sign(wheelAccumulated) !== direction) wheelAccumulated = 0;
  wheelAccumulated += deltaY;
  clearTimeout(wheelResetTimer);
  wheelResetTimer = setTimeout(() => { wheelAccumulated = 0; }, 200);

  if (Math.abs(wheelAccumulated) < WHEEL_STEP || now - lastWheelStep < WHEEL_LOCK) return;

  wheelAccumulated = 0;
  lastWheelStep = now;
  wheelTargetIndex = clamp(wheelTargetIndex + direction, 0, lastIndex);
  wheelTargetUntil = now + 600;
  scrollToPosition(positions[wheelTargetIndex]);
}, { passive: false });

// --- Click & drag on the cards -----------------------------------------
let drag = null;
let suppressNextClick = false;

carousel.addEventListener("pointerdown", (event) => {
  if (!isCarouselMode() || event.pointerType === "touch" || event.button !== 0) return;
  drag = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startScroll: carousel.scrollLeft,
    lastX: event.clientX,
    lastTime: performance.now(),
    velocity: 0,
    moved: false,
  };
});

carousel.addEventListener("pointermove", (event) => {
  if (!drag || event.pointerId !== drag.pointerId) return;
  if (!(event.buttons & 1)) { // button was released somewhere we never heard about
    finishDrag();
    return;
  }

  if (!drag.moved) {
    if (Math.abs(event.clientX - drag.startX) < DRAG_THRESHOLD) return;
    drag.moved = true;
    // start measuring from here so the first frame doesn't jump
    drag.startX = event.clientX;
    drag.startScroll = carousel.scrollLeft;
    carousel.setPointerCapture(event.pointerId);
    carousel.classList.add("is-dragging");
    disableSnap();
  }

  const now = performance.now();
  const elapsed = now - drag.lastTime;
  if (elapsed > 0) {
    const instant = (event.clientX - drag.lastX) / elapsed; // px per ms
    drag.velocity = drag.velocity * 0.6 + instant * 0.4;
    drag.lastX = event.clientX;
    drag.lastTime = now;
  }

  carousel.scrollLeft = drag.startScroll - (event.clientX - drag.startX);
});

// Ends the current drag (if any): clears the drag state and lands on a card
function finishDrag() {
  if (!drag) return;
  const { moved, velocity, lastTime } = drag;
  drag = null;
  if (!moved) return;

  carousel.classList.remove("is-dragging"); // pointer capture is released by the browser itself

  // a drag should not count as a click on the product
  suppressNextClick = true;
  setTimeout(() => { suppressNextClick = false; }, 0);

  // fling: project the release velocity a little ahead, then land on a card
  const stale = performance.now() - lastTime > 100;
  const projected = carousel.scrollLeft - (stale ? 0 : clamp(velocity, -2.5, 2.5)) * 120;
  settleAt(projected);
}

function endDrag(event) {
  if (drag && event.pointerId === drag.pointerId) finishDrag();
}

carousel.addEventListener("pointerup", endDrag);
carousel.addEventListener("pointercancel", endDrag);
carousel.addEventListener("lostpointercapture", endDrag);
carousel.addEventListener("click", (event) => {
  if (suppressNextClick) {
    event.preventDefault();
    event.stopPropagation();
  }
}, true);
// no text selection / native image drag while a drag may be starting
carousel.addEventListener("selectstart", (event) => { if (drag) event.preventDefault(); });
carousel.addEventListener("dragstart", (event) => event.preventDefault());

// --- Custom scrollbar: click to jump, drag the thumb --------------------
let barDrag = null;

function scrollLeftForBarX(clientX, grabOffset) {
  const rect = scrollBar.getBoundingClientRect();
  const travel = rect.width - indicator.offsetWidth;
  if (travel <= 0) return 0;
  const thumbLeft = clamp(clientX - rect.left - grabOffset, 0, travel);
  return (thumbLeft / travel) * maxScroll();
}

scrollBar.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "mouse" && event.button !== 0) return;
  event.preventDefault();

  const thumb = indicator.getBoundingClientRect();
  const onThumb = event.clientX >= thumb.left && event.clientX <= thumb.right;
  barDrag = {
    pointerId: event.pointerId,
    startX: event.clientX,
    // grabbing the thumb keeps the point you grabbed under the cursor; clicking the track centers it
    grabOffset: onThumb ? event.clientX - thumb.left : thumb.width / 2,
    moved: false,
  };
  scrollBar.setPointerCapture(event.pointerId);

  if (!onThumb) settleAt(scrollLeftForBarX(event.clientX, barDrag.grabOffset));
});

scrollBar.addEventListener("pointermove", (event) => {
  if (!barDrag || event.pointerId !== barDrag.pointerId) return;
  if (!barDrag.moved) {
    if (Math.abs(event.clientX - barDrag.startX) < 3) return; // ignore click jitter
    barDrag.moved = true;
    disableSnap();
  }
  carousel.scrollLeft = scrollLeftForBarX(event.clientX, barDrag.grabOffset);
});

function endBarDrag(event) {
  if (!barDrag || event.pointerId !== barDrag.pointerId) return;
  const { moved } = barDrag;
  barDrag = null;
  if (moved) settleAt(carousel.scrollLeft);
}

scrollBar.addEventListener("pointerup", endBarDrag);
scrollBar.addEventListener("pointercancel", endBarDrag);
scrollBar.addEventListener("lostpointercapture", endBarDrag);

// --- "Show More" button (mobile only) ------------------------------------
const showMoreBtn = document.getElementById("showMoreBtn");

showMoreBtn.addEventListener("click", () => {
  const hiddenProducts = document.querySelectorAll(".hidden-product");
  hiddenProducts.forEach(product => {
    product.classList.add("is-open");          // back into the grid (display: none -> block)
    void product.offsetHeight;                 // let the browser see the collapsed state first
    product.classList.remove("opacity-0", "max-h-0", "pointer-events-none");
    product.classList.add("opacity-100");      // .hidden-product.opacity-100 animates max-height/opacity
  });

  // Remove the button after use to clean up the UI
  showMoreBtn.parentElement.classList.add("hidden");
});
