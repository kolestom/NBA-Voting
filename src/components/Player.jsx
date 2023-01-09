import { useState } from "react";
import axios from "axios";

const Player = ({player,disable, setDisable}) => {

    const [voteText, setVoteText] = useState('Vote');

    console.log(disable);
    const toggleVote = () => {
        setDisable(current => !current)
        axios.post("https://demoapi.com/api/vote", {
            id : player.id
          })

          .then(function (response) {
            setVoteText('Voted')
            setDisable(current => !current)
          })
          .catch(function (error) {
            });
        }

    return ( 
        <div>
            <p>{player.name}</p>
            <button onClick={toggleVote} disabled={disable}>{voteText}</button>

        </div>
     );
}
 
export default Player;