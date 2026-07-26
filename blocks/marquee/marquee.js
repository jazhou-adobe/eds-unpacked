/**
 * Marquee: infinite domain ticker. Authored rows become two identical groups
 * in a track; CSS loops the track by half its width for a seamless wrap.
 */
export default function decorate(block) {
  const items = [...block.querySelectorAll(':scope > div > div')]
    .map((cell) => cell.textContent.trim())
    .filter(Boolean);

  block.textContent = '';
  const track = document.createElement('div');
  track.className = 'marquee-track';

  [false, true].forEach((hidden) => {
    const group = document.createElement('div');
    group.className = 'marquee-group';
    if (hidden) group.setAttribute('aria-hidden', 'true');
    items.forEach((text) => {
      const item = document.createElement('span');
      item.textContent = text;
      group.append(item);
    });
    track.append(group);
  });

  block.append(track);
}
