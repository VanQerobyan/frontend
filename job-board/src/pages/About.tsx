export const About = () => {
    return (
        <div className="px-4 py-14 sm:px-6">

            <div className="mx-auto w-full max-w-5xl text-center">

                <h2 className="mb-6 animate-pulse bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-5xl font-black tracking-tight text-transparent drop-shadow-lg md:text-6xl">
                    About Us
                </h2>

                <p className="mx-auto mb-12 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
                    Find the right opportunity for your future.
                    Our platform helps job seekers discover opportunities
                    that match their skills, experience, and career goals.
                </p>

                <div className="mb-14 grid gap-6 md:grid-cols-3">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-slate-900/70 hover:shadow-emerald-950/30">

                        <div className="mb-4 text-4xl transition-transform duration-500 hover:scale-110">
                            🔎
                        </div>

                        <h3 className="mb-3 text-xl font-bold text-emerald-400">
                            Discover Jobs
                        </h3>

                        <p className="text-sm leading-7 text-slate-400">
                            Explore job opportunities from different
                            companies and categories.
                        </p>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900/70 hover:shadow-cyan-950/30">

                        <div className="mb-4 text-4xl transition-transform duration-500 hover:scale-110">
                            💼
                        </div>

                        <h3 className="mb-3 text-xl font-bold text-cyan-400">
                            Find Your Match
                        </h3>

                        <p className="text-sm leading-7 text-slate-400">
                            Browse detailed information about every
                            position and find opportunities that fit you.
                        </p>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-7 shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-slate-900/70 hover:shadow-blue-950/30">

                        <div className="mb-4 text-4xl transition-transform duration-500 hover:scale-110">
                            🚀
                        </div>

                        <h3 className="mb-3 text-xl font-bold text-blue-400">
                            Build Your Career
                        </h3>

                        <p className="text-sm leading-7 text-slate-400">
                            Take the next step toward your professional
                            goals and discover new opportunities.
                        </p>

                    </div>

                </div>

                <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/40 p-8 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-500 hover:border-emerald-400/30">

                    <h3 className="mb-4 text-2xl font-bold text-slate-100">
                        Why choose us?
                    </h3>

                    <p className="text-base leading-8 text-slate-400">
                        We make job searching simple, clear, and convenient.
                        Whether you're starting your career or looking for
                        your next opportunity, our platform helps you explore
                        available positions and find the right direction
                        for your future.
                    </p>

                </div>

            </div>

        </div>
    )
}