import { Footer } from "./components/Footer";
import { FormContact } from "./components/FormContact";
import { Hero } from "./components/Hero";
import { ImoveisEmDestaque } from "./components/ImoveisEmDestaque";
import { Navbar } from "./components/Navbar";

const properties = [
  {
    id: 1,
    name: "Apartamento Moderno",
    description: "Um belo apartamento moderno no centro da cidade",
    location: "Centro",
    price: 250000,
    image: "src/assets/1.png",
    featured: true,
  },
  {
    id: 2,
    name: "Vila na Praia",
    description: "Vila luxuosa com vista deslumbrante para o oceano",
    location: "Área Costeira",
    price: 750000,
    image: "src/assets/2.png",
    featured: true,
  },
  {
    id: 3,
    name: "Casa de Campo",
    description: "Espaçosa casa familiar com um grande quintal",
    location: "Interior",
    price: 450000,
    image: "src/assets/3.png",
    featured: false,
  },
];

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <ImoveisEmDestaque properties={properties} />
        <FormContact />
        <Footer />
    </>
  );
}

export default App;
