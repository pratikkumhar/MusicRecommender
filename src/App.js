import React, { useState } from "react";
import "./styles.css";

const musicGenre = {
  Bollywood: [
    {
      Name: "Kuch Kuch Hota Hai",
      Artist: "Jatin-Lalit, Udit Narayan",
      Rating: "4/5"
    },
    { Name: "Zindagi Kaisi Hai Paheli", Artist: "Manna Dey", Rating: "5/5" }
  ],

  Indian_HipHop: [
    {
      Name: "Vyanjan",
      Artist: "Krsna",
      Rating: "5/5"
    },
    {
      Name: "Teesri Manzil",
      Artist: "Divine",
      Rating: "4.3/5"
    }
  ],
  Bhajan: [
    {
      Name: "Ganpati Aaj Padharo",
      Artist: "Kamlesh Barot",
      Rating: "4.8/5"
    },
    {
      Name: "Ram Nam Ke Hire Moti",
      Artist: "Ashok Bhayani",
      Rating: "4.2/5"
    }
  ],
  Indian_Rock: [
    {
      Name: "Bom Diggy",
      Artist: "Zack Knight and Jasmin Walia",
      Rating: "3.7/5"
    },
    {
      Name: "Socha Hai",
      Artist: "Farhan Akhtar",
      Rating: "4/5"
    }
  ]
};

const musGen = Object.keys(musicGenre);

export default function App() {
  const [mgenre, setGenre] = useState("Bollywood");
  function ClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1 className="head">
        <span role="img">{"🎷 "}</span>MusicMend <span role="img">{" 🎸"}</span>
      </h1>
      <p>{"Select a Genre for recommendation"}</p>

      <div>
        {musGen.map((genre) => (
          <button onClick={() => ClickHandler(genre)} className="butGen">
            {genre}
          </button>
        ))}
      </div>
      <h2>{mgenre}</h2>
      <div style={{ textAlign: "center" }}>
        <ul className="divDisp">
          {" "}
          {musicGenre[mgenre].map((music) => (
            <li key={music.Name} className="listBod">
              {" "}
              <div style={{ fontSize: "larger" }}> {music.Name} </div>
              <div style={{ fontSize: "smaller" }}> {music.Artist} </div>
              <div style={{ fontSize: "small" }}> {music.Rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
