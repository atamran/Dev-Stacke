import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './componanants/Navbar'
import Banner from './componanants/Banner'
import Technologies from './componanants/Technologies'
import Section from './componanants/Section'
import Footer from './componanants/Footer'
import type { ITechnologies } from './types'

const usersFetch = async (): Promise<ITechnologies[]> => {
  const response = await fetch("/tech.json");
  const data = await response.json();
  return data;
};
const usersPromise =   usersFetch();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Navbar/>
  <Banner/>
  <Technologies usersPromise={usersPromise} />
  <Section/>
  <Footer/>
  </StrictMode>,
)
