import React from 'react';
import { tw } from '@twind/react';
import fundo from './fundo.png'; // Importando a imagem

function App() {
  return (
    <>
      <div className={tw`bg-LiderePreto10 h-screen w-screen p-32 inline-block align-middle flex items-center justify-items-center`}>
          <div className={tw`bg-cover bg-center h-full w-full inline-block align-middle flex items-center justify-items-center`} style={{ backgroundImage: `url(${fundo})` }}>
            <div className={tw('h-full w-full  justify-items-center')}>
                <h1>Possuo o perfil adequado para participar do Lidere e tenho interesse</h1>
                <h2> Lidere é um curso presencial que estará disponível em todo o Brasil a partir de 2025.</h2>
                <h2>Preencha os campos abaixo para ser notificado quando houver turmas disponíveis em seu estado</h2>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;