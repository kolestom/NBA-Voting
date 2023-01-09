import { useState } from "react";
import Player from "./Player";

const Team = ({team, disable, setDisable}) => {
    const [showDetails, setShowDetails] = useState('Show more');
    const [display, setDisplay] = useState(false);

    const toggleButton = () => {
        showDetails === 'Show more' ? setShowDetails('Show less') : setShowDetails('Show more')
        setDisplay(!display)
    }
    return ( 
        <div>
            <h1>{team.name}</h1>
            <h2>{team.stadium}</h2>
            <button onClick={toggleButton} >{showDetails}</button>
            {display && <div>
                {team.franchisePlayers.map(player => (
                    <Player key={player.id} {...{player,disable, setDisable}}/>
                ))}
            </div>}
        </div>
     );
}
 
export default Team;