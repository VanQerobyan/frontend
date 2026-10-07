export const SigninHero = () => {
    return (
        <div className="relative hidden min-h-full w-[48%] overflow-hidden bg-[radial-gradient(circle_at_18%_14%,rgba(99,102,241,0.30),transparent_27%),radial-gradient(circle_at_88%_76%,rgba(59,130,246,0.20),transparent_30%),radial-gradient(circle_at_52%_48%,rgba(139,92,246,0.10),transparent_27%),linear-gradient(145deg,#060918_0%,#0a1028_48%,#11183b_100%)] shadow-[inset_-1px_0_0_rgba(255,255,255,0.04)] lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -right-32 top-0 h-[460px] w-[460px] rounded-full bg-indigo-500/20 blur-[125px]" />
            <div className="absolute -bottom-32 left-10 h-[500px] w-[500px] rounded-full bg-violet-500/[0.18] blur-[135px]" />
            <div className="absolute left-[40%] top-[38%] h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="relative z-10 flex items-center gap-4 px-12 pt-12 xl:px-16 xl:pt-14">
                <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-indigo-400 via-violet-500 to-blue-500 text-xl font-black text-white shadow-[0_12px_40px_rgba(99,102,241,0.38)] ring-1 ring-white/[0.15]">
                    C
                </div>

                <h1 className="bg-gradient-to-r from-white via-indigo-100 to-blue-200 bg-clip-text text-3xl font-black italic tracking-[-0.045em] text-transparent drop-shadow-sm xl:text-[34px]">
                    Connecta
                </h1>
            </div>

            <div className="relative z-10 px-12 xl:px-16">
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.38em] text-indigo-300/80">
                    Welcome back
                </p>

                <h2 className="max-w-lg text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white drop-shadow-sm xl:text-[64px]">
                    Good to
                    <br />
                    see you
                    <br />
                    <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-blue-300 bg-clip-text text-transparent">
                        again.
                    </span>
                </h2>

                <p className="mt-7 max-w-md text-[15px] leading-7 text-slate-300/70 xl:text-base">
                    Continue your journey and stay connected with the people
                    and moments that matter.
                </p>

                <div className="mt-10 max-w-md rounded-[28px] bg-white/[0.045] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] ring-1 ring-white/[0.07] backdrop-blur-2xl transition-all duration-300 hover:bg-white/[0.06] hover:ring-indigo-300/[0.15]">
                    <div className="mb-5 flex">
                        <div className="h-11 w-11 rounded-full bg-[url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e')] bg-cover bg-center shadow-lg ring-[3px] ring-[#0c112b]" />

                        <div className="-ml-3 h-11 w-11 rounded-full bg-[url('https://images.unsplash.com/photo-1494790108377-be9c29b29330')] bg-cover bg-center shadow-lg ring-[3px] ring-[#0c112b]" />

                        <div className="-ml-3 h-11 w-11 rounded-full bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1')] bg-cover bg-center shadow-lg ring-[3px] ring-[#0c112b]" />

                        <div className="-ml-3 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/80 to-violet-600/80 text-xs font-bold text-white shadow-lg ring-[3px] ring-[#0c112b] backdrop-blur-xl">
                            +5
                        </div>
                    </div>

                    <p className="font-semibold leading-6 text-white/95">
                        People are already sharing their stories on Connecta.
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-400/80">
                        Come back and see what you missed.
                    </p>
                </div>
            </div>

            <div className="relative z-10 px-12 pb-12 xl:px-16">
                <p className="max-w-xs bg-gradient-to-r from-indigo-300 via-violet-300 to-blue-300 bg-clip-text text-2xl font-light italic leading-8 text-transparent">
                    Same people.
                    <br />
                    New stories.
                </p>
            </div>
        </div>
    )
}