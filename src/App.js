import Header from "./layout/header";
import Meals from "./meals/meals";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}
