import { AddBook } from "./Components/AddBook";
import { BookList } from "./Components/BookList";
import { BookContextProvider } from "./context/BookContextProvider";

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-10">

      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-3xl" />
        <div className="absolute -right-40 top-[20%] h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-[-200px] left-[35%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-400/[0.06] animate-[ping_9s_ease-in-out_infinite]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/30 to-transparent" />

        {/* Floating books */}
        <div className="absolute left-[6%] top-[12%] animate-pulse text-5xl opacity-[0.07]">
          📖
        </div>

        <div className="absolute right-[8%] top-[18%] animate-bounce text-5xl opacity-[0.06] [animation-duration:4s]">
          📚
        </div>

        <div className="absolute bottom-[20%] left-[10%] animate-pulse text-6xl opacity-[0.05] [animation-duration:5s]">
          📕
        </div>

        <div className="absolute bottom-[12%] right-[12%] animate-bounce text-5xl opacity-[0.06] [animation-duration:5s]">
          📗
        </div>

        <div className="absolute left-[45%] top-[7%] animate-pulse text-3xl opacity-[0.05] [animation-duration:4s]">
          ✦
        </div>

        <div className="absolute right-[35%] bottom-[8%] animate-pulse text-4xl opacity-[0.05] [animation-duration:6s]">
          ✧
        </div>

        {/* Tiny library particles */}
        <div className="absolute left-[25%] top-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400/30" />
        <div className="absolute left-[70%] top-[40%] h-1 w-1 animate-pulse rounded-full bg-purple-400/30 [animation-duration:3s]" />
        <div className="absolute left-[80%] bottom-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-300/20 [animation-duration:4s]" />
      </div>

      {/* Main content */}
      <BookContextProvider>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8">

          {/* Library title */}
          <div className="flex flex-col items-center py-4 text-center">
            <div className="mb-4 flex items-center gap-3 text-indigo-300">
              <span className="text-2xl opacity-70">✦</span>

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-400/70">
                Digital Library
              </span>

              <span className="text-2xl opacity-70">✦</span>
            </div>

            <h1 className="bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Where Stories Come Alive
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Organize your favorite stories, discover old favorites,
              and keep every chapter of your reading journey close.
            </p>

            <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-indigo-300/50">
              A quiet corner for curious readers
            </p>
          </div>

          <AddBook />
          <BookList />

          {/* Footer quote */}
          <div className="py-4 text-center">
            <p className="text-xs italic text-slate-600">
              “A good book is a journey you can take without leaving your chair.”
            </p>

            <div className="mt-3 flex justify-center gap-2 text-sm text-indigo-500/40">
              <span>✦</span>
              <span>📖</span>
              <span>✦</span>
            </div>
          </div>
        </div>
      </BookContextProvider>
    </div>
  );
}
