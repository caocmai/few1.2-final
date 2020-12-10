import React, { useState } from "react";
import data from "../../metal.json";
import Band from "../band/Band";
import "./BandList.css";

function BandList() {
  const [query, setQuery] = useState("");
  const bands = data
    .filter((obj) => {
      const inTitle = obj.band_name.toLowerCase().includes(query.toLowerCase());
      const inStyle = obj.style.toLowerCase().includes(query.toLowerCase());

      return inTitle || inStyle;
    })
    .map(({ band_name, fans, formed, origin, split, style }, i) => {
      return (
        <Band
          id={i}
          key={band_name}
          band_name={band_name}
          fans={fans}
          formed={formed}
          origin={origin}
          split={split}
          style={style}
        />
      );
    });

  return (
    <div>
      <form className='filter-field'>
        <input
          value={query}
          placeholder='filter band by name or style'
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className='BandList'>{bands}</div>
    </div>
  );
}

export default BandList;
