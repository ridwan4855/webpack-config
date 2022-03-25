import "../style/index.scss";
import Recipes from "./Recepis";
import Coffee from "../img/Coffee-Bean-Background.jpg";
import botol_luwak from "../img/luwak-botol.png";
import botol1 from "../img/botol1.png";
import botol2 from "../img/botol2.png";
import botol3 from "../img/botol3.png";
import zz from "../img/coba.png";
import { render } from "react-dom";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Our Product</h1>
        </section>
        <div style={{ display: "flex" }}>
          <figure>
            <img src={botol_luwak} alt="Coffee" width="250" />
            <figcaption align="center">luwak botol</figcaption>
          </figure>
          <figure>
            <img src={botol_luwak} alt="Coffee" width="300" height="300" />
            <figcaption align="center" style={{ fontSize: "30px" }}>
              luwak botol
            </figcaption>
          </figure>
          <figure>
            <img src={botol_luwak} alt="Coffee" width="250" />
            <figcaption align="center">luwak botol</figcaption>
          </figure>
        </div>

        <Recipes className="back-hitam" />
      </main>

      <div className="tal">
        <figure
          className="totalHadiah"
          onClick={(e) => Muncul_Hadiah(e.target)}
        >
          <img
            src={botol1}
            alt="Coffee"
            width="250"
            className="hadiah"
            id="hadiah1"
          />
          <figcaption align="center" className="figHadiah">
            Gelas Bowling
          </figcaption>
        </figure>
        <figure
          className="totalHadiah"
          onClick={(e) => Muncul_Hadiah(e.target)}
        >
          <img
            src={botol2}
            alt="Coffee"
            width="250"
            className="hadiah"
            id="hadiah2"
          />
          <figcaption align="center" className="figHadiah">
            Gelas Beer
          </figcaption>
        </figure>
        <figure
          className="totalHadiah"
          onClick={(e) => Muncul_Hadiah(e.target)}
        >
          <img
            src={botol3}
            alt="Coffee"
            width="250"
            className="hadiah"
            id="hadiah3"
          />
          <figcaption align="center" className="figHadiah">
            Gelas Bola
          </figcaption>
        </figure>
      </div>
      <div id="penghalanghadiah">
        <div id="munculHadiah"></div>
        <figure>
          <img src={zz} alt="Coffee" className="ff" />
          <figcaption align="center">luwak botol</figcaption>
        </figure>
      </div>
    </>
  );
};

function Muncul_Hadiah(value) {
  let elm = (
    <>
      <div className="bungkushadiah">
        <h1 align="center" style={{ color: "black" }}>
          {value.nextSibling.innerHTML}
        </h1>
        <div className="munculHadiah">
          <div className="gambar">
            <img
              src={value.src}
              width="400"
              height="400"
              alt={value.nextSibling.innerHTML}
            />
          </div>
          <p style={{ fontSize: "35px", color: "white", textAlign: "center" }}>
            Gelas Ini terbuat dari Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ex expedita optio culpa minus hic consequatur
            vitae, aperiam illo nostrum fuga sequi natus delectus possimus
            quidem ipsam inventore. Commodi, ut aliquid!
          </p>
        </div>
      </div>
    </>
  );
  document.getElementById("penghalanghadiah").style.display = "block";
  document.getElementById("munculHadiah").style.display = "block";
  render(elm, document.getElementById("munculHadiah"));
}
export default App;
