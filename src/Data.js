const API_URL = process.env.REACT_APP_API;
import React from "react";

const [data, setData] = useState([]);

useEffect(() => {

  async function getData() {
    const url = `${API_URL}/wishes`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    setData(data);
  }
  getData();
}, []);

export const artikelData = [
    {
        id: "1",
        titel: "Alt ødelagt",
        undertitel: "Det kan ikke passe",
        journalist: "Tom Hansen",
        tekst:"",
        type: "Krimi",
        image: ""
    },
    {
        id: "2",
        titel: "Smidt væk",
        undertitel: "Mirakel",
        journalist: "Bo Madsen",
        tekst:"",
        type: "Sport",
        image: ""
    },
    {
        id: "3",
        titel: "Fedt Man!",
        undertitel: "Det var det værd",
        journalist: "Mikkel Poulsen",
        tekst:"",
        type: "Aarhus",
        image: ""
    },
]
