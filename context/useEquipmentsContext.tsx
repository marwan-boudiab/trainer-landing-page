// import { createContext, useState, useContext, ReactNode } from 'react';


// interface SelectedEquipmentContextType {
//   selectedEquipment: Equipment[];
//   addEquipment: (equipment: Equipment) => void;
//   removeEquipment: (id: number) => void;
//   clearEquipment: () => void; // Add clear function
// }

// const SelectedEquipmentContext = createContext<SelectedEquipmentContextType | undefined>(undefined);

// export const useSelectedEquipment = () => {
//   const context = useContext(SelectedEquipmentContext);
//   if (!context) {
//     throw new Error('useSelectedEquipment must be used within a SelectedEquipmentProvider');
//   }
//   return context;
// };

// export const SelectedEquipmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [selectedEquipment, setSelectedEquipment] = useState<Equipment[]>([]);

//   const addEquipment = (equipment: Equipment) => {
//     setSelectedEquipment(prevSelected => [...prevSelected, equipment]);
//   };

//   const removeEquipment = (id: number) => {
//     setSelectedEquipment(prevSelected => prevSelected.filter(item => item.id !== id));
//   };

//   const clearEquipment = () => {
//     setSelectedEquipment([]);
//   };

//   return <SelectedEquipmentContext.Provider value={{ selectedEquipment, addEquipment, removeEquipment, clearEquipment }}>{children}</SelectedEquipmentContext.Provider>;
// };
