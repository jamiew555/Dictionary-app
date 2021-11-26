import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">Dictionary App</header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">Coded by Fung-ping Wong</footer>
      </div>
    </div>
  );
}
