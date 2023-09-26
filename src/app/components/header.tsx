import React, { useEffect, useState } from "react";
import Image from "next/image";
import Next from "../../../public/next.svg";
import Modal from "./modal_contato";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Marque este componente como cliente ao ser montado
    document.documentElement.classList.add("client");
    return () => {
      // Remova a marcação do componente como cliente ao ser desmontado
      document.documentElement.classList.remove("client");
    };
  }, []);

  const handleContatoClick = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="header flex flex-col w-4/5 h-20 bg-black">
      <div className="top flex flex-row justify-between"></div>
      <Image src={Next} alt="Logo" />
      <h1 className="text-white font-bold font-sans">Projeto Next</h1>
      <button
        className="box-border rounded-md w-10 h-4 border-2 bg-blue-800 text-white text-xs font-light"
        onClick={handleContatoClick}
      >
        Contato
      </button>
      
      {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}

      <div className="line bg-gradient-to-r from-black via-white to-black"></div>
      <div className="bottom flex flex-row ms-6 gap-1">
        <span className="text-white text-xs">Enumciado1</span>
        <span className="text-white text-xs">Enumciado2</span>
        <span className="text-white text-xs">Enumciado3</span>
      </div>
    </div>
  );
}
