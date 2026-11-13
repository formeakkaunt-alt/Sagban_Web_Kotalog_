/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FAF7F2',   // Основной молочно-кремовый фон
          100: '#F4ECE2',  // Мягкий оттенок для плашек и карточек
          200: '#EADCCE',  // Тонкие рамки
          300: '#DECAB7',  // Акцентные границы
          400: '#CDAF95',
        },
        burgundy: {
          50: '#FAF0F1',
          100: '#F2D7DA',
          200: '#E3ACB2',
          300: '#CE7883',
          400: '#A94351',
          500: '#7E2533',
          600: '#6E1F2C',
          700: '#5C1A24',  // Основной тёмно-бордовый / винный акцент
          800: '#48131B',  // Глубокий бордовый для активных элементов
          900: '#380E15',  // Самый тёмный бордовый для заголовков
          950: '#22080D',
        },
        ink: {
          900: '#261619',  // Тёмно-коричневый для читаемости основного текста
          800: '#361F23',  // Тёмно-коричневый второстепенный
          700: '#4D3337',  // Читаемый средний текст
          500: '#7A5B60',  // Приглушённый текст
          400: '#A08085',  // Светло-коричневый для меток
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 8px 30px -4px rgba(92, 26, 36, 0.04), 0 2px 8px -2px rgba(92, 26, 36, 0.02)',
        'premium-hover': '0 18px 40px -8px rgba(92, 26, 36, 0.10), 0 6px 14px -3px rgba(92, 26, 36, 0.03)',
        'premium-modal': '0 25px 60px -15px rgba(34, 8, 13, 0.45)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      }
    },
  },
  plugins: [],
}
