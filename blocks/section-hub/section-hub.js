function currentSection() {
  return window.location.pathname.split('/').filter(Boolean)[0] || '';
}

function renderItem(item) {
  const li = document.createElement('li');
  li.className = 'section-hub-item';

  const link = document.createElement('a');
  link.href = item.path;
  link.textContent = item.title || item.path;
  li.append(link);

  const meta = document.createElement('span');
  meta.className = 'section-hub-item-meta';
  const parts = [item.format === 'video' ? 'Video' : 'Article'];
  if (item.subtopic) parts.push(item.subtopic);
  meta.textContent = parts.join(' · ');
  li.append(meta);

  return li;
}

export default async function decorate(block) {
  block.textContent = '';
  const section = currentSection();
  const ul = document.createElement('ul');
  ul.className = 'section-hub-list';

  try {
    const resp = await fetch('/query-index.json');
    if (!resp.ok) throw new Error(`query-index request failed: ${resp.status}`);
    const json = await resp.json();
    const items = (json.data || [])
      .filter((item) => item.section === section)
      .sort((a, b) => (b.lastModified || 0) - (a.lastModified || 0));

    if (items.length === 0) {
      const empty = document.createElement('p');
      empty.textContent = 'No content published in this section yet.';
      block.append(empty);
      return;
    }

    items.forEach((item) => ul.append(renderItem(item)));
    block.append(ul);
  } catch (e) {
    const error = document.createElement('p');
    error.textContent = 'Unable to load content list right now.';
    block.append(error);
  }
}
