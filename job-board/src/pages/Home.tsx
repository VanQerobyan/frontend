export const Home = () => {
    return (
        <div>
            
            <div className="absolute left-[-60px] top-20 h-48 w-48 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-emerald-500/15 blur-[100px]"></div>
            <div className="absolute right-[-50px] top-32 h-56 w-56 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-cyan-500/15 blur-[100px]"></div>
            <div className="absolute bottom-[-40px] left-[15%] h-52 w-52 animate-[pulse_5s_ease-in-out_infinite] rounded-full bg-blue-500/15 blur-[100px]"></div>
            <div className="absolute bottom-[-20px] right-[15%] h-44 w-44 animate-[pulse_3.5s_ease-in-out_infinite] rounded-full bg-emerald-400/15 blur-[100px]"></div>

            <div className="absolute left-[12%] top-[20%] z-0 animate-[bounce_4s_infinite] cursor-default text-5xl opacity-10 transition-all duration-500 hover:scale-125 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                💼
            </div>
            <div className="absolute right-[15%] top-[18%] z-0 animate-[pulse_3s_infinite] cursor-default text-5xl opacity-10 transition-all duration-500 hover:scale-125 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                🔍
            </div>
            <div className="absolute bottom-[25%] left-[18%] z-0 animate-[bounce_5s_infinite_1s] cursor-default text-4xl opacity-10 transition-all duration-500 hover:scale-125 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                📄
            </div>
            <div className="absolute bottom-[20%] right-[12%] z-0 animate-[spin_6s_linear_infinite] cursor-default text-5xl opacity-10 transition-all duration-500 hover:scale-125 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                🎯
            </div>
            <div className="absolute left-[50%] top-[8%] z-0 animate-[bounce_6s_infinite] cursor-default text-3xl opacity-10 transition-all duration-500 hover:scale-125 hover:opacity-100 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                🚀
            </div>

            <div className="relative z-10 flex max-w-4xl flex-col items-center">
                
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/30 px-4 py-1.5 text-sm font-medium text-emerald-400 shadow-lg backdrop-blur-md transition-colors hover:border-emerald-500/50 hover:bg-slate-800/50">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                    </span>
                    Your Future Starts Here
                </div>

                <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl">
                    Find Your <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(52,211,153,0.2)] transition-all duration-500 hover:drop-shadow-[0_0_40px_rgba(34,211,238,0.4)]">
                        Dream Job
                    </span>
                </h1>

                <p className="mb-10 max-w-2xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
                    Discover opportunities that perfectly match your skills, experience, 
                    and career goals at top-tier companies.
                </p>

                <div className="mb-16 flex flex-wrap justify-center gap-3">
                    <div className="cursor-pointer rounded-xl border border-slate-700/50 bg-slate-800/40 px-6 py-2.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:text-emerald-300 hover:shadow-[0_10px_20px_-10px_rgba(52,211,153,0.3)]">
                        ✨ Remote Work
                    </div>
                    <div className="cursor-pointer rounded-xl border border-slate-700/50 bg-slate-800/40 px-6 py-2.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:text-cyan-300 hover:shadow-[0_10px_20px_-10px_rgba(34,211,238,0.3)]">
                        🚀 Top Companies
                    </div>
                    <div className="cursor-pointer rounded-xl border border-slate-700/50 bg-slate-800/40 px-6 py-2.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-300 hover:shadow-[0_10px_20px_-10px_rgba(59,130,246,0.3)]">
                        💼 Flexible Hours
                    </div>
                </div>

                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-slate-700/50 rounded-3xl border border-slate-700/50 bg-slate-900/40 p-4 shadow-2xl backdrop-blur-xl md:max-w-3xl">
                    
                    <div className="group flex flex-col items-center justify-center p-6 transition-all duration-300 hover:bg-slate-800/30 sm:rounded-l-2xl">
                        <div className="mb-2 text-4xl font-black tracking-tight text-emerald-400 transition-transform duration-300 group-hover:scale-110">
                            100+
                        </div>
                        <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-emerald-200">
                            Active Jobs
                        </div>
                    </div>

                    <div className="group flex flex-col items-center justify-center p-6 transition-all duration-300 hover:bg-slate-800/30">
                        <div className="mb-2 text-4xl font-black tracking-tight text-cyan-400 transition-transform duration-300 group-hover:scale-110">
                            50+
                        </div>
                        <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-cyan-200">
                            Companies
                        </div>
                    </div>

                    <div className="group flex flex-col items-center justify-center p-6 transition-all duration-300 hover:bg-slate-800/30 sm:rounded-r-2xl">
                        <div className="mb-2 text-4xl font-black tracking-tight text-blue-400 transition-transform duration-300 group-hover:scale-110">
                            20+
                        </div>
                        <div className="text-sm font-semibold uppercase tracking-wider text-slate-400 transition-colors group-hover:text-blue-200">
                            Categories
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}