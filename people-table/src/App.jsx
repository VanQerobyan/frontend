import { useState } from "react"

export default function App() {

  const [peoples, setPeoples] = useState([
    {id: 1, name: "Կարեն", surname: "Պողոսյան", salary: 200000, gender: "արական"},
    {id: 2, name: "Անի", surname: "Պետրոսյան", salary: 250000, gender: "իգական"},
    {id: 3, name: "Աննա", surname: "Հովհաննիսյան", salary: 300000, gender: "իգական"},
    {id: 4, name: "Արմեն", surname: "Սերոբյան", salary: 280000, gender: "արական"},
    {id: 5, name: "Հայկ", surname: "Գրիգորյան", salary: 240000, gender: "արական"}
  ])
  function removePeople(id){
    setPeoples(peoples.filter(people => people.id !== id));
  }

  return (
    <>
    <div>
      <table className="border-separate border-spacing-1">
        <thead>
          <tr>
            <th className="bg-gray-500 text-white rounded-lg px-2 py-2">Id</th>
            <th className="bg-indigo-500 text-white rounded-lg px-3 py-2">Name</th>
            <th className="bg-indigo-500 text-white rounded-lg px-6 py-2">Surname</th>
            <th className="bg-indigo-500 text-white rounded-lg px-5 py-2">Salary</th>
            <th className="bg-indigo-500 text-white rounded-lg px-2 py-2">Gender</th>
          </tr>

        </thead>

        <tbody>
          {peoples.map(people => 
              <tr key={people.id} >
                <td className="px-2">{people.id}</td>
                <td className="px-2">{people.name}</td>
                <td className="px-2">{people.surname}</td>
                <td className="px-2">{people.salary} AMD</td>
                <td className="px-2">{people.gender}</td>
              
              <td>
              <button className = "bg-red-500 text-white rounded-lg px-3 py-2" onClick = {() => removePeople(people.id)}>Remove</button>
            </td> 
            </tr> 
            )
          }
        </tbody>
      </table>
    </div>
</>
  )
}