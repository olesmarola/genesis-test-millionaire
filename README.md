## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Task

Потрібно реалізувати базовий функціонал гри «Хто хоче стати мільйонером»:

- Гравець по черзі відповідає на одне з 12 питань (`Done`✓);
- Кожне питання має 4 варіанти відповіді й тільки одну правильну (`Done`✓).
- Якщо відповідь правильна — гравець потрапляє на наступне питання (`Done`✓).
  Якщо відповідь неправильна — гравець потрапляє на фінальний екран (`Done`✓).
- На фінальному екрані потрібно показати загальний результат гри. Дизайн
  для верстки надається. Верстка повинна бути адаптивною. Технічні вимоги:
- Використовувати цей макет для верстки (`Done`✓).
- Зробити верстку адаптивною (від iPhone 5 до 4к дисплеїв) (`Done`✓).
- Верстку виконати без використання CSS фреймворків (`Done`✓).
- Конфіг гри (питання, відповіді, гроші за правильну відповідь і.т.д.) повинен
  бути в форматі json (`Done`✓).
- Конфіг повинен бути розширюваний: більше чи менше варіантів відповідей
  на питання; кілька правильних відповідей та ін. (`Done`✓)
- Завдання реалізувати з використанням свіжої версії React  (`Done`✓).
- Результат роботи розмістити на github (+ github pages demo) з
  md-інструкцією по установці і запуску. (`Done`✓)
- Весь клієнтський код повинен повністю відповідати правилам "з коробки" eslint / airbnb.
  🙂  (`Done`✓)
  Опціонально:
- Весь клієнтський код зробити типізованим через TypeScript. (`Done`✓)
- На git commit всередині репозиторія тестового завдання додати запуск
  eslint на змінені файли, а на git push запуск unit-tests.  (`Done (without unit-tests)`✓)

## Deploy on Vercel

You can find demo version of current test task on Vercel: https://genesis-test-millionaire.vercel.app/
