const services = [
  {
    icon: "🚀",
    title: "제품 기획 & 전략",
    description:
      "시장 분석과 사용자 리서치를 바탕으로 제품의 방향성을 설정하고, 팀 전체가 같은 목표를 향해 나아갈 수 있도록 로드맵을 수립합니다.",
  },
  {
    icon: "⚙️",
    title: "서비스 개발 & 운영",
    description:
      "최신 기술 스택을 활용해 안정적이고 확장 가능한 서비스를 개발합니다. 배포 이후에도 지속적인 모니터링과 개선을 통해 서비스 품질을 유지합니다.",
  },
  {
    icon: "📊",
    title: "데이터 분석 & 인사이트",
    description:
      "수집된 데이터를 분석해 의미 있는 인사이트를 도출하고, 데이터 기반의 의사결정을 지원합니다. 비즈니스 성장을 위한 핵심 지표를 정의하고 추적합니다.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <span className="text-slate-400 text-sm font-medium tracking-widest uppercase">
            Team Portal
          </span>
          <a
            href="mailto:ohyj@2359.co.kr"
            className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
          >
            ohyj@2359.co.kr
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-20 pb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          2359 Product Team
        </div>
        <h1 className="text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl">
          함께 만드는{" "}
          <span className="text-blue-600">더 나은 제품</span>
        </h1>
        <p className="mt-5 text-lg text-slate-500 max-w-xl leading-relaxed">
          저희 팀은 사용자 중심의 제품을 기획하고, 개발하며, 데이터로 성장을
          이끌어 갑니다.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-5xl mx-auto w-full px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">
          협업 또는 문의가 있으신가요?
        </h2>
        <p className="text-slate-400 mb-8 text-base">
          언제든지 편하게 연락 주세요. 빠르게 답변드리겠습니다.
        </p>
        <a
          href="mailto:ohyj@2359.co.kr"
          className="inline-block bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full text-base transition-colors duration-150 shadow-lg shadow-blue-900/30"
        >
          문의하기 →
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 text-center">
        <p className="text-slate-500 text-sm">
          © 2026 2359 Product Team. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
