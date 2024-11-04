import "./wannn-style.css";
import RiwayatPendidikan from './components/riwayatPendidikan'; 
import RowRiwayat from "./components/rowRiwayat";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import Hero from "./components/hero";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RowPekerjaan from "./components/rowPekerjaan";
import WarnaFavorit from "./components/WarnaFavorit";
import ContactForm from "./components/ContactForm";
import GalleryHobbies from "./components/Gallery";


export default function CVonline() {
  return (
    <section>
      <Hero />
      <Skills />
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <WarnaFavorit />
      <GalleryHobbies />
      <ContactForm />
    </section>
  )
}