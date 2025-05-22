# 🚗 Car Listings Scraper Chrome Extension

A lightweight Chrome extension that allows users to **select vehicle listings** directly from car auction websites using checkboxes and **instantly send the selected car data to Telegram** groups for monitoring or marketing purposes.

---

## 🎯 Objective

This tool simplifies the process of tracking and sharing car listings from dynamic auction sites by:

- Injecting checkboxes into car listing elements.
- Scraping selected data such as **title**, **price**, **image**, and **link**.
- Sending the compiled results to a backend API (e.g., a Telegram bot server).
- Automating and streamlining the car import business workflows.

---

## ⚙️ Features

-  Auto-injects checkboxes for user-friendly car selection.
-  Scrapes dynamic content in real time using DOM manipulation.
-  Sends data from selected cars to a custom API.
-  Designed for easy integration with Telegram bots or dashboards.
-  Continuously scans the page to support dynamically loaded listings.

---

## 🛠️ Tech Stack & Tools

###  Frontend (Chrome Extension)
- **JavaScript** – Core logic & DOM interaction
- **HTML/CSS** – Extension popup UI
- **Chrome Extension APIs** – Messaging system & DOM injection

###  Backend Integration
- **Telegram Bot API** (via HTTP POST requests)
- Compatible with **Flask**, **FastAPI**, or any custom webhook backend

---

## 📦 Folder Structure
```
car-scraper-extension/
├── manifest.json              # Chrome extension manifest
├── content.js                 # Content script for DOM manipulation & scraping
├── popup.html                 # HTML UI for extension popup
├── popup.js                   # JavaScript for popup UI interactions
├── server/                    # Backend server to send data to Telegram
│   ├── app.py                 # Flask (or similar) app for handling requests
│   └── send_to_telegram.py    # Logic for sending scraped car data to Telegram API
├── icons/                     # Extension icons
│   └── icon16.png
└── README.md                  # Project documentation
```

