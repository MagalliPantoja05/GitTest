import React, { useEffect } from 'react';

function Planeta({ nombre }) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido en la bitácora!`);

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido de la bitácora!`);
    };
  }, [nombre]);

  return (
    <div>
      {/* <h3>{nombre}</h3> */}
    </div>
  );
}

export default Planeta;