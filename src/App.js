import "./App.css";
import BirthdayPage from "./components/BirthdayPage";
import ParticlesComponent from "./components/Particles";

function App() {
  return (
    <div className="relative">
      <ParticlesComponent id="particles" />
      <BirthdayPage />
    </div>
  );
}

export default App;
