import type { CounterType } from "../Type/Types"

type Props = {
    counterState: CounterType[]
}

export default function TimerList(props: Props) {

    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="border-b border-slate-200 px-6 py-5">
                <h2 className="text-xl font-bold text-slate-900">
                    Timer List
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                    History of your timers
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] text-left">

                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Id
                            </th>

                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Start Time
                            </th>

                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                End Time
                            </th>

                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                                Completed
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">
                        {
                            props.counterState.map(timer => {
                                return (
                                    <tr
                                        key={timer.id}
                                        className="transition hover:bg-slate-50"
                                    >
                                        <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                                            #{timer.id}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {new Date(timer.startTime).toLocaleTimeString("en-GB")}
                                        </td>

                                        <td className="px-6 py-4 text-sm text-slate-600">
                                            {timer.endTime !== null ?  new Date(timer.endTime).toLocaleTimeString("en-GB"): "-"}
                                        </td>

                                        <td className="px-6 py-4">
                                            <span
                                                className={
                                                    timer.completed
                                                        ? "rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
                                                        : "rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700"
                                                }
                                            >
                                                {timer.completed ? "Completed" : "Running"}
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>

        </div>
    )
}