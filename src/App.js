
import CardOne from "./components/CardOne";
import Heading from "./components/heading";
import CardTwo from "./components/CardTwo";
import CardThree from "./components/CardThree";
import CardFour from "./components/CardFour";
import './App.css';

function App() {
  return (
    <main className="App">
      <section className="heading-section">
        <Heading />
      </section>

      <section className="card-container">
        <article className="card-section">
          <CardOne />
        </article>
        
        <article className="card-section">
          <CardTwo />
          <CardThree />
        </article>

        <article className="card-section">
          <CardFour />
        </article>
      </section>
    </main>
  );
}


export default App;