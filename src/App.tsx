import Navbar from "./sections/navbar/navbar"
import Hero from "./sections/hero/hero";
import SpecialOffer from "./sections/special-offer/special-offer"
import Michelin from "./sections/michelin/michelin";

function App() {

	  return (
    <>
      <Navbar />
				<Hero />
      <div className="container mx-auto max-w-7xl c-space">
        <SpecialOffer />
        <Michelin />
				<section className="min-h-screen "/>
        <section className="min-h-screen "/>
        <section className="min-h-screen "/>
			</div>
    </>
  )
}

export default App;
