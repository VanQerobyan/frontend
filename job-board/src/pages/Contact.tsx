export const Contact = () => {
    return (
        <div className="px-4 py-14 sm:px-6">

            <div className="mx-auto max-w-4xl">

                <div className="mb-14 text-center">
                    <h2 className="mb-5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-6xl">
                        Contact Us
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-400">
                        Have a question or need help?
                        We'd love to hear from you and help you find the right opportunity.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-slate-900/70 hover:shadow-emerald-950/20">

                        <div className="mb-5 text-4xl transition-transform duration-500 group-hover:scale-110">
                            📧
                        </div>

                        <h3 className="mb-3 text-lg font-bold text-emerald-400">
                            Email
                        </h3>

                        <p className="text-sm text-slate-400">
                            support@jobfinder.com
                        </p>

                    </div>

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900/70 hover:shadow-cyan-950/20">

                        <div className="mb-5 text-4xl transition-transform duration-500 group-hover:scale-110">
                            📍
                        </div>

                        <h3 className="mb-3 text-lg font-bold text-cyan-400">
                            Location
                        </h3>

                        <p className="text-sm text-slate-400">
                            Yerevan, Armenia
                        </p>

                    </div>

                    <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-8 text-center shadow-lg shadow-black/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-slate-900/70 hover:shadow-blue-950/20">

                        <div className="mb-5 text-4xl transition-transform duration-500 group-hover:scale-110">
                            📞
                        </div>

                        <h3 className="mb-3 text-lg font-bold text-blue-400">
                            Phone
                        </h3>

                        <p className="text-sm text-slate-400">
                            +374 00 00 00 00
                        </p>

                    </div>

                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm tracking-wide text-slate-500">
                        We are here to help you take the next step in your career.
                    </p>
                </div>

            </div>

        </div>
    )
}