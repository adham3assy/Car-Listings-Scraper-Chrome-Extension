function addCheckboxes() {
  const cards = document.querySelectorAll(
    '.d-flex.flex-dir-col.imgwidth100, .table-cell.table-cell--watch.is-watchable'
  );
  cards.forEach((card) => {
    if (!card.querySelector('.car-scraper-checkbox')) {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'car-scraper-checkbox';
      checkbox.style.marginRight = '10px';
      card.prepend(checkbox);
    }
  });
}

function scrapeSelectedCars() {
  const selectedCars = [];
  document.querySelectorAll('.car-scraper-checkbox:checked').forEach(cb => {
    const card = cb.closest(
      '.d-flex.flex-dir-col.imgwidth100, .table-cell.table-cell--watch.is-watchable'
    );
    if (!card) return;

    const title = card.querySelector('.font-lato-bold, .heading-7.rtl-disabled')?.innerText || 'No title';
    const price = card.querySelector('.currencyAmount, .data-list__value')?.innerText || 'Unknown';
    const img = card.querySelector('.img-responsive.recom-lot-img.w100, .table-cell--image.js-intro-Thumbnail img')?.src || '';
    const relativeLink = card.querySelector('a')?.getAttribute('href') || '#';
    const link = new URL(relativeLink, window.location.origin).href;

    selectedCars.push({ title, price, img, link });
  });
  return selectedCars;
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === 'scrape') {
    const cars = scrapeSelectedCars();
    sendResponse({ cars });
  }
});

setInterval(addCheckboxes, 1500);
