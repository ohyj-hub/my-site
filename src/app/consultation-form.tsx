'use client';

import { useActionState } from 'react';
import { submitConsultation } from './actions';

export default function ConsultationForm() {
  const [state, formAction, isPending] = useActionState(submitConsultation, null);

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center max-w-xl mx-auto">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">상담 신청이 완료되었습니다!</h3>
        <p className="text-green-600 text-sm">빠른 시일 내에 답변 드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="max-w-xl mx-auto space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          이름 <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="홍길동"
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          이메일 <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="example@email.com"
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          문의 내용 <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="문의하실 내용을 자유롭게 작성해 주세요."
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
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
        className="w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150 shadow-lg shadow-blue-900/30"
      >
        {isPending ? '전송 중...' : '상담 신청하기 →'}
      </button>
    </form>
  );
}
