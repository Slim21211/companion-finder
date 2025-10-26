import Link from 'next/link';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function ListPage() {
  const entries = await prisma.testEntry.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Тестовая страница 2 - Список записей
        </h1>

        <div className="mb-8">
          <Link href="/test/input" className="text-primary hover:underline">
            ← Вернуться к вводу
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Записи из БД:</h2>

          {entries.length === 0 ? (
            <p className="text-muted-foreground">Пока нет записей</p>
          ) : (
            <div className="space-y-4">
              {entries.map(
                (entry: { id: string; content: string; createdAt: Date }) => (
                  <div
                    key={entry.id}
                    className="p-4 border rounded-lg bg-card dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div className="font-semibold text-lg">{entry.content}</div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {new Date(entry.createdAt).toLocaleString('ru-RU')}
                    </div>
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
