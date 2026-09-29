/* =========================================================
   БАЗА КОМПЛЕКТУЮЩИХ
   ========================================================= */

   const COMPONENTS = {

    /* ---------- 1. ПРОЦЕССОР ---------- */
    cpu: [
        { id: "cpu-i3-12100f", name: "Intel Core i3-12100F", price: 8500,
          specs: ["4 ядра / 8 потоков", "3.3–4.3 ГГц", "LGA1700", "TDP 58 Вт"],
          compat: { socket: "LGA1700", memory: ["DDR4", "DDR5"] },
          classes: ["budget"] },
        { id: "cpu-r5-5600", name: "AMD Ryzen 5 5600", price: 12000,
          specs: ["6 ядер / 12 потоков", "3.5–4.4 ГГц", "AM4", "TDP 65 Вт"],
          compat: { socket: "AM4", memory: ["DDR4"] },
          classes: ["budget", "middle"] },
        { id: "cpu-i5-14400f", name: "Intel Core i5-14400F", price: 14000,
          specs: ["10 ядер / 16 потоков", "2.5–4.7 ГГц", "LGA1700", "TDP 65 Вт"],
          compat: { socket: "LGA1700", memory: ["DDR4", "DDR5"] },
          classes: ["middle"] },
        { id: "cpu-r5-7600x", name: "AMD Ryzen 5 7600X", price: 14200,
          specs: ["6 ядер / 12 потоков", "4.7–5.3 ГГц", "AM5", "TDP 105 Вт"],
          compat: { socket: "AM5", memory: ["DDR5"] },
          classes: ["middle", "top"] },
        { id: "cpu-i5-13600k", name: "Intel Core i5-13600K", price: 28000,
          specs: ["14 ядер / 20 потоков", "3.5–5.1 ГГц", "LGA1700", "TDP 125 Вт"],
          compat: { socket: "LGA1700", memory: ["DDR4", "DDR5"] },
          classes: ["middle", "top"] },
        { id: "cpu-i7-14700k", name: "Intel Core i7-14700K", price: 42000,
          specs: ["20 ядер / 28 потоков", "3.4–5.6 ГГц", "LGA1700", "TDP 125 Вт"],
          compat: { socket: "LGA1700", memory: ["DDR4", "DDR5"] },
          classes: ["top"] },
        { id: "cpu-r9-7950x", name: "AMD Ryzen 9 7950X", price: 55000,
          specs: ["16 ядер / 32 потока", "4.5–5.7 ГГц", "AM5", "TDP 170 Вт"],
          compat: { socket: "AM5", memory: ["DDR5"] },
          classes: ["top"] }
    ],

    /* ---------- 2. МАТЕРИНСКАЯ ПЛАТА ---------- */
    motherboard: [
        { id: "mb-h610m", name: "MSI PRO H610M-E DDR4", price: 7000,
          specs: ["LGA1700", "DDR4", "mATX", "2 слота RAM"],
          compat: { socket: "LGA1700", memory: "DDR4", formFactor: "mATX" },
          classes: ["budget"] },
        { id: "mb-b660m", name: "ASUS PRIME B660M-A DDR4", price: 10000,
          specs: ["LGA1700", "DDR4", "mATX", "4 слота RAM"],
          compat: { socket: "LGA1700", memory: "DDR4", formFactor: "mATX" },
          classes: ["budget", "middle"] },
        { id: "mb-b550", name: "Gigabyte B550 AORUS Elite", price: 12000,
          specs: ["AM4", "DDR4", "ATX", "4 слота RAM"],
          compat: { socket: "AM4", memory: "DDR4", formFactor: "ATX" },
          classes: ["budget", "middle"] },
        { id: "mb-b760", name: "MSI PRO B760-P DDR4", price: 13000,
          specs: ["LGA1700", "DDR4", "ATX", "4 слота RAM"],
          compat: { socket: "LGA1700", memory: "DDR4", formFactor: "ATX" },
          classes: ["middle"] },
        { id: "mb-b650", name: "ASUS TUF Gaming B650-PLUS", price: 18000,
          specs: ["AM5", "DDR5", "ATX", "4 слота RAM"],
          compat: { socket: "AM5", memory: "DDR5", formFactor: "ATX" },
          classes: ["middle", "top"] },
        { id: "mb-z790", name: "ASUS ROG STRIX Z790-A", price: 32000,
          specs: ["LGA1700", "DDR5", "ATX", "4 слота RAM", "разгон"],
          compat: { socket: "LGA1700", memory: "DDR5", formFactor: "ATX" },
          classes: ["top"] },
        { id: "mb-x670e", name: "MSI MPG X670E CARBON", price: 45000,
          specs: ["AM5", "DDR5", "ATX", "4 слота RAM", "PCIe 5.0"],
          compat: { socket: "AM5", memory: "DDR5", formFactor: "ATX" },
          classes: ["top"] }
    ],

    /* ---------- 3. ОПЕРАТИВНАЯ ПАМЯТЬ ---------- */
    ram: [
        { id: "ram-16-ddr4", name: "16 ГБ DDR4-3200 (2×8)", price: 11000,
          specs: ["DDR4", "3200 МГц", "2 модуля", "CL16"],
          compat: { memory: "DDR4" },
          classes: ["budget"] },
        { id: "ram-32-ddr4", name: "32 ГБ DDR4-3600 (2×16)", price: 18500,
          specs: ["DDR4", "3600 МГц", "2 модуля", "CL18"],
          compat: { memory: "DDR4" },
          classes: ["budget", "middle"] },
        { id: "ram-32-ddr5", name: "32 ГБ DDR5-5600 (2×16)", price: 35000,
          specs: ["DDR5", "5600 МГц", "2 модуля", "CL36"],
          compat: { memory: "DDR5" },
          classes: ["middle", "top"] },
        { id: "ram-64-ddr5", name: "64 ГБ DDR5-6000 (2×32)", price: 62000,
          specs: ["DDR5", "6000 МГц", "2 модуля", "CL30"],
          compat: { memory: "DDR5" },
          classes: ["top"] }
    ],

    /* ---------- 4. ВИДЕОКАРТА ---------- */
    gpu: [
        { id: "gpu-igpu", name: "Встроенная графика (без дискретной)", price: 0,
          specs: ["Для офисных задач", "Без игр"],
          compat: { power: 0, length: 0 },
          classes: ["budget"] },
        { id: "gpu-rtx3050", name: "NVIDIA RTX 3050 8 ГБ", price: 22000,
          specs: ["8 ГБ GDDR6", "1080p low/med", "TDP 130 Вт"],
          compat: { power: 130, length: 200 },
          classes: ["budget"] },
        { id: "gpu-rtx4060", name: "NVIDIA RTX 4060 8 ГБ", price: 32000,
          specs: ["8 ГБ GDDR6", "1080p high", "TDP 115 Вт"],
          compat: { power: 115, length: 240 },
          classes: ["middle"] },
        { id: "gpu-rtx5060ti", name: "NVIDIA RTX 5060 Ti 16 ГБ", price: 45000,
          specs: ["16 ГБ GDDR7", "1080p/1440p", "TDP 180 Вт"],
          compat: { power: 180, length: 260 },
          classes: ["middle"] },
        { id: "gpu-rtx5070", name: "NVIDIA RTX 5070 12 ГБ", price: 57000,
          specs: ["12 ГБ GDDR7", "1440p high", "TDP 250 Вт"],
          compat: { power: 250, length: 280 },
          classes: ["middle", "top"] },
        { id: "gpu-rtx5080", name: "NVIDIA RTX 5080 16 ГБ", price: 110000,
          specs: ["16 ГБ GDDR7", "4K high", "TDP 360 Вт"],
          compat: { power: 360, length: 320 },
          classes: ["top"] },
        { id: "gpu-rtx5090", name: "NVIDIA RTX 5090 32 ГБ", price: 210000,
          specs: ["32 ГБ GDDR7", "4K ultra", "TDP 575 Вт"],
          compat: { power: 575, length: 340 },
          classes: ["top"] }
    ],

    /* ---------- 5. НАКОПИТЕЛЬ ---------- */
    storage: [
        { id: "ssd-500", name: "SSD 500 ГБ NVMe PCIe 3.0", price: 4500,
          specs: ["500 ГБ", "PCIe 3.0", "до 3500 МБ/с"],
          compat: {}, classes: ["budget"] },
        { id: "ssd-1tb", name: "SSD 1 ТБ NVMe PCIe 4.0", price: 12199,
          specs: ["1 ТБ", "PCIe 4.0", "до 7000 МБ/с"],
          compat: {}, classes: ["budget", "middle", "top"] },
        { id: "ssd-2tb", name: "SSD 2 ТБ NVMe PCIe 4.0", price: 22000,
          specs: ["2 ТБ", "PCIe 4.0", "до 7400 МБ/с"],
          compat: {}, classes: ["middle", "top"] },
        { id: "ssd-4tb", name: "SSD 4 ТБ NVMe PCIe 5.0", price: 45000,
          specs: ["4 ТБ", "PCIe 5.0", "до 12000 МБ/с"],
          compat: {}, classes: ["top"] }
    ],

    /* ---------- 6. БЛОК ПИТАНИЯ ---------- */
    psu: [
        { id: "psu-550", name: "550 Вт 80+ Bronze", price: 5000,
          specs: ["550 Вт", "80+ Bronze", "не модульный"],
          compat: { wattage: 550 }, classes: ["budget"] },
        { id: "psu-650", name: "650 Вт 80+ Bronze", price: 6500,
          specs: ["650 Вт", "80+ Bronze", "не модульный"],
          compat: { wattage: 650 }, classes: ["budget", "middle"] },
        { id: "psu-750-gold", name: "750 Вт 80+ Gold", price: 9000,
          specs: ["750 Вт", "80+ Gold", "полумодульный"],
          compat: { wattage: 750 }, classes: ["middle"] },
        { id: "psu-1000-gold", name: "1000 Вт 80+ Gold", price: 15000,
          specs: ["1000 Вт", "80+ Gold", "полностью модульный"],
          compat: { wattage: 1000 }, classes: ["top"] },
        { id: "psu-1200-plat", name: "1200 Вт 80+ Platinum", price: 24000,
          specs: ["1200 Вт", "80+ Platinum", "полностью модульный"],
          compat: { wattage: 1200 }, classes: ["top"] }
    ],

    /* ---------- 7. КОРПУС ---------- */
    case: [
        { id: "case-mini", name: "Mini Tower mATX", price: 3000,
          specs: ["mATX", "до 300 мм GPU", "1 вентилятор"],
          compat: { formFactor: ["mATX"], maxGpuLength: 300 },
          classes: ["budget"] },
        { id: "case-mid", name: "Mid Tower ATX", price: 6000,
          specs: ["ATX/mATX", "до 330 мм GPU", "3 вентилятора"],
          compat: { formFactor: ["ATX", "mATX"], maxGpuLength: 330 },
          classes: ["budget", "middle"] },
        { id: "case-lancool216", name: "Lian Li Lancool 216", price: 9500,
          specs: ["ATX/mATX", "до 392 мм GPU", "2×160 мм ARGB"],
          compat: { formFactor: ["ATX", "mATX"], maxGpuLength: 392 },
          classes: ["middle", "top"] },
        { id: "case-fractal", name: "Fractal Design North XL", price: 18000,
          specs: ["ATX/mATX", "до 413 мм GPU", "премиум-продув"],
          compat: { formFactor: ["ATX", "mATX"], maxGpuLength: 413 },
          classes: ["top"] }
    ],

    /* ---------- 8. ОХЛАЖДЕНИЕ ---------- */
    cooling: [
        { id: "cool-stock", name: "Боксовый кулер (в комплекте с CPU)", price: 0,
          specs: ["Для CPU до 65 Вт", "Средний шум"],
          compat: { tdp: 65 }, classes: ["budget"] },
        { id: "cool-tower", name: "Башенный кулер 4 тепл. трубки", price: 3500,
          specs: ["до 150 Вт", "120 мм вентилятор"],
          compat: { tdp: 150 }, classes: ["budget", "middle"] },
        { id: "cool-tower-big", name: "Башенный кулер 6 тепл. трубок", price: 7000,
          specs: ["до 220 Вт", "2×120 мм"],
          compat: { tdp: 220 }, classes: ["middle", "top"] },
        { id: "cool-aio240", name: "СЖО 240 мм", price: 12000,
          specs: ["до 250 Вт", "2×120 мм", "ARGB"],
          compat: { tdp: 250 }, classes: ["middle", "top"] },
        { id: "cool-aio360", name: "СЖО 360 мм", price: 18000,
          specs: ["до 300 Вт", "3×120 мм", "ARGB"],
          compat: { tdp: 300 }, classes: ["top"] }
    ],

    /* ---------- 9. ПЕРИФЕРИЯ ---------- */
    peripherals: [
        { id: "periph-none", name: "Без периферии", price: 0,
          specs: ["Только системный блок"],
          compat: {}, classes: ["budget", "middle", "top"] },
        { id: "periph-basic", name: "Комплект: монитор 24\" + клавиатура + мышь",
          price: 15000,
          specs: ["Монитор 24\" 1080p 75 Гц", "Мембранная клавиатура", "Оптическая мышь"],
          compat: {}, classes: ["budget"] },
        { id: "periph-adv", name: "Комплект: монитор 27\" 1440p 144 Гц + механика + мышь",
          price: 35000,
          specs: ["Монитор 27\" 1440p 144 Гц", "Механическая клавиатура", "Игровая мышь"],
          compat: {}, classes: ["middle"] },
        { id: "periph-pro", name: "Комплект: монитор 32\" 4K 144 Гц + механика + мышь",
          price: 90000,
          specs: ["Монитор 32\" 4K 144 Гц", "Механическая клавиатура премиум", "Проф. мышь"],
          compat: {}, classes: ["top"] }
    ]
};

/* =========================================================
   ПОРЯДОК ШАГОВ
   ========================================================= */
const STEPS = [
    { key: "cpu",         title: "Процессор",         hint: "Определяет платформу и сокет. Следующие шаги зависят от этого выбора." },
    { key: "motherboard", title: "Материнская плата", hint: "Должна совпадать по сокету с процессором." },
    { key: "ram",         title: "Оперативная память", hint: "Тип памяти должен совпадать с материнской платой." },
    { key: "gpu",         title: "Видеокарта",        hint: "Влияет на мощность БП и длину корпуса." },
    { key: "storage",     title: "Накопитель",        hint: "SSD NVMe — оптимальный выбор для системы." },
    { key: "psu",         title: "Блок питания",      hint: "Мощность должна покрывать TDP процессора и видеокарты." },
    { key: "case",        title: "Корпус",            hint: "Должен вмещать материнскую плату и видеокарту." },
    { key: "cooling",     title: "Охлаждение",        hint: "Рассеиваемая мощность должна покрывать TDP процессора." },
    { key: "peripherals", title: "Периферия",         hint: "Опционально. Можно пропустить." }
];

/* Названия классов сборки */
const CLASS_NAMES = {
    budget: "Бюджетный",
    middle: "Средний",
    top:    "Топовый"
};