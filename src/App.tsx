import Navbar from "./sections/navbar/navbar"
import Hero from "./sections/hero/hero";
import SpecialOffer from "./sections/special-offer/special-offer"
import Michelin from "./sections/michelin/michelin";
import Delicious from "./sections/delicious/delicious";
import Taste from "./sections/taste/taste";
import Footer from "./sections/footer/footer";

function App() {

	  return (
    <>
      <Navbar />
				<Hero />
      <div className="container mx-auto max-w-7xl c-space">
        <SpecialOffer />
        <Michelin />
				<Delicious />
        <Taste />
			</div>
      <Footer />
    </>
  )
}

export default App;
