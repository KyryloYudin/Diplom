import React, { ReactNode } from 'react';


interface GridContainerProps {
  children: ReactNode; // Указываем, что children должны быть React-элементами
}

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className="grid-container">
      {children}
    </div>
  );
};

export default GridContainer;
