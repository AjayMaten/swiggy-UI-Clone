// import "./App.css";
import Card from "./components/Card";
import CardInfo from "./CardInfo";

function App() {
  return (
    <>
      <div className="App">
        {CardInfo.map((card) => {
          return (
            <Card img={card.imageUrl} name={card.heading} desc={card.desc} />
          );
        })}
      </div>
    </>
  );
}

export default App;
