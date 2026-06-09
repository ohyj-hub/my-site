'use server';

import { sql, ensureTable } from '@/lib/db';

export async function submitConsultation(
  _prev: { success: boolean; error?: string } | null,
  formData: FormData
) {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  if (!name || !email || !message) {
    return { success: false, error: '모든 항목을 입력해 주세요.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: '올바른 이메일 주소를 입력해 주세요.' };
  }

  try {
    await ensureTable();
    await sql`
      INSERT INTO consultations (name, email, message)
      VALUES (${name}, ${email}, ${message})
    `;
    return { success: true };
  } catch (error) {
    console.error('상담 저장 오류:', error);
    return { success: false, error: '저장에 실패했습니다. 잠시 후 다시 시도해 주세요.' };
  }
}
