import { useState } from "react";
import "./App.css";

import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/img3.jpg";
import img4 from "./assets/images/img4.jpg";
import img5 from "./assets/images/img5.jpg";
import img6 from "./assets/images/img6.jpg";
import img7 from "./assets/images/img7.jpg";

function App() {
  const [current, setCurrent] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="container">
      <div className="carousel">
        {images.map((img, i) => (
          <div
            key={i}
            className={`card ${i === current ? "active" : ""}`}
            style={{ "--i": i - current }}
            onClick={() => setCurrent(i)}
          >
            <img src={img} alt="" />
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={() => setCurrent((current - 1 + images.length) % images.length)}>‹</button>
        <button onClick={() => setCurrent((current + 1) % images.length)}>›</button>
      </div>
    </div>
  );
}

export default App;
