

import Image from 'next/image'
import Header from "./components/header"
import Modal from './components/modal_contato'

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Modal />
     
    </main> 
  )
}
