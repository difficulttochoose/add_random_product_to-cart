//Create function for random product... For rozetka
let computers = [
    { name: 'Lenovo IdeaCentre AIO 330-20 (F0D80042RK)', description: 'Экран 19.5" (1440x900) WXGA+ / AMD Stoney Ridge A6-9200 (2.0 - 2.8 ГГц) / RAM 4 ГБ / HDD 500 ГБ/ AMD Radeon R4 Graphics / без ОД / LAN / Wi-Fi / Bluetooth / кардридер / веб-камера / без ОС / 4.9 кг / черный / клавиатура + мышь' },
    { name: 'Artline Gaming X39 v25(X39v25)', description: 'Intel Core i5-9400F (2.9 - 4.1 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 240 ГБ / Nvidia GeForce GTX 1050 Ti, 4 ГБ выделенной памяти / без ОД / LAN / без ОС' },
    { name: 'Everest Home 4070(4070_9414)', description: 'Intel Core i3-9100F (3.6 - 4.2 ГГц) / RAM 8 ГБ / HDD 1 ТБ / nVidia GeForce GTX 1050 Ti, 4 ГБ / Без ОД / LAN / без ОС' },
    { name: 'ARTLINE Gaming X39 v33(X39v33)', description: 'Intel Core i5-9400F (2.9 - 4.1 ГГц) / RAM 16 ГБ / HDD 1 ТБ + SSD 240 ГБ / nVidia GeForce GTX 1660 Ti, 6 ГБ / без ОД / LAN / без ОС' },
    { name: 'Everest Home 4085(4085_0906)', description: 'AMD Ryzen 5 1600 (3.2 - 3.6 ГГц) / RAM 8 ГБ / HDD 1 ТБ + SSD 240 ГБ / nVidia GeForce GTX 1050 Ti, 4 ГБ / без ОД / LAN / без ОС' },
];
let appliances = [
    { name: 'Кофемашина SAECO Lirika Plus Cappuccino10004477', description: 'Тип: Кофемашина эспрессо\nТип используемого кофе: Зерновой\nДисплей: Есть' },
    { name: 'Микроволновая печь SAMSUNG ME81MRTS/BW', description: 'Цвет: Нержавеющая сталь\nТип: Обычная (соло)\nТип управления: Механическое\nСпособ установки: Отдельностоящая' },
    { name: 'Соковыжималка центробежная MAGIO MG-192', description: 'Тип: Центробежная (центрифуга)\nМатериал корпуса: Металл' },
    { name: 'Робот-пылесос ECOVACS DEEBOT OZMO 900 White', description: 'Тип уборки: Сухая + влажная' },
    { name: 'Пылесос без мешка BOSCH BGS2U2030', description: 'Тип пылесоса: Контейнерного типа (без мешка)\nРегулировка мощности: На корпусе\nВыходной фильтр: HEPA 13 (моющийся)\nОбъем пылесборника, л: 1.4' },
];
let childensGoods = [
    { name: 'Собачка Chi Chi Love Чихуахуа Фешн Париж в наряде светящемся в темноте с ковриком и сумочкой 20 см (5893123)', description: 'Тип: Животные' },
    { name: 'Коляска Smoby Toys Baby Nurse Прованс Классик с люлькой и корзиной (251103) (3032162511039)', description: 'Аксессуары: Коляски' },
    { name: 'Пупс Simba NBB Уход за малышем 43 см (5030044)', description: 'Высота пупса: 43 см' },
    { name: 'Кукла Штеффи с малышом на велосипеде Simba Steffi Love (5739050)', description: 'Высота куклы: 29 см' },
    { name: 'Игрушка кукла Hairdorables Dolls серия 3 с аксессуарами (23725)', description: 'Высота куклы: 12 см' },
];
let alcoholicDrinks = [
    { name: 'Ликер Jack Daniel\'s Tennessee Honey 0.7 л 35% (5099873001370)', description: 'Выдержка: 4 - 7 лет' },
    { name: 'Ликер Aperol Aperetivo 0.7 л 11 % + Вино игристое Cinzano Pro - Spritz белое сухое 0.75 л 11 % (4820180020225)', description: 'Сорт винограда: Глера' },
    { name: 'Ликер Jim Beam Red Stag 4 года выдержки 0.7 л 40% (5060045582485)', description: 'Выдержка: 4 года' },
    { name: 'Ликерная настойка на травах Becherovka 0.7 л 38% + 1 бокал (8594405108697)', description: 'Выдержка: 3 мес.' },
    { name: 'Биттер Angostura Bitter 0.2 л 44.7% (075496002005)', description: 'Выдержка: 3 мес.' },
];
let shoes = [
    { name: 'Columbia  •  Ботинки Columbia 1826291-052 36 (6) 23 см Серые (0191455481008)', description: 'Размер\n34.5, 36, 36.5, 39.5' },
    { name: 'Geox  •  Ботфорты Geox D Peython Low D94ECE/000JZ/C9999 36 (8054730192520)', description: 'Размер\n36, 37, 38, 40, 41' },
    { name: 'Nike  •  Кроссовки Nike Wmns Ryz 365 BQ4153-002 39.5 (9) 26 см (193151405968)', description: 'Размер\n37, 37.5, 38, 38.5, 39.5, 41' },
    { name: 'Geox  •  Ботильоны Geox D Asheel D746QB/000BC/C9997 40 Black (8058279429574)', description: 'Размер\n36, 37, 40, 41' },
    { name: 'Columbia  •  Ботинки Columbia Meadows Shorty Omni-Heat 3D Boot 1791321-125 38 (7) 24 см Белые (0192660441528)', description: 'Размер\n37.5, 38, 39.5, 41' },
];

let categoryProduct = [
    {
        category: 'Computers',
        arr: computers,
    },
    {
        category: 'Appliances',
        arr: appliances,
    },
    {
        category: 'Childen`s goods',
        arr: childensGoods,
    },
    {
        category: 'Alcoholic drinks',
        arr: alcoholicDrinks,
    },
    {
        category: 'Shoes',
        arr: shoes,
    }
];
let product = {
    name: 'name',
    desc: 'desc',
    price: 100,
    available: true,
    cat: 'Category',
    amount: 12,
}
let cart = [];
let randProduct = () => {
    let x = Math.floor(Math.random() * categoryProduct.length);
    let y = Math.floor(Math.random() * categoryProduct[x].arr.length);
    let z = Math.floor(Math.random() * 2) == 1 ? "В наличии" : "Нет в наличии";
    return product = {
        name: `${categoryProduct[x].arr[y].name}`,
        desc: `${categoryProduct[x].arr[y].description}`,
        price: Math.floor(Math.random() * 20000),
        available: z,
        cat: categoryProduct[x].category,
        amount: z == "В наличии" ? Math.floor(Math.random() * 50) : 0,
    }
}
let addProductToCart = (index) => {
    cart.push(randGoods[index]);
    return cart;
}

let goodsAmount = prompt('Enter quantity of goods:');
let randGoods = [];
while (goodsAmount) {
    randGoods.push(randProduct());
    goodsAmount--;
}
console.log('rand goods:', randGoods);
let indexAddGoods = prompt('Enter index of product to add to cart:');

//Create func add to cart into LocalStoragerandGoods[index]

cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
localStorage.setItem("cart", JSON.stringify(addProductToCart(indexAddGoods))); 
JSON.parse(localStorage.getItem("cart"));
console.log('cart', cart);