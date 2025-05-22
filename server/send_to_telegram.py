import requests
import os
from dotenv import load_dotenv

load_dotenv()
TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
CHAT_ID = os.getenv("TELEGRAM_GROUP_ID")

def post_car_to_telegram(car):
    message = f"""🚘 <b>{car['title']}</b>\n💰 {car['price']}\n🔗 <a href="{car['link']}">View Car</a>"""
    url = f"https://api.telegram.org/bot{TOKEN}/sendPhoto"
    data = {
        'chat_id': CHAT_ID,
        'caption': message,
        'photo': car['img'],
        'parse_mode': 'HTML'
    }
    requests.post(url, data=data)


