const MAX_ITEMS = 5;

function renderItem(item) {
  const li = document.createElement('li');
  li.className = 'home-recent-item';

  const link = document.createElement('a');
  link.href = item.path;
  link.textContent = item.title || item.path;
  li.append(link);

  const meta = document.createElement('span');
  meta.className = 'home-recent-item-meta';
  const sectionLabel = item.section
    ? item.section.charAt(0).toUpperCase() + item.section.slice(1)
    : '';
  const formatLabel = item.format === 'video' ? 'Video' : 'Article';
  meta.textContent = [sectionLabel, formatLabel].filter(Boolean).join(' · ');
  li.append(meta);

  return li;
}

export default async function decorate(block) {
  block.textContent = '';
  const ul = document.createElement('ul');
  ul.className = 'home-recent-list';

  try {
    const resp = await fetch('/query-index.json');
    if (!resp.ok) throw new Error(`query-index request failed: ${resp.status}`);
    const json = await resp.json();
    const items = (json.data || [])
      .sort((a, b) => (b.lastModified || 0) - (a.lastModified || 0))
      .slice(0, MAX_ITEMS);

    if (items.length === 0) {
      const empty = document.createElement('p');
      empty.textContent = 'No content published yet.';
      block.append(empty);
      return;
    }

    items.forEach((item) => ul.append(renderItem(item)));
    block.append(ul);
  } catch (e) {
    const error = document.createElement('p');
    error.textContent = 'Unable to load recent content right now.';
    block.append(error);
  }
}
