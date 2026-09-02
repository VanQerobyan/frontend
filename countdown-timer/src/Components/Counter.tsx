import { useEffect, useRef, useState } from "react"

import type { CounterType } from "../Type/Types";

export type Props = {
    counter: CounterType;
    deleteTime: (id: number) => void
    endTime: (id: number) => void
}

export  function Counter(props: Props) {
    const [minute, setMinute] = useState(1)
    const [second, setSecond] = useState(0);


    useEffect(() => {
        idInt.current = setInterval(() => {
            setSecond((second) => {
                if (second === 0) {

                    setMinute(minute => {
                        if (minute === 0) {
                            props.endTime(props.counter.id);
                            clearInterval(idInt.current);
                            return 0; 
                         }
                    
                        return minute - 1;
                    });
                    return  59;
                } else {
                    return second - 1;
                }
        })
        }, 1000)

        return () => {
            clearInterval(idInt.current);
        }

    }, [])



    const idInt = useRef(0);




    function stopTime(id: number) {
        if (props.counter.id === id) {
            setMinute(1);
            setSecond(0);
            pauseTime(id);
        }
    }

    function pauseTime(id: number) {
        if (props.counter.id === id) {
            if (idInt.current) {
                clearInterval(idInt.current)
            }
            idInt.current = 0;
        }
    }

    function playTime() {
        if (!idInt.current) {
            idInt.current = setInterval(() => {
                setSecond(second => {
                    if (second  === 0) {
                        setMinute(minute => {
                            if (minute === 0) {
                            props.endTime(props.counter.id);
                            clearInterval(idInt.current);
                            return 0;
                            }
                        return minute - 1;
                        });
                        return 59;
                    } else {
                        return second - 1;
                    }
                })
            }, 1000)
        }
    }


    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between">
                
                <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                        Counter
                    </p>

                    <p className="mt-1 text-lg font-semibold text-slate-800">
                        #{props.counter.id}
                    </p>
                </div>

                <div className="rounded-xl bg-slate-100 px-5 py-3">
                    <p className="font-mono text-3xl font-bold tabular-nums text-slate-900">
                        {minute}:{second < 10 ? `0${second}` : second}
                    </p>
                </div>

            </div>

            <div className="mt-6 grid grid-cols-3 gap-2">

                <button
                    className="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100 active:scale-95"
                    onClick={() => props.deleteTime(props.counter.id)}
                >
                    Delete
                </button>

                <button
                    className="rounded-lg bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-100 active:scale-95"
                    onClick={() => stopTime(props.counter.id)}
                >
                    Stop
                </button>

                <button
                    className="rounded-lg bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-600 transition hover:bg-amber-100 active:scale-95"
                    onClick={() => pauseTime(props.counter.id)}
                >
                    Pause
                </button>

            </div>

            <button
                className="mt-2 w-full rounded-lg bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
                onClick={() => playTime()}
            >
                Play
            </button>

        </div>
    )
}