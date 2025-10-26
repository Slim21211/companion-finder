'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useMutation } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';

export default function InputPage() {
  const [content, setContent] = useState('');

  const mutation = useMutation({
    mutationFn: async (text: string) => {
      const res = await fetch('/api/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: text }),
      });

      if (!res.ok) throw new Error('Ошибка сохранения');
      return res.json();
    },
    onSuccess: () => {
      setContent('');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(content);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Тестовая страница 1 - Ввод данных
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Введите текст:
            </label>
            <Input
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:border-gray-700"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50"
          >
            {mutation.isPending ? 'Отправка...' : 'Сохранить в БД'}
          </button>

          {mutation.isSuccess && (
            <p className="text-green-600 dark:text-green-400">✅ Сохранено!</p>
          )}
          {mutation.isError && (
            <p className="text-red-600 dark:text-red-400">
              ❌ Ошибка сохранения
            </p>
          )}
        </form>

        <div className="mt-8">
          <Link href="/test/list" className="text-primary hover:underline">
            → Перейти к списку записей
          </Link>
        </div>
      </div>
    </div>
  );
}
