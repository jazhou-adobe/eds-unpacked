/**
 * Hero: cinematic scene builder.
 * - wraps an authored code block in a dark editor window (title bar, line numbers)
 * - staggers the headline entrance by wrapping words in spans
 * - adds aurora orbs, a scroll hint, and a living edge-network canvas:
 *   drifting nodes, proximity links, and coral data pulses traveling between
 *   nodes — the delivery network as the hero backdrop.
 * All effects are additive; content works without them.
 */

function wrapWords(h1) {
  let index = 0;
  [...h1.childNodes].forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach((part) => {
        if (!part.trim()) {
          frag.append(part);
          return;
        }
        const span = document.createElement('span');
        span.className = 'w';
        span.style.setProperty('--wi', index);
        index += 1;
        span.textContent = part;
        frag.append(span);
      });
      node.replaceWith(frag);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const span = document.createElement('span');
      span.className = 'w';
      span.style.setProperty('--wi', index);
      index += 1;
      node.replaceWith(span);
      span.append(node);
    }
  });
}

function decorateCodeWindow(block) {
  const pre = block.querySelector('pre');
  if (!pre) return;
  const win = document.createElement('div');
  win.className = 'hero-code-window';
  win.innerHTML = `
    <div class="hero-code-bar">
      <span class="hero-code-dots"><i></i><i></i><i></i></span>
      <span class="hero-code-file">blocks/hero/hero.js</span>
    </div>`;
  pre.replaceWith(win);
  win.append(pre);

  const code = pre.querySelector('code');
  if (code) {
    code.innerHTML = code.innerHTML
      .split('\n')
      .map((line) => `<span class="line">${line.trimEnd() || ' '}</span>`)
      .join('');
  }
}

/** The edge network: drifting nodes, proximity links, traveling data pulses. */
function startNetwork(canvas) {
  const ctx = canvas.getContext('2d');
  const LINK_DIST = 150;
  let nodes = [];
  let pulses = [];
  let width = 0;
  let height = 0;
  let raf = null;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(Math.floor((width * height) / 24000), 70);
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      r: Math.random() * 1.5 + 0.8,
    }));
    pulses = [];
  }

  function nearestNeighbor(node) {
    let best = null;
    let bestDist = LINK_DIST;
    nodes.forEach((other) => {
      if (other === node) return;
      const d = Math.hypot(node.x - other.x, node.y - other.y);
      if (d < bestDist) {
        best = other;
        bestDist = d;
      }
    });
    return best;
  }

  function frame() {
    ctx.clearRect(0, 0, width, height);

    // links
    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j += 1) {
        const b = nodes[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK_DIST) {
          ctx.strokeStyle = `rgba(160, 157, 150, ${(1 - d / LINK_DIST) * 0.16})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // spawn pulses: data hopping between edge nodes
    if (pulses.length < 7 && Math.random() < 0.035) {
      const from = nodes[Math.floor(Math.random() * nodes.length)];
      const to = from && nearestNeighbor(from);
      if (to) pulses.push({ from, to, t: 0 });
    }

    // pulses: coral packets with a soft halo
    pulses = pulses.filter((p) => p.t <= 1);
    pulses.forEach((p) => {
      p.t += 0.014;
      const x = p.from.x + (p.to.x - p.from.x) * p.t;
      const y = p.from.y + (p.to.y - p.from.y) * p.t;
      ctx.fillStyle = 'rgba(204, 120, 92, 0.16)';
      ctx.beginPath();
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(204, 120, 92, 0.95)';
      ctx.beginPath();
      ctx.arc(x, y, 2.4, 0, Math.PI * 2);
      ctx.fill();
    });

    // nodes
    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > width) n.vx *= -1;
      if (n.y < 0 || n.y > height) n.vy *= -1;
      ctx.fillStyle = 'rgba(160, 157, 150, 0.5)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    });

    raf = requestAnimationFrame(frame);
  }

  function stop() {
    if (raf) cancelAnimationFrame(raf);
    raf = null;
  }

  function start() {
    if (!raf) raf = requestAnimationFrame(frame);
  }

  resize();
  // bootstrap re-measure: sections are display:none during decoration, and
  // observer delivery is frame-driven (unreliable until first paint)
  setTimeout(resize, 100);
  setTimeout(resize, 600);

  // sections are display:none during decoration — re-measure whenever the
  // canvas gets real layout (ResizeObserver also covers window resizes)
  const ro = new ResizeObserver(() => {
    stop();
    resize();
  });
  ro.observe(canvas);

  // only animate while the hero is on screen
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => (entry.isIntersecting ? start() : stop()));
  });
  io.observe(canvas);

  start();
}

/**
 * Fixed, page-level looping video background: it stays put while the content
 * scrolls over it, like a commercial landing page. Autoplay, muted, cover-fit,
 * with a poster for instant paint. Honors reduced-motion and Save-Data by
 * showing the poster only; falls back to the poster if the video errors.
 */
function buildBackdropMedia(src, poster) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection && navigator.connection.saveData;

  if (reduced || saveData) {
    const img = document.createElement('img');
    img.className = 'page-video-media';
    img.src = poster;
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    return img;
  }

  const video = document.createElement('video');
  video.className = 'page-video-media';
  video.src = src;
  video.poster = poster;
  video.loop = true;
  video.muted = true;
  video.defaultMuted = true;
  video.autoplay = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.tabIndex = -1;
  video.playbackRate = 0.6;
  video.setAttribute('muted', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('aria-hidden', 'true');

  const play = () => {
    video.playbackRate = 0.6;
    const p = video.play();
    if (p && p.catch) p.catch(() => {});
  };
  video.addEventListener('loadeddata', play, { once: true });
  video.addEventListener('error', () => {
    const img = document.createElement('img');
    img.className = 'page-video-media';
    img.src = poster;
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');
    video.replaceWith(img);
  }, { once: true });

  return video;
}

function addScrollHint(section) {
  if (!document.body.classList.contains('home')) return;
  const hint = document.createElement('div');
  hint.className = 'hero-scroll';
  hint.setAttribute('aria-hidden', 'true');
  hint.textContent = 'Scroll';
  section.append(hint);
}

function setupVideoBackground(block, section, link) {
  const src = link.href;
  const poster = src.replace(/\.\w+$/, '-poster.jpg');

  const cell = link.closest('div');
  if (cell) cell.remove();

  block.classList.add('hero-has-video');
  document.body.classList.add('has-video-bg');

  const backdrop = document.createElement('div');
  backdrop.className = 'page-video-bg';
  backdrop.setAttribute('aria-hidden', 'true');
  backdrop.append(buildBackdropMedia(src, poster));
  document.body.prepend(backdrop);

  addScrollHint(section);
}

export default function decorate(block) {
  const h1 = block.querySelector('h1');
  if (h1) wrapWords(h1);

  const section = block.closest('.section');

  // looping video background mode (an authored .mp4/.webm link)
  const videoLink = block.querySelector('a[href$=".mp4"], a[href$=".webm"]');
  if (videoLink && section) {
    setupVideoBackground(block, section, videoLink);
    return;
  }

  decorateCodeWindow(block);

  const cinematic = document.body.classList.contains('home') && section;
  if (!cinematic) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!reduced.matches) {
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    section.prepend(canvas);
    startNetwork(canvas);
  }

  ['coral', 'teal'].forEach((tone) => {
    const orb = document.createElement('div');
    orb.className = `hero-orb hero-orb-${tone}`;
    orb.setAttribute('aria-hidden', 'true');
    block.prepend(orb);
  });

  addScrollHint(section);
}
