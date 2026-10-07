export const SignupHero = () => {
    return (
        <div className="relative hidden min-h-full w-[48%] overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(129,140,248,0.30),transparent_27%),radial-gradient(circle_at_88%_78%,rgba(168,85,247,0.23),transparent_29%),radial-gradient(circle_at_55%_48%,rgba(236,72,153,0.08),transparent_25%),linear-gradient(145deg,#070a1a_0%,#0b1028_48%,#12163b_100%)] shadow-[inset_-1px_0_0_rgba(255,255,255,0.04)] lg:flex lg:flex-col lg:justify-between">
            <div className="absolute -left-32 -top-32 h-[440px] w-[440px] rounded-full bg-violet-500/20 blur-[120px]" />
            <div className="absolute -bottom-32 -right-20 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[130px]" />
            <div className="absolute left-[52%] top-[46%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[120px]" />

            <div className="relative z-10 flex items-center gap-4 px-12 pt-12 xl:px-16 xl:pt-14">
                <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-gradient-to-br from-indigo-400 via-violet-500 to-fuchsia-500 text-xl font-black text-white shadow-[0_12px_40px_rgba(139,92,246,0.38)] ring-1 ring-white/[0.15]">
                    C
                </div>

                <h1 className="bg-gradient-to-r from-white via-indigo-100 to-violet-200 bg-clip-text text-3xl font-black italic tracking-[-0.045em] text-transparent drop-shadow-sm xl:text-[34px]">
                    Connecta
                </h1>
            </div>

            <div className="relative z-10 px-12 xl:px-16">
                <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.38em] text-indigo-300/80">
                    More than a social network
                </p>

                <h2 className="max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-white drop-shadow-sm xl:text-[64px]">
                    Connect.
                    <br />
                    Share.
                    <br />

                    <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                        Belong.
                    </span>
                </h2>

                <p className="mt-7 max-w-md text-[15px] leading-7 text-slate-300/70 xl:text-base">
                    A place where real people make real connections,
                    share moments and build meaningful friendships.
                </p>

                <div className="relative mt-10 h-56 max-w-[470px]">
                    <div className="absolute left-0 top-10 h-40 w-32 rotate-[-9deg] overflow-hidden rounded-[32px] bg-[linear-gradient(to_top,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.06)_65%),url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e')] bg-cover bg-center shadow-[0_24px_65px_rgba(0,0,0,0.40)] ring-1 ring-white/10 transition-all duration-500 hover:z-30 hover:-translate-y-2 hover:rotate-[-4deg] hover:scale-105">
                        <div className="flex h-full items-end rounded-[32px] bg-gradient-to-t from-slate-950/65 via-transparent to-white/5 p-4">
                            <span className="text-xs font-semibold text-white drop-shadow-md">
                                Meet people
                            </span>
                        </div>
                    </div>

                    <div className="absolute left-[105px] top-0 z-20 h-48 w-40 rotate-[3deg] overflow-hidden rounded-[36px] bg-[linear-gradient(to_top,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.05)_62%),url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1')] bg-cover bg-center shadow-[0_30px_80px_rgba(0,0,0,0.46)] ring-1 ring-white/[0.15] transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:scale-105">
                        <div className="flex h-full items-end rounded-[36px] bg-gradient-to-t from-slate-950/70 via-transparent to-white/5 p-4">
                            <span className="text-xs font-semibold text-white drop-shadow-md">
                                Share moments
                            </span>
                        </div>
                    </div>

                    <div className="absolute left-[250px] top-12 h-40 w-32 rotate-[9deg] overflow-hidden rounded-[32px] bg-[linear-gradient(to_top,rgba(15,23,42,0.88)_0%,rgba(15,23,42,0.04)_65%),url('https://images.unsplash.com/photo-1494790108377-be9c29b29330')] bg-cover bg-center shadow-[0_24px_65px_rgba(0,0,0,0.40)] ring-1 ring-white/10 transition-all duration-500 hover:z-30 hover:-translate-y-2 hover:rotate-[4deg] hover:scale-105">
                        <div className="flex h-full items-end rounded-[32px] bg-gradient-to-t from-slate-950/65 via-transparent to-white/5 p-4">
                            <span className="text-xs font-semibold text-white drop-shadow-md">
                                Be yourself
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-3 px-10 pb-9 xl:px-14">
                <div className="group rounded-[22px] bg-white/[0.045] p-4 ring-1 ring-white/[0.07] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:ring-indigo-400/20">
                    <div className="mb-3 h-1.5 w-7 rounded-full bg-indigo-400/90 shadow-[0_0_16px_rgba(129,140,248,0.6)] transition-all duration-300 group-hover:w-10" />

                    <p className="text-sm font-semibold text-white/90">
                        Meet new people
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-slate-400/70">
                        Find people who share your interests
                    </p>
                </div>

                <div className="group rounded-[22px] bg-white/[0.045] p-4 ring-1 ring-white/[0.07] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:ring-violet-400/20">
                    <div className="mb-3 h-1.5 w-7 rounded-full bg-violet-400/90 shadow-[0_0_16px_rgba(167,139,250,0.6)] transition-all duration-300 group-hover:w-10" />

                    <p className="text-sm font-semibold text-white/90">
                        Share your world
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-slate-400/70">
                        Photos, thoughts and moments
                    </p>
                </div>

                <div className="group rounded-[22px] bg-white/[0.045] p-4 ring-1 ring-white/[0.07] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] hover:ring-fuchsia-400/20">
                    <div className="mb-3 h-1.5 w-7 rounded-full bg-fuchsia-400/90 shadow-[0_0_16px_rgba(232,121,249,0.6)] transition-all duration-300 group-hover:w-10" />

                    <p className="text-sm font-semibold text-white/90">
                        Be yourself
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-slate-400/70">
                        Join a positive community
                    </p>
                </div>
            </div>
        </div>
    )
}