import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <ThemeToggle />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            CompanionFinder
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Находи людей, с которыми хочется жить, а не просто переписываться
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Социальный сервис для поиска напарников для мероприятий,
            путешествий, хобби и совместных занятий. Больше не нужно искать
            компанию в хаосе чатов!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/auth/signin"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Присоединиться
            </Link>
            <Link
              href="/test/input"
              className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-semibold"
            >
              Тестовая страница
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">По интересам</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Найди единомышленников для спорта, культуры, путешествий и учебы
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Безопасно</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Верификация профилей, система отзывов и рейтинг пользователей
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Локально</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Находи людей в твоём городе для реальных встреч
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
