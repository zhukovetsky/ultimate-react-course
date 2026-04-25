import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      <h1>We are currently {isOpen ? "open" : "closed"}</h1>
    </footer>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu:</h2>
      <Pizza />
    </main>
  );
}

function Pizza(props) {
  return (
    <>
      <h3>{props.name}</h3>
      <img src={props.photoName} alt="focaccia pizza" />
      <p>{props.ingredients}</p>
      <p>${props.price}</p>
    </>
  );
}

export default App;
