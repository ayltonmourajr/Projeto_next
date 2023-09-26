import React, {useState} from 'react'


export default function Modal({closeModal}) {
//   const [modal, setModal] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Dados enviados:', { nome, email });
}

return (
    <div className="modal_form form w-22 h-48 bg-slate-400 shadow-sm">
      <button
        onClick={closeModal}               
        className="w-3 h-3 rounded-2xl text-gray-200 bg-orange-200"
        >   
        X
      </button>
      <form onSubmit={handleSubmit}>
        <input
          className="w-8 h-3 bg-white text-justify text-gray-100 "
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          className="w-8 h-3 bg-white text-justify text-gray-100 "
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        <label>
          <input type="checkbox">
            <span className="text-white ">Aceito os termos de uso</span>
          </input>
        </label>
      </form>
      <button type="submit" value="Submit">
        Enviar
      </button>
    </div>
  );
}


//   const toggle = () => {
    //     setModal(!modal);
    //   };
    
    // const closeModal = () => {
    //     setModal(false);
    // };