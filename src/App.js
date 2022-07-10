// import "./App.css";
import Card from "./components/Card";
import CardInfo from "./CardInfo";

function App() {
  return (
    <>
      <div className="App">
        {CardInfo.map((card) => {
          return <Card img={card.imgURL} name={card.name} price={card.price} />;
        })}
      </div>
    </>
  );
}

export default App;
