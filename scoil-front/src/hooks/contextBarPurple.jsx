// context cerado para manejar la logica de la barra morada que se encuentra en el foro => "TÓPICOS Y TEMAS"
// hace que la barra morada solo se pueda selccionar una vez y que desaparezca en cuanto se seleccione otro tema

import React, { createContext, useContext, useState } from 'react';

const SelectedDetailContext = createContext();

export const SelectedDetailProvider = ({ children }) => {
  const [selectedDetailId, setSelectedDetailId] = useState(-1);
  const [selectedDetailIds, setSelectedDetailIds] = useState([]);

  const value = {
    selectedDetailId,
    selectedDetailIds,
    setSelectedDetailId,
    setSelectedDetailIds,
  };

  return (
    <SelectedDetailContext.Provider value={value}>
      {children}
    </SelectedDetailContext.Provider>
  );
};

export const useSelectedDetail = () => {
  return useContext(SelectedDetailContext);
};
