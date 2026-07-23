export default function decorate(block) {
  block.classList.add('myth-callout');
  const label = document.createElement('p');
  label.className = 'myth-callout-label';
  label.textContent = 'Myth';
  block.prepend(label);
}
