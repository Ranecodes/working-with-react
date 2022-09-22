import Avatar from "./components/Avatar";
import UserProfileCard from "./components/ProfileCard";

//create root component- App component

function App() {
  const handleClick = (event) => console.log("Button Clicked!");
  return (
    <section>
      <button onClick={handleClick}>Click Me!</button>
    </section>
  );
}
export default App;
