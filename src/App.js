import Header from "./components/Header";
import Main from "./components/Main";
import Ricerca from "./components/Ricerca";
function App() {
  return (
    <div className="container lg">
      <Header />
      <main>
        <Main />
        <Ricerca />
      </main>
    </div>
  );
}

export default App;
