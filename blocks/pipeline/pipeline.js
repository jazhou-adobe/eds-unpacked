/**
 * Pipeline: document -> edge -> browser diagram.
 * Authored rows: icon name (doc|edge|browser) | label | caption.
 * Nodes are joined by connectors with animated flow dashes; the edge node
 * carries a sonar pulse. All motion is CSS, disabled under reduced-motion.
 */
const ICONS = {
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2.5h8L19 7.5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1z"/><path d="M14 2.5v5h5"/><path d="M8.5 12h7M8.5 15.5h7"/></svg>',
  edge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3 5.3 18.7"/></svg>',
  browser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M3 9h18"/><circle cx="6.2" cy="6.8" r=".7" fill="currentColor" stroke="none"/><circle cx="8.9" cy="6.8" r=".7" fill="currentColor" stroke="none"/></svg>',
};

export default function decorate(block) {
  const nodes = [...block.children].map((row) => {
    const [iconCell, labelCell, captionCell] = [...row.children];
    const name = (iconCell?.textContent || '').trim().toLowerCase();

    const node = document.createElement('div');
    node.className = `pipeline-node pipeline-node-${name}`;

    const icon = document.createElement('div');
    icon.className = 'pipeline-icon';
    icon.innerHTML = ICONS[name] || ICONS.doc;

    const label = document.createElement('p');
    label.className = 'pipeline-label';
    label.textContent = labelCell?.textContent || '';

    const caption = document.createElement('p');
    caption.className = 'pipeline-caption';
    caption.textContent = captionCell?.textContent || '';

    node.append(icon, label, caption);
    return node;
  });

  block.textContent = '';
  nodes.forEach((node, i) => {
    if (i > 0) {
      const connector = document.createElement('div');
      connector.className = 'pipeline-connector';
      connector.setAttribute('aria-hidden', 'true');
      block.append(connector);
    }
    block.append(node);
  });
}
