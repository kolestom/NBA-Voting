import { useState } from "react";
import Player from "./Player";

const Team = ({team, disable, setDisable}) => {
    const [display, setDisplay] = useState(false);

    return ( 
        <div>
            <h1>{team.name}</h1>
            <h2>{team.stadium}</h2>
            <button onClick={() => setDisplay(!display)} >{display ? 'Show less' : 'Show more'}</button>
            {display && <div>
                {team.franchisePlayers.map(player => (
                    <Player key={player.id} {...{player,disable, setDisable}}/>
                ))}
            </div>}
        </div>
     );
}
 
export default Team;