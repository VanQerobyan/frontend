import { useState } from "react";
import {Counter} from "./Components/Counter";
import type { CounterType } from "./Type/Types";
import TimerList from "./Components/TimerList";


export default function App() {
  const[counterState, setCounterState] = useState<CounterType[]>([])
  const [ID, setID]= useState(1);

  function deleteTime(id:number) {
    setCounterState(prev =>prev.filter(timeId => timeId.id !== id));
  }

  function endTime(id: number) {
    setCounterState(prev => prev.map(timer => {
      return timer.id === id ? {...timer,endTime: Date.now(), completed: true} : {...timer}
    }))
  }
  
return (
  <div className="min-h-screen bg-slate-100 px-6 py-10 text-slate-800">
    <div className="mx-auto max-w-6xl">

      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Countdown Timers
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Create and manage your timers
          </p>
        </div>

        <button
          onClick={() => {setCounterState([...counterState, {id: ID, startTime: Date.now(), endTime: null, completed: false}]); setID(ID => ID + 1) }}
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
        >
          + Create Timer
        </button>
      </div>

      <div className="mb-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {
          counterState.map(counter => {
            return  (
              <Counter 
                key={counter.id}
                counter={counter}
                deleteTime={deleteTime}
                endTime = {endTime}
              />
            )
          })
        }
      </div>

      <TimerList 
        counterState={counterState}
      />

    </div>
  </div>
)
}