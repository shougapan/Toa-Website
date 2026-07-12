export default function PremiumBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-6 py-12 text-center text-white shadow-2xl md:px-12 md:py-16">
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

        {/* 5つの限定枠インジケーター（クリスタル・ゴールド） */}
        <div className="my-10 flex flex-wrap justify-center gap-3 md:gap-4">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i} 
              className="flex h-16 w-16 flex-col items-center justify-center rounded-full border border-amber-600/30 bg-gradient-to-br from-amber-700/40 to-amber-900/60 text-[10px] font-medium tracking-wider text-amber-200/50 shadow-inner backdrop-blur-sm md:h-20 md:w-20 md:text-xs"
            >
              <span>Reserved</span>
            </div>
          ))}
          
          {/* Last 1：輝くクリスタルゴールド枠 */}
          <div className="relative flex h-16 w-16 animate-pulse flex-col items-center justify-center rounded-full border-2 border-amber-400 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 text-center font-bold text-slate-950 shadow-[0_0_20px_rgba(251,191,36,0.6)] md:h-20 md:w-20">
            <span className="text-xs md:text-sm leading-tight">Last 1</span>
            <span className="text-[8px] md:text-[9px] font-normal leading-tight opacity-90">残り1名</span>
            {/* キラリと光るエフェクトの代わりとして、枠線外側にブラー光彩を配置 */}
            <div className="absolute inset-0 -z-10 rounded-full bg-amber-400 blur-md opacity-50" />
          </div>
        </div>

        <p className="text-xs text-amber-200/75 md:text-sm">
          枠が埋まり次第、今月の審査・面談受付は完全に終了となります。
        </p>

        {/* ゴールドのシースルー（半透明）ボタン */}
        <div className="mt-8">
          <a 
            href="#contact" 
            className="inline-block rounded-full border-2 border-amber-400/80 bg-amber-400/10 px-8 py-4 text-sm font-bold tracking-wider text-amber-300 transition-all duration-300 hover:bg-amber-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(251,191,36,0.4)] md:text-base"
          >
            👉 [ プレミアム無料カウンセリングを予約する ]
          </a>
        </div>
      </div>
    </div>
  );}