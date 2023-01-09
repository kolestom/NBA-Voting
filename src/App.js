import React, { useEffect, useState } from "react"
import getData from "./util/getData"
import axios from "axios";
import Team from "./components/Team";

const App = () => {

  const [disable, setDisable] = useState(false);
  const [search, setSearch] = useState('');

  const [data, setData] = useState([]);
  useEffect(() => {
    const init = async () => {
      setData(await getData()
      )
    }
    init()
  }, [])
  


  // EZ MUKODIK!!!!
  // let filteredData = data.filter(team => {
  //   for (const player of team.franchisePlayers) {
  //     return player.name.includes(search)
  //   }
  // })

  let filteredData = data.filter(team => team.franchisePlayers.some(player => player.name.includes(search)))
  console.log(filteredData);

  return (
    <div>
      <p>NBA Teams - all star voting</p>
      <input type="text" placeholder="Search player" value={search} onInput={(e) => setSearch(e.target.value)}/>
      {filteredData && filteredData.map(team => (
        <Team key={team.name} {...{team, disable, setDisable}}/>
      ))}
      {}
    </div>
  )
}

export default App
