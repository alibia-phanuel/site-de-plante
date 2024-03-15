import Header from "./Components/Header";
import SectionOne from "./Components/SectionOne";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className=" bg-[url('assets/bg-vegetal.png')]  bg-center bg-cover bg-no-repeat px-[10px] w-full flex  flex-col">
        <Header />
        <SectionOne />
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default App;
