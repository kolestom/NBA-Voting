import axios from "axios";

const getData = async() => {
    let data = await axios.get("https://demoapi.com/api/teams")
    // console.log(data.data);
    return data.data
}
 
export default getData;