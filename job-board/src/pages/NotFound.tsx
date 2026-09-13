import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Error 404
        </p>

        <h1 className="text-8xl font-black tracking-tight text-white sm:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-slate-100 sm:text-3xl">
          Page not found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <NavLink
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-emerald-500/30"
        >
          Back to home
          <span className="text-lg">→</span>
        </NavLink>
      </div>
    </div>
  );
};