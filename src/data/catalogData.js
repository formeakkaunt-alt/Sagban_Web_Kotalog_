/**
 * СТРУКТУРА ДАННЫХ КАТАЛОГА «SAGBAN»
 * 
 * В дальнейшем вы можете легко добавлять реальные фотографии продукции:
 * 1. Сохраняйте фотографии в папку: public/images/products/[каталог]/[категория]/ (или любую другую)
 * 2. Укажите путь к файлу в свойстве 'image' (например, '/images/products/sagban/varenaya-1.jpg')
 * 3. Установите 'placeholder: false' или просто добавьте новый объект { id: ..., image: '...' }
 *
 * ОБОРОТНАЯ СТОРОНА ФОТО (в увеличенном окне: клик по фото — карточка переворачивается):
 * Чтобы заполнить информацию о продукте, добавьте в объект товара необязательное поле details, например:
 *   { id: 'sag-kop-21', image: '...', isPlaceholder: false, index: 21,
 *     details: { composition: '...', weight: '500 г', shelfLife: '60 суток', storage: '0…+6 °C', nutrition: '...' } }
 * Пока details не указан — на обороте показывается заглушка «Маълумот тез орада қўшилади».
 */

export const CATALOGS = {
  sagban: {
    id: 'sagban',
    name: 'SAGBAN каталог',
    badge: 'SAGBAN',
    pdfUrl: '/sagban-catalog.pdf', // PDF каталог файли
  },
  premiyum: {
    id: 'premiyum',
    name: 'PREMIYUM каталог',
    badge: 'PREMIYUM',
    pdfUrl: '/premiyum-catalog.pdf', // PREMIYUM PDF каталог файли
  }
};

export const CATEGORIES = [
  {
    slug: 'varenaya-kolbasa',
    title: 'Варёная колбаса',
    shortTitle: 'Варёная колбаса',
    tagline: 'Нежный и изысканный',
    bgImage: '/images/categories/varenaya-kolbasa.jpg',
    pageBgImage: '/images/incoming/sagban-doktorskaya-s-kopcheniem.jpg',
  },
  {
    slug: 'sosiski-sardelki',
    title: 'Сосиски и сардельки',
    shortTitle: 'Сосиски и сардельки',
    tagline: 'Сочный и аппетитный',
    bgImage: '/images/categories/sosiski-sardelki.jpg',
    pageBgImage: '/images/incoming/sosiski-sardelki-bg.jpg',
  },
  {
    slug: 'kopchenaya-kolbasa',
    title: 'Копчёная колбаса',
    shortTitle: 'Копчёная колбаса',
    tagline: 'Насыщенный и ароматный',
    bgImage: '/images/categories/kopchenaya-kolbasa.jpg',
    pageBgImage: '/images/incoming/kopchenaya-kolbasa-bg.jpg',
  },
  {
    slug: 'myasnye-delikatesy',
    title: 'Мясные деликатесы',
    shortTitle: 'Мясные деликатесы',
    tagline: 'Благородный и утончённый',
    bgImage: '/images/categories/myasnye-delikatesy.jpg',
    pageBgImage: '/images/incoming/myasnye-delikatesy-bg.jpg',
  },
  {
    slug: 'narezki',
    title: 'Нарезки',
    shortTitle: 'Нарезки',
    tagline: 'Тонкий и удобный',
    bgImage: '/images/categories/narezki.jpg',
  },
];


// Оборотная сторона: информация о продукции для категории «Нарезки»
const UTINAYA_GRUDKA_DETAILS = {
  title: 'Утиная грудка',
  subtitle: 'Копчёно-варёное изделие · Высший сорт',
  composition: 'утка, соль поваренная пищевая, специи',
  storage: 'от +2 °C до +6 °C',
  shelfLife: 'не более 20 суток',
  weight: '100 г',
};

const INDEYKA_2_DETAILS = {
  title: 'Индейка',
  subtitle: 'Варёно-копчёное изделие · Высший сорт',
  composition: 'мясо птицы, соль поваренная пищевая, специи',
  storage: 'от +2 °C до +6 °C',
  shelfLife: 'не более 20 суток',
  weight: '150 г',
};

const BUSIDO_DETAILS = {
  title: 'Бусидо',
  subtitle: 'Варёно-копчёное изделие · 1 сорт',
  composition: 'говядина, говяжий жир, куриное мясо, индейка, специи',
  storage: 'от +2 °C до +6 °C',
  shelfLife: 'не более 20 суток',
  weight: '150 г',
};

const DUMBA_DETAILS = {
  title: 'Думба с паприкой',
  subtitle: 'Деликатес',
  composition: 'курдюк, соль поваренная пищевая, специи',
  storage: 'от +2 °C до +6 °C',
  shelfLife: 'не более 20 суток',
  weight: '100 г',
};

const OKHOTNICHI_ARISTO_DETAILS = {
  title: 'Охотничьи колбаски «Аристо»',
  subtitle: 'Изделие колбасное полукопчёное · 1 сорт',
  composition: 'говядина, говяжий жир, мясо птицы, кожа куриная — 10%, растительное масло, курдюк, соевый белок, белковый стабилизатор, нитрит натрия (Е250), специи',
  storage: 'от +2 °C до +6 °C (влажность 75–78%, вакуум)',
  shelfLife: 'не более 30 суток',
  weight: '100 г',
};

const BASTURMA_DETAILS = {
  title: 'Бастурма',
  subtitle: 'Сыровяленый деликатес · Высший сорт',
  composition: 'говядина, соль поваренная пищевая, специи',
  storage: 'от +2 °C до +6 °C',
  shelfLife: 'не более 45 суток',
  weight: '100 г',
};

const BRESAOLA_1_DETAILS = {
  title: 'Брезаола',
  subtitle: 'Сыровяленая говядина · Высший сорт',
  composition: 'говядина, соль поваренная пищевая, специи',
  storage: 'от +2 °C до +6 °C',
  shelfLife: 'не более 45 суток',
  weight: '100 г',
};

const SALYAMI_MINI_DETAILS = {
  title: 'Mini salyami',
  subtitle: 'Сырокопчёная колбаса · Высший сорт',
  composition: 'говядина, говяжий жир, мясо птицы, соль поваренная пищевая, специи, нитрит натрия (Е250)',
  storage: 'от +2 °C до +6 °C (влажность 75–78%, вакуум)',
  shelfLife: 'не более 30 суток',
  weight: '100 г',
};

const BRESAOLA_2_DETAILS = {
  title: 'Брезаола',
  subtitle: 'Сыровяленая говядина · Высший сорт',
  composition: 'говядина, соль поваренная пищевая, специи',
  storage: 'от +2 °C до +6 °C',
  shelfLife: 'не более 45 суток',
  weight: '100 г',
};

const TRANCH_DETAILS = {
  title: 'Транч',
  subtitle: 'Сыровяленое изделие из конины · Высший сорт',
  composition: 'конина, соль поваренная пищевая, специи',
  storage: 'от +2 °C до +6 °C',
  shelfLife: 'не более 45 суток',
  weight: '100 г',
};

// Каталог фотографий для каждой категории (плейсхолдеры для первого этапа)
export const PRODUCTS_DATA = {
  sagban: {
    'varenaya-kolbasa': [
      { id: 'sag-var-1', image: '/images/products/varenaya-kolbasa/mortadella-bologna-s-fistashkami-900g.jpg', isPlaceholder: false, index: 1 },
      { id: 'sag-var-2', image: '/images/products/varenaya-kolbasa/klassicheskaya-govyazhya-ms-sagban.jpg', isPlaceholder: false, index: 2 },
      { id: 'sag-var-3', image: '/images/products/varenaya-kolbasa/vetchina-govyazhya-600g.jpg', isPlaceholder: false, index: 3 },
      { id: 'sag-var-4', image: '/images/products/varenaya-kolbasa/doktorskaya-d80-ms-sagban.jpg', isPlaceholder: false, index: 4 },
      { id: 'sag-var-5', image: '/images/products/varenaya-kolbasa/doktorskaya-oshpaz-ms-500-700g.jpg', isPlaceholder: false, index: 5 },
      { id: 'sag-var-6', image: '/images/products/varenaya-kolbasa/maxsus-govyazhya-ms-500-700g.jpg', isPlaceholder: false, index: 6 },
      { id: 'sag-var-7', image: '/images/products/varenaya-kolbasa/doktorskaya-osobaya-ms-700g.jpg', isPlaceholder: false, index: 7 },
      { id: 'sag-var-8', image: '/images/products/varenaya-kolbasa/neizhnaya-ms-sagban.jpg', isPlaceholder: false, index: 8 },
      { id: 'sag-var-9', image: '/images/products/varenaya-kolbasa/prima-ms-sagban.jpg', isPlaceholder: false, index: 9 },
      { id: 'sag-var-10', image: '/images/products/varenaya-kolbasa/doktorskaya-ms-sagban-pro.jpg', isPlaceholder: false, index: 10 },
      { id: 'sag-var-11', image: '/images/products/varenaya-kolbasa/doktorskaya-ms-d80-700g.jpg', isPlaceholder: false, index: 11 },
      { id: 'sag-var-12', image: '/images/products/varenaya-kolbasa/lyubitelskaya-osobaya-ms-sagban.jpg', isPlaceholder: false, index: 12 },
      { id: 'sag-var-13', image: '/images/products/varenaya-kolbasa/estonskaya-premium-ms-sagban.jpg', isPlaceholder: false, index: 13 },
      { id: 'sag-var-14', image: '/images/products/varenaya-kolbasa/dlya-zavtraka-ms-400g.jpg', isPlaceholder: false, index: 14 },
      { id: 'sag-var-15', image: '/images/products/varenaya-kolbasa/shedevr-blue.jpg', isPlaceholder: false, index: 15 },
      { id: 'sag-var-16', image: '/images/products/varenaya-kolbasa/molochniy-ekstra-ms-sagban.jpg', isPlaceholder: false, index: 16 },
      { id: 'sag-var-17', image: '/images/products/varenaya-kolbasa/ekstra-ms-400g.jpg', isPlaceholder: false, index: 17 },
      { id: 'sag-var-18', image: '/images/products/varenaya-kolbasa/molochnaya-ekstra-ms-400g.jpg', isPlaceholder: false, index: 18 },
    ],
    'sosiski-sardelki': [
      { id: 'sag-sos-1', image: '/images/products/sosiski-sardelki/sosiski-molochnye-ekstra-ms.jpg', isPlaceholder: false, index: 1 },
      { id: 'sag-sos-2', image: '/images/products/sosiski-sardelki/sosiski-govyazhyi-ms.jpg', isPlaceholder: false, index: 2 },
      { id: 'sag-sos-3', image: '/images/products/sosiski-sardelki/sosiski-kurinye-1kg-ms.jpg', isPlaceholder: false, index: 3 },
      { id: 'sag-sos-4', image: '/images/products/sosiski-sardelki/sardelki-govyazhyi-ms.jpg', isPlaceholder: false, index: 4 },
      { id: 'sag-sos-5', image: '/images/products/sosiski-sardelki/sosiski-molochnye-ekstra-ms-500g.jpg', isPlaceholder: false, index: 5 },
      { id: 'sag-sos-6', image: '/images/products/sosiski-sardelki/sosiski-govyazhyi-ms-700g.jpg', isPlaceholder: false, index: 6 },
      { id: 'sag-sos-7', image: '/images/products/sosiski-sardelki/sardelki-govyazhyi-ms-500g.jpg', isPlaceholder: false, index: 7 },
      { id: 'sag-sos-8', image: '/images/products/sosiski-sardelki/sosiski-molochnye-ekstra-ms-400g.jpg', isPlaceholder: false, index: 8 },
      { id: 'sag-sos-9', image: '/images/products/sosiski-sardelki/sosiski-s-syrom-ms-400g.jpg', isPlaceholder: false, index: 9 },
      { id: 'sag-sos-10', image: '/images/products/sosiski-sardelki/sosiski-egerskie-ms-400g.jpg', isPlaceholder: false, index: 10 },
      { id: 'sag-sos-11', image: '/images/products/sosiski-sardelki/sosiski-tigr-sagban-450g.jpg', isPlaceholder: false, index: 11 },
      { id: 'sag-sos-12', image: '/images/products/sosiski-sardelki/hot-dog-govyazhi-d17-900g.jpg', isPlaceholder: false, index: 12 },
      { id: 'sag-sos-13', image: '/images/products/sosiski-sardelki/sosiski-gril-premium-sagban-400g.jpg', isPlaceholder: false, index: 13 },
      { id: 'sag-sos-14', image: '/images/products/sosiski-sardelki/sosiski-sagban-farms-ms-360g.jpg', isPlaceholder: false, index: 14 },
      { id: 'sag-sos-15', image: '/images/products/sosiski-sardelki/barbekyu-s-syrom-ms-sagban-700g.jpg', isPlaceholder: false, index: 15 },
      { id: 'sag-sos-16', image: '/images/products/sosiski-sardelki/barbekyu-iz-baraniny-ms-sagban-700g.jpg', isPlaceholder: false, index: 16 },
      { id: 'sag-sos-17', image: '/images/products/sosiski-sardelki/barbekyu-iz-govyadiny-ms-sagban-700g.jpg', isPlaceholder: false, index: 17 },
      { id: 'sag-sos-18', image: '/images/products/sosiski-sardelki/barbekyu-kurinoe-ms-sagban-700g.jpg', isPlaceholder: false, index: 18 },
    ],
    'kopchenaya-kolbasa': [
      { id: 'sag-kop-1', image: '/images/products/kopchenaya-kolbasa/krakovskaya-premium-sagban-600g.jpg', isPlaceholder: false, index: 1 },
      { id: 'sag-kop-2', image: '/images/products/kopchenaya-kolbasa/servelat-vyderzhannaya-sagban-500-700g.jpg', isPlaceholder: false, index: 2 },
      { id: 'sag-kop-3', image: '/images/products/kopchenaya-kolbasa/salyami-vyderzhannaya-sagban-500-700g.jpg', isPlaceholder: false, index: 3 },
      { id: 'sag-kop-4', image: '/images/products/kopchenaya-kolbasa/servelat-aristo-sagban.jpg', isPlaceholder: false, index: 4 },
      { id: 'sag-kop-5', image: '/images/products/kopchenaya-kolbasa/salyami-s-syrom-sagban-700g.jpg', isPlaceholder: false, index: 5 },
      { id: 'sag-kop-6', image: '/images/products/kopchenaya-kolbasa/aristokrat-okhotnichi-400g.jpg', isPlaceholder: false, index: 6 },
      { id: 'sag-kop-7', image: '/images/products/kopchenaya-kolbasa/knuty-kurinye-meat-sticks-sagban-70g.jpg', isPlaceholder: false, index: 7 },
      { id: 'sag-kop-8', image: '/images/products/kopchenaya-kolbasa/knuty-govyazhyi-meat-sticks-sagban-70g.jpg', isPlaceholder: false, index: 8 },
      { id: 'sag-kop-9', image: '/images/products/kopchenaya-kolbasa/knuty-s-syrom-meat-sticks-sagban-70g.jpg', isPlaceholder: false, index: 9 },
      { id: 'sag-kop-10', image: '/images/products/kopchenaya-kolbasa/myasnye-palochki-aristo-sagban-100g.jpg', isPlaceholder: false, index: 10 },
      { id: 'sag-kop-11', image: '/images/products/kopchenaya-kolbasa/myasnye-palochki-s-syrom-sagban-100g.jpg', isPlaceholder: false, index: 11 },
      { id: 'sag-kop-12', image: '/images/products/kopchenaya-kolbasa/aristokrat-mini-ms-sagban-50g.jpg', isPlaceholder: false, index: 12 },
      { id: 'sag-kop-13', image: '/images/products/kopchenaya-kolbasa/mini-salyami-sagban-50g.jpg', isPlaceholder: false, index: 13 },
      { id: 'sag-kop-14', image: '/images/products/kopchenaya-kolbasa/servelat-burkhan-ms-sagban-450-900g.jpg', isPlaceholder: false, index: 14 },
      { id: 'sag-kop-15', image: '/images/products/kopchenaya-kolbasa/servelat-avstriyskiy-ms-sagban-450g.jpg', isPlaceholder: false, index: 15 },
      { id: 'sag-kop-16', image: '/images/products/kopchenaya-kolbasa/servelat-sagban-500-700-900g.jpg', isPlaceholder: false, index: 16 },
      { id: 'sag-kop-17', image: '/images/products/kopchenaya-kolbasa/krakovskaya-ms-sagban.jpg', isPlaceholder: false, index: 17 },
      { id: 'sag-kop-18', image: '/images/products/kopchenaya-kolbasa/krakovskaya-domashnyaya-300g.jpg', isPlaceholder: false, index: 18 },
      { id: 'sag-kop-19', image: '/images/products/kopchenaya-kolbasa/okhotnichi-kolbaski-ms-sagban-400g.jpg', isPlaceholder: false, index: 19 },
      { id: 'sag-kop-20', image: '/images/products/kopchenaya-kolbasa/salyami-estonskaya-900g.jpg', isPlaceholder: false, index: 20 },
      { id: 'sag-kop-21', image: '/images/products/kopchenaya-kolbasa/servelat-domashniy-500-900g.jpg', isPlaceholder: false, index: 21 },
      { id: 'sag-kop-22', image: '/images/products/kopchenaya-kolbasa/sevimli-kolbasa-ms-sagban-1-3kg.jpg', isPlaceholder: false, index: 22 },
      { id: 'sag-kop-23', image: '/images/products/kopchenaya-kolbasa/servelat-meros-ms-sagban-1-1kg.jpg', isPlaceholder: false, index: 23 },
      { id: 'sag-kop-24', image: '/images/products/kopchenaya-kolbasa/salyami-chorizo-ms-sagban-1-6kg.jpg', isPlaceholder: false, index: 24 },
      { id: 'sag-kop-25', image: '/images/products/kopchenaya-kolbasa/servelat-sinyuga-1kg.jpg', isPlaceholder: false, index: 25 },
      { id: 'sag-kop-26', image: '/images/products/kopchenaya-kolbasa/chesnochnaya-amismok-sagban-500g.jpg', isPlaceholder: false, index: 26 },
      { id: 'sag-kop-27', image: '/images/products/kopchenaya-kolbasa/servelat-pro-sagban-500g.jpg', isPlaceholder: false, index: 27 },
      { id: 'sag-kop-28', image: '/images/products/kopchenaya-kolbasa/servelat-tallinskaya-1-2kg.jpg', isPlaceholder: false, index: 28 },
      { id: 'sag-kop-29', image: '/images/products/kopchenaya-kolbasa/govyazhya-amismok-1-2kg.jpg', isPlaceholder: false, index: 29 },
      { id: 'sag-kop-30', image: '/images/products/kopchenaya-kolbasa/bomba-sagban-800g.jpg', isPlaceholder: false, index: 30 },
      { id: 'sag-kop-31', image: '/images/products/kopchenaya-kolbasa/traditsionniy-servelat-1-2kg.jpg', isPlaceholder: false, index: 31 },
      { id: 'sag-kop-32', image: '/images/products/kopchenaya-kolbasa/servelat-sherkhon-d55-700g.jpg', isPlaceholder: false, index: 32 },
      { id: 'sag-kop-33', image: '/images/products/kopchenaya-kolbasa/servelat-burkhan-sagban-250g.jpg', isPlaceholder: false, index: 33 },
      { id: 'sag-kop-34', image: '/images/products/kopchenaya-kolbasa/servelat-avstriyskiy-sagban-250g.jpg', isPlaceholder: false, index: 34 },
      { id: 'sag-kop-35', image: '/images/products/kopchenaya-kolbasa/okhotnichi-kolbaski-ms-sagban-200g.jpg', isPlaceholder: false, index: 35 },
    ],
    'myasnye-delikatesy': [
      { id: 'prem-del-1', image: '/images/products/myasnye-delikatesy/til-rulet-ms-sagban-1kg.jpg', isPlaceholder: false, index: 1 },
      { id: 'prem-del-2', image: '/images/products/myasnye-delikatesy/kazi-makhsus-ms-sagban.jpg', isPlaceholder: false, index: 2 },
      { id: 'prem-del-3', image: '/images/products/myasnye-delikatesy/kazi-sur-400g.jpg', isPlaceholder: false, index: 3 },
      { id: 'prem-del-4', image: '/images/products/myasnye-delikatesy/kazi-500g.jpg', isPlaceholder: false, index: 4 },
      { id: 'prem-del-5', image: '/images/products/myasnye-delikatesy/yulduzcha-naturalniy-1kg.jpg', isPlaceholder: false, index: 5 },
      { id: 'prem-del-6', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-yulduzcha-ms-sagban.jpg', isPlaceholder: false, index: 6 },
      { id: 'prem-del-7', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-tandyr-ms-sagban.jpg', isPlaceholder: false, index: 7 },
      { id: 'prem-del-8', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-archali-ms-sagban.jpg', isPlaceholder: false, index: 8 },
      { id: 'prem-del-9', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-s-syrom-ms-sagban.jpg', isPlaceholder: false, index: 9 },
      { id: 'prem-del-10', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-tushenka-ms-sagban.jpg', isPlaceholder: false, index: 10 },
      { id: 'prem-del-11', image: '/images/products/myasnye-delikatesy/mol-tush-ms-sagban.jpg', isPlaceholder: false, index: 11 },
      { id: 'prem-del-12', image: '/images/products/myasnye-delikatesy/rulet-iz-koniny-tush-900g.jpg', isPlaceholder: false, index: 12 },
      { id: 'prem-del-13', image: '/images/products/myasnye-delikatesy/rulet-koniny-700g.jpg', isPlaceholder: false, index: 13 },
      { id: 'prem-del-14', image: '/images/products/myasnye-delikatesy/yangilik-iz-govyadiny-400g-2kg.jpg', isPlaceholder: false, index: 14 },
      { id: 'prem-del-15', image: '/images/products/myasnye-delikatesy/busido-ms-sagban.jpg', isPlaceholder: false, index: 15 },
      { id: 'prem-del-16', image: '/images/products/myasnye-delikatesy/koy-rulet-tornado-ms-sagban.jpg', isPlaceholder: false, index: 16 },
      { id: 'prem-del-17', image: '/images/products/myasnye-delikatesy/delikates-govyadina-vak-ms-sagban.jpg', isPlaceholder: false, index: 17 },
      { id: 'prem-del-18', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-nezhny-gold-ms-sagban.jpg', isPlaceholder: false, index: 18 },
      { id: 'prem-del-19', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-nezhny-red-ms-sagban.jpg', isPlaceholder: false, index: 19 },
      { id: 'prem-del-20', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-nezhny-gold-ms-sagban-2.jpg', isPlaceholder: false, index: 20 },
      { id: 'prem-del-21', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-nezhny-red-ms-sagban-2.jpg', isPlaceholder: false, index: 21 },
      { id: 'prem-del-22', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-ms-sagban.jpg', isPlaceholder: false, index: 22 },
      { id: 'prem-del-23', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-sagban-700g.jpg', isPlaceholder: false, index: 23 },
      { id: 'prem-del-24', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-400-800g.jpg', isPlaceholder: false, index: 24 },
      { id: 'prem-del-25', image: '/images/products/myasnye-delikatesy/indeyka-sharik.jpg', isPlaceholder: false, index: 25 },
      { id: 'prem-del-26', image: '/images/products/myasnye-delikatesy/kuritsa-i-okorochka-400-1-2kg.jpg', isPlaceholder: false, index: 26 },
      { id: 'prem-del-27', image: '/images/products/myasnye-delikatesy/indeyka-grudinka-setka-1-8kg.jpg', isPlaceholder: false, index: 27 },
      { id: 'prem-del-28', image: '/images/products/myasnye-delikatesy/indeyka-grudinka-1-8kg.jpg', isPlaceholder: false, index: 28 },
      { id: 'prem-del-29', image: '/images/products/myasnye-delikatesy/tovuk-rulet-ms-sagban.jpg', isPlaceholder: false, index: 29 },
    ],
    'narezki': [
      { id: 'sag-nar-1', image: '/images/products/narezki/indeyka-grudka-indeyki-150g.jpg', isPlaceholder: false, index: 1, details: UTINAYA_GRUDKA_DETAILS },
      { id: 'sag-nar-2', image: '/images/products/narezki/indeyka-grudka-indeyki-150g-2.jpg', isPlaceholder: false, index: 2, details: INDEYKA_2_DETAILS },
      { id: 'sag-nar-3', image: '/images/products/narezki/busido-mramor-150g.jpg', isPlaceholder: false, index: 3, details: BUSIDO_DETAILS },
      { id: 'sag-nar-4', image: '/images/products/narezki/dumba-s-paprikoy-100g.jpg', isPlaceholder: false, index: 4, details: DUMBA_DETAILS },
      { id: 'sag-nar-5', image: '/images/products/narezki/aristo-okhotnichi-kolbaski-100g.jpg', isPlaceholder: false, index: 5, details: OKHOTNICHI_ARISTO_DETAILS },
      { id: 'sag-nar-6', image: '/images/products/narezki/sheyka-syrokopcheny-delikates-100g.jpg', isPlaceholder: false, index: 6 },
      { id: 'sag-nar-7', image: '/images/products/narezki/basturma-syrovyaleny-delikates-100g.jpg', isPlaceholder: false, index: 7, details: BASTURMA_DETAILS },
      { id: 'sag-nar-8', image: '/images/products/narezki/bresaola-syrovyaleny-delikates-100g.jpg', isPlaceholder: false, index: 8, details: BRESAOLA_1_DETAILS },
      { id: 'sag-nar-9', image: '/images/products/narezki/salyami-mini-100g.jpg', isPlaceholder: false, index: 9, details: SALYAMI_MINI_DETAILS },
      { id: 'sag-nar-10', image: '/images/products/narezki/bresaola-syrovyaleny-delikates-100g-2.jpg', isPlaceholder: false, index: 10, details: BRESAOLA_2_DETAILS },
      { id: 'sag-nar-11', image: '/images/products/narezki/tranch-delikates-iz-koniny-100g.jpg', isPlaceholder: false, index: 11, details: TRANCH_DETAILS },
    ],
  },
  premiyum: {
    'varenaya-kolbasa': [
      { id: 'prem-var-1', image: '/images/products/varenaya-kolbasa/mortadella-bologna-s-fistashkami-900g.jpg', isPlaceholder: false, index: 1 },
      { id: 'prem-var-2', image: '/images/products/varenaya-kolbasa/klassicheskaya-govyazhya-ms-sagban.jpg', isPlaceholder: false, index: 2 },
      { id: 'prem-var-3', image: '/images/products/varenaya-kolbasa/vetchina-govyazhya-600g.jpg', isPlaceholder: false, index: 3 },
      { id: 'prem-var-4', image: '/images/products/varenaya-kolbasa/doktorskaya-d80-ms-sagban.jpg', isPlaceholder: false, index: 4 },
      { id: 'prem-var-5', image: '/images/products/varenaya-kolbasa/doktorskaya-oshpaz-ms-500-700g.jpg', isPlaceholder: false, index: 5 },
      { id: 'prem-var-6', image: '/images/products/varenaya-kolbasa/maxsus-govyazhya-ms-500-700g.jpg', isPlaceholder: false, index: 6 },
      { id: 'prem-var-7', image: '/images/products/varenaya-kolbasa/doktorskaya-osobaya-ms-700g.jpg', isPlaceholder: false, index: 7 },
      { id: 'prem-var-8', image: '/images/products/varenaya-kolbasa/neizhnaya-ms-sagban.jpg', isPlaceholder: false, index: 8 },
      { id: 'prem-var-9', image: '/images/products/varenaya-kolbasa/prima-ms-sagban.jpg', isPlaceholder: false, index: 9 },
      { id: 'prem-var-10', image: '/images/products/varenaya-kolbasa/doktorskaya-ms-sagban-pro.jpg', isPlaceholder: false, index: 10 },
      { id: 'prem-var-11', image: '/images/products/varenaya-kolbasa/doktorskaya-ms-d80-700g.jpg', isPlaceholder: false, index: 11 },
      { id: 'prem-var-12', image: '/images/products/varenaya-kolbasa/lyubitelskaya-osobaya-ms-sagban.jpg', isPlaceholder: false, index: 12 },
      { id: 'prem-var-13', image: '/images/products/varenaya-kolbasa/estonskaya-premium-ms-sagban.jpg', isPlaceholder: false, index: 13 },
      { id: 'prem-var-14', image: '/images/products/varenaya-kolbasa/dlya-zavtraka-ms-400g.jpg', isPlaceholder: false, index: 14 },
      { id: 'prem-var-15', image: '/images/products/varenaya-kolbasa/shedevr-blue.jpg', isPlaceholder: false, index: 15 },
      { id: 'prem-var-16', image: '/images/products/varenaya-kolbasa/molochniy-ekstra-ms-sagban.jpg', isPlaceholder: false, index: 16 },
      { id: 'prem-var-17', image: '/images/products/varenaya-kolbasa/ekstra-ms-400g.jpg', isPlaceholder: false, index: 17 },
      { id: 'prem-var-18', image: '/images/products/varenaya-kolbasa/molochnaya-ekstra-ms-400g.jpg', isPlaceholder: false, index: 18 },
    ],
    'sosiski-sardelki': [
      { id: 'prem-sos-1', image: '/images/products/sosiski-sardelki/sosiski-molochnye-ekstra-ms.jpg', isPlaceholder: false, index: 1 },
      { id: 'prem-sos-2', image: '/images/products/sosiski-sardelki/sosiski-govyazhyi-ms.jpg', isPlaceholder: false, index: 2 },
      { id: 'prem-sos-3', image: '/images/products/sosiski-sardelki/sosiski-kurinye-1kg-ms.jpg', isPlaceholder: false, index: 3 },
      { id: 'prem-sos-4', image: '/images/products/sosiski-sardelki/sardelki-govyazhyi-ms.jpg', isPlaceholder: false, index: 4 },
      { id: 'prem-sos-5', image: '/images/products/sosiski-sardelki/sosiski-molochnye-ekstra-ms-500g.jpg', isPlaceholder: false, index: 5 },
      { id: 'prem-sos-6', image: '/images/products/sosiski-sardelki/sosiski-govyazhyi-ms-700g.jpg', isPlaceholder: false, index: 6 },
      { id: 'prem-sos-7', image: '/images/products/sosiski-sardelki/sardelki-govyazhyi-ms-500g.jpg', isPlaceholder: false, index: 7 },
      { id: 'prem-sos-8', image: '/images/products/sosiski-sardelki/sosiski-molochnye-ekstra-ms-400g.jpg', isPlaceholder: false, index: 8 },
      { id: 'prem-sos-9', image: '/images/products/sosiski-sardelki/sosiski-s-syrom-ms-400g.jpg', isPlaceholder: false, index: 9 },
      { id: 'prem-sos-10', image: '/images/products/sosiski-sardelki/sosiski-egerskie-ms-400g.jpg', isPlaceholder: false, index: 10 },
      { id: 'prem-sos-11', image: '/images/products/sosiski-sardelki/sosiski-tigr-sagban-450g.jpg', isPlaceholder: false, index: 11 },
      { id: 'prem-sos-12', image: '/images/products/sosiski-sardelki/hot-dog-govyazhi-d17-900g.jpg', isPlaceholder: false, index: 12 },
      { id: 'prem-sos-13', image: '/images/products/sosiski-sardelki/sosiski-gril-premium-sagban-400g.jpg', isPlaceholder: false, index: 13 },
      { id: 'prem-sos-14', image: '/images/products/sosiski-sardelki/sosiski-sagban-farms-ms-360g.jpg', isPlaceholder: false, index: 14 },
      { id: 'prem-sos-15', image: '/images/products/sosiski-sardelki/barbekyu-s-syrom-ms-sagban-700g.jpg', isPlaceholder: false, index: 15 },
      { id: 'prem-sos-16', image: '/images/products/sosiski-sardelki/barbekyu-iz-baraniny-ms-sagban-700g.jpg', isPlaceholder: false, index: 16 },
      { id: 'prem-sos-17', image: '/images/products/sosiski-sardelki/barbekyu-iz-govyadiny-ms-sagban-700g.jpg', isPlaceholder: false, index: 17 },
      { id: 'prem-sos-18', image: '/images/products/sosiski-sardelki/barbekyu-kurinoe-ms-sagban-700g.jpg', isPlaceholder: false, index: 18 },
    ],
    'kopchenaya-kolbasa': [
      { id: 'prem-kop-1', image: '/images/products/kopchenaya-kolbasa/krakovskaya-premium-sagban-600g.jpg', isPlaceholder: false, index: 1 },
      { id: 'prem-kop-2', image: '/images/products/kopchenaya-kolbasa/servelat-vyderzhannaya-sagban-500-700g.jpg', isPlaceholder: false, index: 2 },
      { id: 'prem-kop-3', image: '/images/products/kopchenaya-kolbasa/salyami-vyderzhannaya-sagban-500-700g.jpg', isPlaceholder: false, index: 3 },
      { id: 'prem-kop-4', image: '/images/products/kopchenaya-kolbasa/servelat-aristo-sagban.jpg', isPlaceholder: false, index: 4 },
      { id: 'prem-kop-5', image: '/images/products/kopchenaya-kolbasa/salyami-s-syrom-sagban-700g.jpg', isPlaceholder: false, index: 5 },
      { id: 'prem-kop-6', image: '/images/products/kopchenaya-kolbasa/aristokrat-okhotnichi-400g.jpg', isPlaceholder: false, index: 6 },
      { id: 'prem-kop-7', image: '/images/products/kopchenaya-kolbasa/knuty-kurinye-meat-sticks-sagban-70g.jpg', isPlaceholder: false, index: 7 },
      { id: 'prem-kop-8', image: '/images/products/kopchenaya-kolbasa/knuty-govyazhyi-meat-sticks-sagban-70g.jpg', isPlaceholder: false, index: 8 },
      { id: 'prem-kop-9', image: '/images/products/kopchenaya-kolbasa/knuty-s-syrom-meat-sticks-sagban-70g.jpg', isPlaceholder: false, index: 9 },
      { id: 'prem-kop-10', image: '/images/products/kopchenaya-kolbasa/myasnye-palochki-aristo-sagban-100g.jpg', isPlaceholder: false, index: 10 },
      { id: 'prem-kop-11', image: '/images/products/kopchenaya-kolbasa/myasnye-palochki-s-syrom-sagban-100g.jpg', isPlaceholder: false, index: 11 },
      { id: 'prem-kop-12', image: '/images/products/kopchenaya-kolbasa/aristokrat-mini-ms-sagban-50g.jpg', isPlaceholder: false, index: 12 },
      { id: 'prem-kop-13', image: '/images/products/kopchenaya-kolbasa/mini-salyami-sagban-50g.jpg', isPlaceholder: false, index: 13 },
      { id: 'prem-kop-14', image: '/images/products/kopchenaya-kolbasa/servelat-burkhan-ms-sagban-450-900g.jpg', isPlaceholder: false, index: 14 },
      { id: 'prem-kop-15', image: '/images/products/kopchenaya-kolbasa/servelat-avstriyskiy-ms-sagban-450g.jpg', isPlaceholder: false, index: 15 },
      { id: 'prem-kop-16', image: '/images/products/kopchenaya-kolbasa/servelat-sagban-500-700-900g.jpg', isPlaceholder: false, index: 16 },
      { id: 'prem-kop-17', image: '/images/products/kopchenaya-kolbasa/krakovskaya-ms-sagban.jpg', isPlaceholder: false, index: 17 },
      { id: 'prem-kop-18', image: '/images/products/kopchenaya-kolbasa/krakovskaya-domashnyaya-300g.jpg', isPlaceholder: false, index: 18 },
      { id: 'prem-kop-19', image: '/images/products/kopchenaya-kolbasa/okhotnichi-kolbaski-ms-sagban-400g.jpg', isPlaceholder: false, index: 19 },
      { id: 'prem-kop-20', image: '/images/products/kopchenaya-kolbasa/salyami-estonskaya-900g.jpg', isPlaceholder: false, index: 20 },
      { id: 'prem-kop-21', image: '/images/products/kopchenaya-kolbasa/servelat-domashniy-500-900g.jpg', isPlaceholder: false, index: 21 },
      { id: 'prem-kop-22', image: '/images/products/kopchenaya-kolbasa/sevimli-kolbasa-ms-sagban-1-3kg.jpg', isPlaceholder: false, index: 22 },
      { id: 'prem-kop-23', image: '/images/products/kopchenaya-kolbasa/servelat-meros-ms-sagban-1-1kg.jpg', isPlaceholder: false, index: 23 },
      { id: 'prem-kop-24', image: '/images/products/kopchenaya-kolbasa/salyami-chorizo-ms-sagban-1-6kg.jpg', isPlaceholder: false, index: 24 },
      { id: 'prem-kop-25', image: '/images/products/kopchenaya-kolbasa/servelat-sinyuga-1kg.jpg', isPlaceholder: false, index: 25 },
      { id: 'prem-kop-26', image: '/images/products/kopchenaya-kolbasa/chesnochnaya-amismok-sagban-500g.jpg', isPlaceholder: false, index: 26 },
      { id: 'prem-kop-27', image: '/images/products/kopchenaya-kolbasa/servelat-pro-sagban-500g.jpg', isPlaceholder: false, index: 27 },
      { id: 'prem-kop-28', image: '/images/products/kopchenaya-kolbasa/servelat-tallinskaya-1-2kg.jpg', isPlaceholder: false, index: 28 },
      { id: 'prem-kop-29', image: '/images/products/kopchenaya-kolbasa/govyazhya-amismok-1-2kg.jpg', isPlaceholder: false, index: 29 },
      { id: 'prem-kop-30', image: '/images/products/kopchenaya-kolbasa/bomba-sagban-800g.jpg', isPlaceholder: false, index: 30 },
      { id: 'prem-kop-31', image: '/images/products/kopchenaya-kolbasa/traditsionniy-servelat-1-2kg.jpg', isPlaceholder: false, index: 31 },
      { id: 'prem-kop-32', image: '/images/products/kopchenaya-kolbasa/servelat-sherkhon-d55-700g.jpg', isPlaceholder: false, index: 32 },
      { id: 'prem-kop-33', image: '/images/products/kopchenaya-kolbasa/servelat-burkhan-sagban-250g.jpg', isPlaceholder: false, index: 33 },
      { id: 'prem-kop-34', image: '/images/products/kopchenaya-kolbasa/servelat-avstriyskiy-sagban-250g.jpg', isPlaceholder: false, index: 34 },
      { id: 'prem-kop-35', image: '/images/products/kopchenaya-kolbasa/okhotnichi-kolbaski-ms-sagban-200g.jpg', isPlaceholder: false, index: 35 },
    ],
    'myasnye-delikatesy': [
      { id: 'prem-del-1', image: '/images/products/myasnye-delikatesy/til-rulet-ms-sagban-1kg.jpg', isPlaceholder: false, index: 1 },
      { id: 'prem-del-2', image: '/images/products/myasnye-delikatesy/kazi-makhsus-ms-sagban.jpg', isPlaceholder: false, index: 2 },
      { id: 'prem-del-3', image: '/images/products/myasnye-delikatesy/mol-tush-ms-sagban.jpg', isPlaceholder: false, index: 3 },
      { id: 'prem-del-4', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-yulduzcha-ms-sagban.jpg', isPlaceholder: false, index: 4 },
      { id: 'prem-del-5', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-tandyr-ms-sagban.jpg', isPlaceholder: false, index: 5 },
      { id: 'prem-del-6', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-archali-ms-sagban.jpg', isPlaceholder: false, index: 6 },
      { id: 'prem-del-7', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-s-syrom-ms-sagban.jpg', isPlaceholder: false, index: 7 },
      { id: 'prem-del-8', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-tushenka-ms-sagban.jpg', isPlaceholder: false, index: 8 },
      { id: 'prem-del-9', image: '/images/products/myasnye-delikatesy/tovuk-rulet-ms-sagban.jpg', isPlaceholder: false, index: 9 },
      { id: 'prem-del-10', image: '/images/products/myasnye-delikatesy/busido-ms-sagban.jpg', isPlaceholder: false, index: 10 },
      { id: 'prem-del-11', image: '/images/products/myasnye-delikatesy/koy-rulet-tornado-ms-sagban.jpg', isPlaceholder: false, index: 11 },
      { id: 'prem-del-12', image: '/images/products/myasnye-delikatesy/delikates-govyadina-vak-ms-sagban.jpg', isPlaceholder: false, index: 12 },
      { id: 'prem-del-13', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-nezhny-gold-ms-sagban.jpg', isPlaceholder: false, index: 13 },
      { id: 'prem-del-14', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-nezhny-red-ms-sagban.jpg', isPlaceholder: false, index: 14 },
      { id: 'prem-del-15', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-nezhny-gold-ms-sagban-2.jpg', isPlaceholder: false, index: 15 },
      { id: 'prem-del-16', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-nezhny-red-ms-sagban-2.jpg', isPlaceholder: false, index: 16 },
      { id: 'prem-del-17', image: '/images/products/myasnye-delikatesy/rulet-iz-govyadiny-ms-sagban.jpg', isPlaceholder: false, index: 17 },
      { id: 'prem-del-18', image: '/images/products/myasnye-delikatesy/rulet-iz-myasa-ptitsy-ms-sagban.jpg', isPlaceholder: false, index: 18 },
      { id: 'prem-del-19', image: '/images/products/myasnye-delikatesy/indeyka-sharik-ms-sagban.jpg', isPlaceholder: false, index: 19 },
    ],
    'narezki': [
      { id: 'prem-nar-1', image: '/images/products/narezki/indeyka-grudka-indeyki-150g.jpg', isPlaceholder: false, index: 1, details: UTINAYA_GRUDKA_DETAILS },
      { id: 'prem-nar-2', image: '/images/products/narezki/indeyka-grudka-indeyki-150g-2.jpg', isPlaceholder: false, index: 2, details: INDEYKA_2_DETAILS },
      { id: 'prem-nar-3', image: '/images/products/narezki/busido-mramor-150g.jpg', isPlaceholder: false, index: 3, details: BUSIDO_DETAILS },
      { id: 'prem-nar-4', image: '/images/products/narezki/dumba-s-paprikoy-100g.jpg', isPlaceholder: false, index: 4, details: DUMBA_DETAILS },
      { id: 'prem-nar-5', image: '/images/products/narezki/aristo-okhotnichi-kolbaski-100g.jpg', isPlaceholder: false, index: 5, details: OKHOTNICHI_ARISTO_DETAILS },
      { id: 'prem-nar-6', image: '/images/products/narezki/sheyka-syrokopcheny-delikates-100g.jpg', isPlaceholder: false, index: 6 },
      { id: 'prem-nar-7', image: '/images/products/narezki/basturma-syrovyaleny-delikates-100g.jpg', isPlaceholder: false, index: 7, details: BASTURMA_DETAILS },
      { id: 'prem-nar-8', image: '/images/products/narezki/bresaola-syrovyaleny-delikates-100g.jpg', isPlaceholder: false, index: 8, details: BRESAOLA_1_DETAILS },
      { id: 'prem-nar-9', image: '/images/products/narezki/salyami-mini-100g.jpg', isPlaceholder: false, index: 9, details: SALYAMI_MINI_DETAILS },
      { id: 'prem-nar-10', image: '/images/products/narezki/bresaola-syrovyaleny-delikates-100g-2.jpg', isPlaceholder: false, index: 10, details: BRESAOLA_2_DETAILS },
      { id: 'prem-nar-11', image: '/images/products/narezki/tranch-delikates-iz-koniny-100g.jpg', isPlaceholder: false, index: 11, details: TRANCH_DETAILS },
    ],
  }
};

export const COMPANY_INFO = {
  brand: 'Торговая марка «SAGBAN»',
  legalName: 'ООО «GOLD TEK»',
  address: [
    '100175, Республика Узбекистан,',
    'г. Ташкент, ул. Келес йули, 31/а.'
  ],
  emails: [
    'sagban@inbox.ru',
    'tosagban@inbox.ru'
  ],
  phones: [
    { label: 'Торговый отдел Ташкент:', number: '+(998) 90-167-64-69', tel: '+998901676469' },
    { label: 'Региональный торговый отдел:', number: '+(998) 95-145-93-00', tel: '+998951459300' }
  ],
  socials: [
    {
      name: 'Facebook',
      label: 'facebook.com/sagban.info',
      url: 'https://www.facebook.com/Sagban.info/'
    },
    {
      name: 'Instagram',
      label: 'sagban.info',
      url: 'https://www.instagram.com/sagban.info?igsh=MWl1NnJ6MWVtM2Z4eQ=='
    },
    {
      name: 'Telegram',
      label: 'Sagban',
      url: 'https://t.me/SagbanCallcentr'
    }
  ]
};

// Salom маҳсулотлари — Salom тугмаси босилганда кўринади
export const SALOM_PRODUCTS = {
  'varenaya-kolbasa': [
    { id: 'sal-var-1', image: '/images/products/varenaya-kolbasa/shedevr-olmos-2-ms-salom-1-6kg.jpg', isPlaceholder: false, index: 1 },
    { id: 'sal-var-2', image: '/images/products/varenaya-kolbasa/doktorskaya-r-salom-500-700g.jpg', isPlaceholder: false, index: 2 },
    { id: 'sal-var-3', image: '/images/products/varenaya-kolbasa/dlya-zavtraka-krasny-salom-900g.jpg', isPlaceholder: false, index: 3 },
    { id: 'sal-var-4', image: '/images/products/varenaya-kolbasa/dlya-zavtraka-zhelty-salom-900g.jpg', isPlaceholder: false, index: 4 },
    { id: 'sal-var-5', image: '/images/products/varenaya-kolbasa/doktorskaya-domik-salom-900g.jpg', isPlaceholder: false, index: 5 },
    { id: 'sal-var-6', image: '/images/products/varenaya-kolbasa/doktorskaya-nukus-salom-900g.jpg', isPlaceholder: false, index: 6 },
    { id: 'sal-var-7', image: '/images/products/varenaya-kolbasa/doktorskaya-naklejka-msh-900g.jpg', isPlaceholder: false, index: 7 },
  ],
  'sosiski-sardelki': [
    { id: 'sal-sos-1', image: '/images/products/sosiski-sardelki/sosiski-molochnye-ms-salom.jpg', isPlaceholder: false, index: 1 },
    { id: 'sal-sos-2', image: '/images/products/sosiski-sardelki/sosiski-kurinye-ms-salom.jpg', isPlaceholder: false, index: 2 },
    { id: 'sal-sos-3', image: '/images/products/sosiski-sardelki/sosiski-tigr-neo-ms-salom.jpg', isPlaceholder: false, index: 3 },
    { id: 'sal-sos-4', image: '/images/products/sosiski-sardelki/sosiski-delikatesnye-ms-salom.jpg', isPlaceholder: false, index: 4 },
    { id: 'sal-sos-5', image: '/images/products/sosiski-sardelki/egerskie-sosiski-ms-salom-700g.jpg', isPlaceholder: false, index: 5 },
    { id: 'sal-sos-6', image: '/images/products/sosiski-sardelki/sosiski-molochnye-salom-450g.jpg', isPlaceholder: false, index: 6 },
    { id: 'sal-sos-7', image: '/images/products/sosiski-sardelki/sosiski-raduga-salom-400g.jpg', isPlaceholder: false, index: 7 },
    { id: 'sal-sos-8', image: '/images/products/sosiski-sardelki/sosiski-piramida-salom-600g.jpg', isPlaceholder: false, index: 8 },
    { id: 'sal-sos-9', image: '/images/products/sosiski-sardelki/sosiski-salom-farms-360g.jpg', isPlaceholder: false, index: 9 },
  ],
  'kopchenaya-kolbasa': [
    { id: 'sal-kop-1', image: '/images/products/kopchenaya-kolbasa/okhotnichi-kolbaski-ms-salom-200g.jpg', isPlaceholder: false, index: 1 },
    { id: 'sal-kop-2', image: '/images/products/kopchenaya-kolbasa/servelat-avstriyskiy-salom-450g.jpg', isPlaceholder: false, index: 2 },
    { id: 'sal-kop-3', image: '/images/products/kopchenaya-kolbasa/servelat-bukhoro-salom-700g.jpg', isPlaceholder: false, index: 3 },
    { id: 'sal-kop-4', image: '/images/products/kopchenaya-kolbasa/tallinskaya-salom-500g.jpg', isPlaceholder: false, index: 4 },
    { id: 'sal-kop-5', image: '/images/products/kopchenaya-kolbasa/moskovskaya-ms-salom-500g.jpg', isPlaceholder: false, index: 5 },
    { id: 'sal-kop-6', image: '/images/products/kopchenaya-kolbasa/servelat-moskovskaya-msh-salom-500g.jpg', isPlaceholder: false, index: 6 },
    { id: 'sal-kop-7', image: '/images/products/kopchenaya-kolbasa/servelat-bogatyrskaya-salom-450g.jpg', isPlaceholder: false, index: 7 },
    { id: 'sal-kop-8', image: '/images/products/kopchenaya-kolbasa/pokon-salom-1-2kg.jpg', isPlaceholder: false, index: 8 },
    { id: 'sal-kop-9', image: '/images/products/kopchenaya-kolbasa/okhotnichi-kolbaski-ms-salom-400g.jpg', isPlaceholder: false, index: 9 },
    { id: 'sal-kop-10', image: '/images/products/kopchenaya-kolbasa/krakovskaya-padishakh-salom-300g.jpg', isPlaceholder: false, index: 10 },
    { id: 'sal-kop-11', image: '/images/products/kopchenaya-kolbasa/krakovskaya-salom-300g.jpg', isPlaceholder: false, index: 11 },
    { id: 'sal-kop-12', image: '/images/products/kopchenaya-kolbasa/krakovskaya-salom-200g.jpg', isPlaceholder: false, index: 12 },
    { id: 'sal-kop-13', image: '/images/products/kopchenaya-kolbasa/servelat-boboy-1-2kg.jpg', isPlaceholder: false, index: 13 },
    { id: 'sal-kop-14', image: '/images/products/kopchenaya-kolbasa/servelat-baton-1-2kg.jpg', isPlaceholder: false, index: 14 },
  ],
  'myasnye-delikatesy': [
    { id: 'sal-del-1', image: '/images/products/myasnye-delikatesy/kazi-salom-400g.jpg', isPlaceholder: false, index: 1 },
    { id: 'sal-del-2', image: '/images/products/myasnye-delikatesy/kazy-salom-200g.jpg', isPlaceholder: false, index: 2 },
    { id: 'sal-del-3', image: '/images/products/myasnye-delikatesy/rulet-bantik-salom-1kg.jpg', isPlaceholder: false, index: 3 },
    { id: 'sal-del-4', image: '/images/products/myasnye-delikatesy/shayba-eco-400g.jpg', isPlaceholder: false, index: 4 },
    { id: 'sal-del-5', image: '/images/products/myasnye-delikatesy/indeyka-grudinka-salom-yangi-300g.jpg', isPlaceholder: false, index: 5 },
    { id: 'sal-del-6', image: '/images/products/myasnye-delikatesy/yangilik-salom-yangi-300g.jpg', isPlaceholder: false, index: 6 },
    { id: 'sal-del-7', image: '/images/products/myasnye-delikatesy/indeyka-sevimli-salom-200g.jpg', isPlaceholder: false, index: 7 },
    { id: 'sal-del-8', image: '/images/products/myasnye-delikatesy/mazali-indeyka-salom-300g.jpg', isPlaceholder: false, index: 8 },
    { id: 'sal-del-9', image: '/images/products/myasnye-delikatesy/mazali-yangilik-salom-300g.jpg', isPlaceholder: false, index: 9 },
  ],
};
