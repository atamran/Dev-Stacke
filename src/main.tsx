import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './componanants/Navbar'
import Banner from './componanants/Banner'
import Technologies from './componanants/Technologies'
import Section from './componanants/Section'
import Footer from './componanants/Footer'


import { ToastContainer } from 'react-toastify'
import type { ITechnologies } from './Type'


const Loading = () => {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-purple-500"></div>

        <p className="mt-4 text-lg font-medium text-gray-600">
          Loading technologies...
        </p>
      </div>
    </div>
  )
}

const usersFetch = async (): Promise<ITechnologies[]> => {
  const response = await fetch("/tech.json")
  const data = await response.json()
  return data
}

const usersPromise = usersFetch()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />

    <Banner />

    <Suspense fallback={<Loading />}>
      <Technologies usersPromise={usersPromise} />
    </Suspense>

    <Section />

    <Footer />

    <ToastContainer />
  </StrictMode>,
)
