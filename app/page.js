
import AiComp from "./components/AiComp";
import Healthcare  from "./components/healthcare/Healthcare";
import Hero from "./components/hero/Hero";
import LetsTalk from "./components/letsTalk/LetsTalk";
import WeWork from "./components/weWork/WeWork";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
   <div>
    <Hero/>
    <AiComp/>
    <WeWork />
    <Healthcare/>
    <LetsTalk/>
    <Footer/>

   </div>
  );
}
