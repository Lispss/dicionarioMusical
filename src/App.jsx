import { useState } from "react";
import "./App.css";

function App() {
  const [musica, setMusica] = useState("");
  const [traducao, setTraducao] = useState("");

  function traduzirMusica() {
    if (musica.trim() === "") {
      alert("Por favor, cole uma música para traduzir.");
      return;
    }

    // Simulação de tradução (em uma aplicação real, isso seria uma chamada à API de tradução)
    setTraducao("Tradução da música: " + musica);
  }

  return (
    <>
      <h1>Bem Vindo ao Dicionário Musical</h1>
      <div className="conteudo">
        <div className="colarMusica">
          <h2>Cole a música aqui</h2>
          <textarea
            name="musica"
            id="musica"
            cols="30"
            rows="30"
            value={musica}
            onChange={(e) => setMusica(e.target.value)}
          />
        </div>

        <div className="traducaoMusica">
          <h2>Tradução da música</h2>
          <textarea
            name="traducao"
            id="traducao"
            cols="30"
            rows="30"
            value={traducao}
            readOnly
          />
        </div>
      </div>
      <div className="button">
        <button className="btnTraduzir" onClick={traduzirMusica}>
          Traduzir
        </button>
      </div>
    </>
  );
}

export default App;
