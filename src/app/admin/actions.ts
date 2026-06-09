'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function adminLogin(
  _prev: { error: string } | null,
  formData: FormData
) {
  const password = formData.get('password') as string;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return { error: '서버 설정 오류: ADMIN_PASSWORD가 설정되지 않았습니다.' };
  }

  if (password !== adminPassword) {
    return { error: '비밀번호가 올바르지 않습니다.' };
  }

  const cookieStore = await cookies();
  cookieStore.set('admin_session', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 8, // 8시간
    path: '/',
  });

  redirect('/admin');
}

export async function adminLogout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_session');
  redirect('/admin/login');
}
