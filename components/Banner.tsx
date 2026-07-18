export default function PremiumBanner() {
  // Define our 5 slots with their specific layout values going from 5 down to 1
  const slots = [
    { num: 5, type: 'reserved', label: 'Reserved' },
    { num: 4, type: 'reserved', label: 'Reserved' },
    { num: 3, type: 'reserved', label: 'Reserved' },
    { num: 2, type: 'reserved', label: 'Reserved' },
    { num: 1, type: 'active', label: 'Last 1', subLabel: '残り1名' },
  ];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-blue-900 px-4 py-12 text-center text-white shadow-2xl md:px-12 md:py-16">
      {/* 背景の高級感あるグラデーション・オーバーレイ */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-slate-900/40 to-slate-900" />
      
      {/* コンテンツエリア */}
      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="text-xl font-bold tracking-widest text-amber-200 md:text-3xl">
          大阪梅田ドクターズ結婚相談所
        </h2>
        <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-amber-400/80 md:text-sm">
          【PREMIUM COUNSELING SERVICE】
        </p>
        
        <p className="mt-6 text-sm leading-relaxed text-slate-200 md:text-base md:leading-loose">
          サポート品質を絶対的に維持するため、毎月の新規受付は一律5名様まで。<br />
          現在、空き枠は<span className="mx-1 font-bold text-amber-400 underline underline-offset-4 decoration-amber-400">【残り1名様】</span>です。
        </p>

        {/* 5つの限定枠インジケーター (Forced onto 1 single line layout with flex-row and hidden overflow protection) */}
        <div className="my-10 flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 w-full overflow-x-auto no-scrollbar">
          {slots.map((slot) => {
            if (slot.type === 'reserved') {
              return (
                <div 
                  key={slot.num} 
                  className="flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 flex-col items-center justify-center rounded-full border border-amber-600/30 bg-gradient-to-br from-amber-700/40 to-amber-900/60 font-medium tracking-wider text-amber-200/50 shadow-inner backdrop-blur-sm shrink-0"
                >
                  <span className="text-[14px] md:text-lg font-black leading-none mb-0.5">{slot.num}</span>
                  <span className="text-[8px] sm:text-[9px] md:text-xs opacity-60 leading-none">{slot.label}</span>
                </div>
              );
            }

            // Slot 1: Active glowing crystal card slot
            return (
              <div 
                key={slot.num} 
                className="relative flex h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 animate-pulse flex-col items-center justify-center rounded-full border-2 border-amber-400 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 text-center font-bold text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.6)] shrink-0"
              >
                <span className="text-[14px] md:text-lg font-black leading-none mb-0.5">{slot.num}</span>
                <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black leading-none uppercase tracking-tighter">{slot.label}</span>
                <span className="text-[6px] sm:text-[8px] md:text-[9px] font-normal leading-none opacity-90 mt-0.5">{slot.subLabel}</span>
                <div className="absolute inset-0 -z-10 rounded-full bg-amber-400 blur-md opacity-50" />
              </div>
            );
          })}
        </div>

        <p className="text-xs text-amber-200/75 md:text-sm">
          枠が埋まり次第、今月の審査・面談受付は完全に終了となります。
        </p>

      </div>
    </div>
  );
}