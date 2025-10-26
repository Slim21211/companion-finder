// app/api/test/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';

// Схема валидации входных данных
const createEntrySchema = z.object({
  content: z.string().min(1).max(500),
});

export async function POST(request: NextRequest) {
  console.log('POST /api/test вызван');

  try {
    // Получаем тело запроса
    const body = await request.json();
    console.log('Получено тело запроса:', body);

    // Валидация через Zod
    const { content } = createEntrySchema.parse(body);
    console.log('Валидация пройдена. content:', content);

    // Сохраняем запись в БД через Prisma
    console.log('DATABASE_URL в рантайме:', process.env.DATABASE_URL);

    const entry = await prisma.testEntry.create({
      data: { content },
    });
    console.log('Запись успешно создана:', entry);

    // Возвращаем успешный ответ
    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    // Логируем ошибку для отладки
    console.error('Ошибка при создании записи:', error);

    // Если ошибка валидации Zod
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Валидация не прошла', details: error },
        { status: 400 }
      );
    }

    // Любая другая ошибка
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}

export async function GET() {
  console.log('GET /api/test вызван');
  try {
    const entries = await prisma.testEntry.findMany({
      orderBy: { createdAt: 'desc' },
    });
    console.log('Найденные записи:', entries);
    return NextResponse.json(entries);
  } catch (error) {
    console.error('Ошибка при получении записей:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
