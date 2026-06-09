'use client';

import { useActionState } from 'react';
import { adminLogin } from '../actions';

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(adminLogin, null);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-950 text-blue-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Admin
          </div>
          <h1 className="text-2xl font-bold text-white">관리자 로그인</h1>
        </div>

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1.5">
              비밀번호
            </label>
            <input
              type="password"
              name="password"
              required
              autoFocus
              placeholder="비밀번호를 입력하세요"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {state?.error && (
            <p className="text-red-400 text-sm bg-red-950/50 border border-red-800 rounded-lg px-4 py-2.5">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-full text-base transition-colors duration-150"
          >
            {isPending ? '확인 중...' : '로그인'}
          </button>
        </form>
      </div>
    </div>
  );
}
