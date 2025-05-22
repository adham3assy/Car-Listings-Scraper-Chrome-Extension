document.getElementById('scrapeBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'scrape' }, (res) => {
      if (res?.cars) {
        fetch('http://localhost:5000/api/send-to-telegram', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cars: res.cars })
        })
        .then(() => alert('Posted to Telegram!'))
        .catch(() => alert('Failed to post!'));
      }
    });
  });
});
