import React, { Component } from "react";
import data from "../../metal.json";
import LikeButton from "./LikeButton";

class Band extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
    };
  }

  split(condition) {
    if (condition === "-") {
      return <LikeButton count='1' />;
    }
    return;
  }

  render() {
    const { band_name, fans, formed, origin, split, style } = data[
      this.state.id
    ];

    return (
      <div className='BandDetails'>
        <h1>{band_name}</h1>
        <p style={{ fontWeight: "bold" }}>
          Origin: {origin} Fans: {fans.toLocaleString("en-US", {
            maximumFractionDigits: 2,
          })}{" "}
          Formed: {formed} Split: {split}
        </p>
        <br></br>
        <ul>
          {style.split(",").map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        {this.split(split)}
      </div>
    );
  }
}

export default Band;
