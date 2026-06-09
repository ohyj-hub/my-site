import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sql, ensureTable } from '@/lib/db';
import { adminLogout } from './actions';

type Consultation = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');

  if (session?.value !== 'authenticated') {
    redirect('/admin/login');
  }

  await ensureTable();
  const rows = (await sql`
    SELECT id, name, email, message, created_at
    FROM consultations
    ORDER BY created_at DESC
  `) as Consultation[];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="bg-slate-900 border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-blue-400 tracking-widest uppercase">Admin</span>
            <h1 className="text-lg font-bold text-white mt-0.5">상담 신청 목록</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">총 {rows.length}건</span>
            <form action={adminLogout}>
              <button
                type="submit"
                className="text-sm text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-800"
              >
                로그아웃
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {rows.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            <div className="text-4xl mb-4">📭</div>
            <p>아직 상담 신청이 없습니다.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {rows.map((row) => (
              <div
                key={row.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                      {row.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{row.name}</p>
                      <a
                        href={`mailto:${row.email}`}
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        {row.email}
                      </a>
                    </div>
                  </div>
                  <time className="text-xs text-slate-500 shrink-0 mt-1">
                    {new Date(row.created_at).toLocaleString('ko-KR', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </time>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap pl-12">
                  {row.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
