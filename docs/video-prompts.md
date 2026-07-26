# EDS Unpacked — Cinematic Hero Videos

Three scroll-driven landing page hero videos for Edge Delivery Services Unpacked.
Each is a **single continuous 8-second extreme-macro camera journey** — no cuts,
no scene changes. Generate each with ONE master prompt (do not generate per-beat
and stitch; that breaks the single-take constraint).

**The trilogy:** where it runs (Circuit City) → how fast it is (Fresnel) → why it's fast (Fiber).

## Global settings (all three videos)

- Length: exactly 8.0s, 24fps
- Master: 3840×2160 → ship 1920×1080 (AV1 primary, H.265 fallback), ≤3MB
- Poster frame: first frame of the take, JPEG ~60KB (used as eager LCP image)
- Audio: not required (muted autoplay on web)
- Generation: Veo 3 / Kling 2.x / Runway Gen-4. Expect 10–20 generations per
  keeper. Select on **continuity anchors**, not beauty.
- Rescue rule: if a take keeps breaking at one beat, move that beat earlier or
  later in time — never cut.
- Never generate text/numbers in-video (models mangle them). Overlay copy is
  added as HTML at scroll time, listed per video below.

---

## #2 — Circuit City

*The edge is a place. Your page lives 40ms from every user.*

**Story:** a PCB filmed as a nighttime metropolis. A coral data pulse races
through the city and arrives at its node.

### Beat map (single unbroken move)

| Time | Frame | Camera | Feature beat |
|---|---|---|---|
| 0.0–2.0s | Copper trace reads as wet asphalt highway at night | Low dolly forward, ~20cm above board | A request begins |
| 2.0–4.0s | Light pulses race past the lens down the trace canyon; one coral pulse pulls ahead | Accelerate, tracking the coral pulse | Content already moving — nothing renders it |
| 4.0–6.0s | Camera cranes up: full circuit city grid lit like a metropolis | Smooth ascending arc | The network — hundreds of PoPs |
| 6.0–8.0s | Glide down to one node; it flares coral as the pulse arrives; bokeh city behind | Descending push-in, settle | Delivery at the edge |

**Continuity anchors:** coral pulse in frame from 2s onward; destination node
visible in the distance from 4s; one sodium-teal light temperature throughout.

### Master prompt

```
Extreme macro probe-lens shot, single continuous take, no cuts: a printed
circuit board filmed as a nighttime metropolis. Camera dollies at street level
along a copper trace highway, then tracks a small glowing coral-orange light
pulse racing down the trace, cranes upward revealing the entire circuit city
grid from the air, then glides down to a single node that flares warm coral as
the pulse arrives. Teal-sodium city lighting, shallow depth of field,
anamorphic bokeh, volumetric haze, photorealistic macro electronics, cinematic
color grade, 8 seconds, 24fps.
```

### Negative prompt

```
cuts, scene changes, text, logos, human hands, daylight, fisheye distortion,
cartoon style
```

**HTML overlay (not in video):** none — end frame holds on the node.

**Scroll acts:** ① video scrubs with scroll → ② aerial frame freezes into an
interactive PoP world map with real latency figures → ③ mono lines in sequence:
`no publish tier` / `no dispatcher` / `no cache playbook` → CTA: *Read: What
Edge Delivery Services actually is*.

---

## #3 — The Fresnel

*Performance isn't optimized. It's focused. A lighthouse lens for Lighthouse scores.*

**Story:** camera orbits a lighthouse Fresnel lens; the beam ignites through
the glass and converges into one perfect point of green light.

### Beat map

| Time | Frame | Camera | Feature beat |
|---|---|---|---|
| 0.0–2.0s | Concentric glass ridges bend amber slivers into dispersion rainbows | Lateral skim along lens surface | Raw light = the payload |
| 2.0–4.0s | Rounding the curvature; lamp brightens behind the glass | Slow orbit, shallow DOF | Architecture shapes the light |
| 4.0–6.0s | Beam ignites, floods through lens into camera; flares wash frame | Holds through the sweep | Eager phase — LCP fires first |
| 6.0–8.0s | Flare resolves; beam converges to a single green point on dark glass | Slow push-in | 100: a property, not a project |

**Continuity anchors:** lamp visible (defocused) behind lens from frame one;
rings dominate every frame; the amber→white shift at 4s is the only transition.

### Master prompt

```
Single continuous macro shot, no cuts: camera skims sideways along the
concentric glass rings of a lighthouse Fresnel lens, extreme close-up, amber
light refracting into subtle rainbow dispersion. Camera orbits the curvature
as the lamp brightens behind the glass; the beam ignites and floods through
the lens into the camera with anamorphic flare; the flare resolves as the beam
converges into one small perfect point of green light on dark glass.
Photorealistic glass, internal reflections, dust motes in the beam, deep
navy-black background, cinematic, 8 seconds, 24fps.
```

### Negative prompt

```
cuts, text, numbers, people, exterior scenes, sky, daylight, lens swaps,
plastic-looking glass
```

**HTML overlay (not in video):** at ~90% scroll — `Performance 100 ·
Accessibility 100 · Best Practices 100 · SEO 100`.

**Scroll acts:** ① scrub → ② four gauge rings animate to 100 around the frozen
green-point frame → ③ *"LCP under 1.2s on 4G, before a single optimization
ticket was filed."* → CTA: *Read: Why performance stops being a project*.

---

## #10 — Fiber

*The speed of light, literally. Nothing between content and user but glass and light.*

**Story:** a chase shot from inside a fiber-optic strand — the camera pursues
a coral-white pulse out into a dark room where it lights up a computer screen.

### Beat map

| Time | Frame | Camera | Feature beat |
|---|---|---|---|
| 0.0–1.5s | Darkness inside a glass filament; faint internal-reflection sheen | Suspended, static | The request path before |
| 1.5–3.5s | Coral-white pulse ignites far behind, races toward and past the lens | Pulse passes; camera spins to chase | Content released |
| 3.5–5.5s | High-speed pursuit through a bend; strand splits into a bundle; pulses divide | Tracking, motion blur on walls | Fan-out to every edge |
| 5.5–8.0s | Pulse exits fiber into a dark room, streaks across it, lands on a computer screen that lights up warm cream (#faf9f5) | Follow streak, settle on lit website | First paint — TTFB in ms |

**Continuity anchors:** the pulse is the only light source — light never leaves
frame, so the take never breaks; glass sheen carries spatial continuity through
the chase; final page glow matches brand cream `#faf9f5` (the last frame *is*
the site's canvas color).

### Master prompt

```
One continuous shot, no cuts, inside a fiber-optic glass strand: the frame
starts dark with faint internal reflections on glass walls; a bright
coral-white light pulse ignites in the distance, races toward and past the
camera; the camera spins and chases it at high speed through a smooth bend as
the fiber splits into a glowing bundle; the pulse exits the fiber tip into a
dark room, streaks across it, and lands on a single page that illuminates in
warm cream light. Photorealistic, volumetric light, motion blur on glass
walls, extreme macro optics, black background, cinematic, 8 seconds, 24fps.
```

### Negative prompt

```
cuts, multiple scenes, text, people, circuit boards, daylight, cartoon,
low frame-rate strobing
```

**HTML overlay (not in video):** none — end frame crossfades into the live
cream page (the video hands off to the site itself).

**Scroll acts:** ① scrub → crossfade into live page → ② Web-Vitals metrics
draw as light trails (SVG stroke-dashoffset on scroll) → ③ *"Fast isn't
optimized. Fast is structural."* → CTA: *Read: The three loading phases*.

---

## Web integration notes (EDS)

- Hero pattern: poster frame eager (LCP), video element lazy, scroll-scrubbed
  via `currentTime` mapping — the loading strategy itself demos the site's
  three-phase story.
- `prefers-reduced-motion`: poster frame only, no autoplay, no scrub.
- Fallback if a video isn't ready: the procedural canvas hero (drifting nodes
  + coral pulses) already in `blocks/hero/hero.js` stands in for Circuit City.

---

# Performance Loop Backgrounds — Veo (lightning-fast, sci-fi, with the story kept)

Ten seamless-loop hero backgrounds on the speed / performance angle. Unlike a
generic abstract loop, **each one tells a cyclical EDS story** — a single act of
delivery that repeats, so the loop point *is* the story resetting for the next
request. The meaning is baked into the prompt, not just the caption.

Shared contract (in every block): 16:9, 8s, 24fps, muted, constant velocity, a
dark calm zone for overlaid text, palette coral `#cc785c` + white on near-black
`#100f0e`, and a final frame that matches the first for a seamless loop.

How to use:
- Paste one block at a time (Veo 3 recommended). Expect 10–20 takes each; select
  on loop seam and a quiet text zone first, beauty second.
- If your platform has a separate negative-prompt field, move the `Avoid:` line
  into it.
- For a guaranteed seam-free loop, mirror the clip (forward + reversed) or
  crossfade the last 0.5s onto the first.

## 1. Edge Warp — reaching the nearest edge (text zone: center)

**Story:** every visit races to the closest edge node and arrives in milliseconds; the loop is the next request setting off.

```
Cinematic 8-second seamless loop for a website hero background, sci-fi commercial style. First-person flight forward at constant velocity through a dark network space, following thin coral (#cc785c) and white light ribbons that stream inward and keep arriving at small glowing edge nodes which flare softly and rush past the camera as the next node appears ahead — an endless journey that always reaches an edge, conveying content delivered from the nearest point at light speed. Calm dark uncluttered void at the center of frame reserved for overlaid text. Near-black (#100f0e), subtle volumetric haze, gentle bloom on the nodes, shallow depth of field. Premium high-end tech-brand mood. Node spacing is even and self-similar so the final frame is identical to the first for a flawless loop. 16:9, 24fps, smooth constant motion, no acceleration, no cuts, no on-screen text, no audio. Avoid: text, letters, logos, watermark, people, UI, strobing, flicker, cluttered center, rainbow colors, cartoon, lens dirt.
```

## 2. Data Current — nonstop delivery (text zone: lower two-thirds)

**Story:** a continuous river of pages flowing from the edge to every visitor — delivery never pauses.

```
Cinematic 8-second seamless loop for a website hero background, sci-fi commercial style. Extreme macro of a sleek horizontal stream of luminous content packets — small bright light capsules, each one a page being delivered — flowing left to right across the upper third of frame at very high speed, an unbroken river of delivery that never stops. Warm coral (#cc785c) and white over a deep near-black void (#100f0e), motion blur on the fastest packets, soft volumetric glow. The lower two-thirds stays empty and dark for overlaid text. Minimal, elegant, premium tech-brand mood. The packet stream is continuous and self-similar so the last frame matches the first for a seamless loop. 16:9, 24fps, constant speed, no acceleration, no cuts, no on-screen text, no audio. Avoid: text, logos, watermark, people, UI, strobing, flicker, clutter, bright center, rainbow, cartoon, lens dirt.
```

## 3. Pulse Grid — served from the closest edge (text zone: upper half)

**Story:** each request only makes a short hop to a nearby node — proximity is the speed; as one pulse lands and lights a node, the next departs.

```
Cinematic 8-second seamless loop for a website hero background, sci-fi commercial style. A slow constant forward glide low over an infinite dark reflective grid plane receding to a low horizon under a black sky. A thin coral (#cc785c) energy pulse travels a short hop along the grid and reaches a nearby node that blooms with light and dims, while a new pulse is already departing behind it — a continuous rhythm of content served from the closest point, proximity as speed. Near-black (#100f0e), faint fog, subtle grid reflections; the upper half of frame stays deep dark and empty for overlaid text. Restrained, futuristic, high-end tech-brand aesthetic. The grid and pulse rhythm are perfectly repeating so the final frame is identical to the opening for a seamless loop. 16:9, 24fps, smooth constant speed, no acceleration, no cuts, no on-screen text, no audio. Avoid: text, logos, watermark, people, UI, horizon glare, strobing, flicker, rainbow, cartoon, busy sky, lens dirt.
```

## 4. Clear Path — nothing between content and user (text zone: center)

**Story:** no publish tier, no dispatcher, no server in the request path — an unobstructed corridor from origin to screen.

```
Cinematic 8-second seamless loop for a website hero background, sci-fi commercial style. First-person flight forward at constant velocity down a clean, open corridor of thin glowing rings that part smoothly ahead with nothing blocking the way — an unobstructed path light travels with no obstacles, conveying a delivery route with no server, no middle tier, nothing in between. Coral (#cc785c) and white ring light over near-black (#100f0e), soft bloom, volumetric haze, a calm dark center reserved for overlaid text. Minimal and elegant, premium tech-brand mood. The rings are evenly spaced and self-similar so the final frame matches the first for a flawless loop. 16:9, 24fps, smooth constant motion, no acceleration, no cuts, no on-screen text, no audio. Avoid: text, logos, watermark, people, UI, obstacles, strobing, flicker, cluttered center, rainbow, cartoon, lens dirt.
```

## 5. Fiber Stream — delivered at the speed of light (text zone: center)

**Story:** content travels as light down the fiber between the edge and the visitor — the literal physics of fast, on a loop.

```
Cinematic 8-second seamless loop for a website hero background, sci-fi commercial style. Extreme macro from inside a glass fiber-optic strand: an unbroken stream of bright light pulses — each pulse a page in transit — races along the fiber past the camera at incredible speed, with a faint total-internal-reflection sheen on the dark glass walls, the literal picture of content moving at the speed of light. Warm coral (#cc785c) and white pulses over near-black (#100f0e), motion blur, delicate bloom, and a calm dark central channel for overlaid text. Sleek, premium, high-end tech-brand mood. The pulse stream is continuous and self-similar so the last frame is identical to the first for a seamless loop. 16:9, 24fps, constant speed, no acceleration, no cuts, no on-screen text, no audio. Avoid: text, logos, watermark, people, UI, strobing, flicker, clutter, rainbow, cartoon, lens dirt.
```

## 6. Speed Lines — fast by architecture, not optimization (text zone: center)

**Story:** the speed isn't tuned in afterward — it's structural; an effortless, unforced streak that never strains.

```
Cinematic 8-second seamless loop for a website hero background, sci-fi commercial style. Minimal, ultra-clean horizontal anamorphic light streaks glide effortlessly across a pure near-black frame (#100f0e) at very high speed, calm and unforced — the confidence of speed that is built in, not bolted on. Only a few thin coral (#cc785c) and white streaks with elegant lens flares and abundant empty dark space, especially a calm center for overlaid text. Restrained, cinematic, high-end tech-brand mood. The streaks flow continuously and self-similarly so the final frame matches the first for a seamless loop. 16:9, 24fps, smooth constant motion, no acceleration, no cuts, no on-screen text, no audio. Avoid: text, logos, watermark, people, UI, strobing, flicker, clutter, rainbow, cartoon, lens dirt.
```

## 7. Circuit Velocity — routed instantly across the network (text zone: center)

**Story:** the moment a request is made, the signal finds its path across the edge network — routing at the speed of electricity.

```
Cinematic 8-second seamless loop for a website hero background, sci-fi commercial style. Extreme macro of a dark circuit board where bright light pulses set off and instantly find their path along the copper traces, branching and racing toward glowing points at the edges of frame — requests routed across the network the instant they are made. Warm coral (#cc785c) and white pulses over near-black (#100f0e), shallow depth of field, soft bloom and bokeh; the traces and motion sit toward the edges while the center stays dark and calm for overlaid text. Premium, futuristic tech-brand mood. The pulse pattern is continuous and self-similar so the final frame is identical to the first for a seamless loop. 16:9, 24fps, constant speed, no acceleration, no cuts, no on-screen text, no audio. Avoid: text, logos, watermark, people, UI, strobing, flicker, cluttered center, rainbow, cartoon, lens dirt.
```

## 8. Aurora Flow — effortless, always-on delivery (text zone: center)

**Story:** the network simply hums — content flowing continuously with no strain, the ambient signature of a system that is always fast.

```
Cinematic 8-second seamless loop for a website hero background, sci-fi commercial style. Silky ribbons of coral (#cc785c) energy stream continuously across a pure near-black frame (#100f0e), flowing fast and effortlessly like an aurora of light — the calm, perpetual hum of a network that is always delivering, never straining. Soft glow, gentle motion blur, generous dark negative space with a calm center for overlaid text. Restrained, premium, high-end tech-brand mood. The ribbon motion is cyclical and self-similar so the final frame matches the first for a seamless loop. 16:9, 24fps, smooth continuous motion, no acceleration, no cuts, no on-screen text, no audio. Avoid: text, logos, watermark, people, UI, strobing, flicker, clutter, rainbow, cartoon, lens dirt.
```

## 9. Fan-Out — one publish, every edge (text zone: center)

**Story:** content published once accelerates outward to every edge location on Earth; the dim core stays quiet while the delivery streaks to the periphery.

```
Cinematic 8-second seamless loop for a website hero background, sci-fi commercial style. Fine particles of light continuously emanate from a single dim, quiet core at the center of frame and accelerate outward past the lens toward the periphery, stretching into thin streaks — one publish fanning out to every edge location, over and over. Sparse and refined, warm coral (#cc785c) and white over near-black (#100f0e), subtle bloom; the central core stays deep, dark and calm, reserved for overlaid text, with the motion pushed to the edges. Premium, cinematic, high-end tech-brand mood. The outward particle flow is self-similar so the final frame is identical to the first for a flawless loop. 16:9, 24fps, smooth constant motion, no acceleration, no cuts, no on-screen text, no audio. Avoid: text, logos, watermark, people, UI, strobing, flicker, bright center, dense particles, rainbow, cartoon, lens dirt.
```

## 10. Signal Wave — instant response, every time (text zone: upper two-thirds)

**Story:** a request arrives and the answer returns immediately — the steady heartbeat of sub-second response, beating on a loop.

```
Cinematic 8-second seamless loop for a website hero background, sci-fi commercial style. A luminous horizontal waveform pulse races rapidly across the lower third of a near-black frame (#100f0e) and settles, and a new identical pulse immediately follows — the steady heartbeat of instant, sub-second response. A thin coral (#cc785c) and white line with soft glow and motion trails; the upper two-thirds stays deep dark and empty for overlaid text. Minimal, precise, premium tech-brand mood. The pulse rhythm is cyclical and self-similar so the final frame matches the first for a seamless loop. 16:9, 24fps, smooth continuous motion, no acceleration, no cuts, no on-screen text, no audio. Avoid: text, logos, watermark, people, UI, strobing, flicker, clutter, rainbow, cartoon, lens dirt.
```
