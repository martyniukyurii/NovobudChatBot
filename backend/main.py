import requests

# Твій API ключ для dim.ria
API_KEY = 'TsQ06jwYAYrMvy4SDBICtnrzWFrvtbT9nHCAsm2t'

# Основний URL для API
BASE_URL = 'https://developers.ria.com/dom/search'

# Параметри запиту
params = {
    # 'category': 1,  # Категорія 1 для будинків
    # 'realty_type': 2,  # Тип нерухомості 2 - для оренди
    # 'operation_type': 2,  # Операція 2 - оренда
    'state_id': 24,  # Ідентифікатор області (24 - Чернівецька область)
    'city_id': 24,  # Ідентифікатор міста (24 - Чернівці)
    'api_key': API_KEY
}


def get_houses_for_rent():
    response = requests.get(BASE_URL, params=params)

    if response.status_code == 200:
        data = response.json()
        house_ids = data.get('items', [])
        print(data)
        for house_id in house_ids:
            # Отримати деталі для кожного будинку
            house_details = get_house_details(house_id)
            # print(f"Будинок ID: {house_id}")
            # print(f"Ціна: {house_details.get('price', 'Не вказано')} грн/місяць")
            # print(f"Опис: {house_details.get('description', 'Опис відсутній')}")
            # print(f"Адреса: {house_details.get('address', 'Адреса відсутня')}")
            # print("-" * 30)
    else:
        print("Не вдалося отримати дані з API")


def get_house_details(house_id):
    details_url = f'https://developers.ria.com/dom/info/{house_id}'
    details_params = {
        'api_key': API_KEY
    }

    response = requests.get(details_url, params=details_params)
    if response.status_code == 200:
        print(response.json())
        return response.json()
    return {}


# Виклик функції для виведення будинків в оренду по Чернівцях
get_houses_for_rent()
