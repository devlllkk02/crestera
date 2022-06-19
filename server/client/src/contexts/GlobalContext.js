import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
  userData: null,
  setUserData: () => {},
});

export const useGlobal = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);

	return (
		<GlobalContext.Provider value={{
			userData,
			setUserData
		}}>
			{children}
		</GlobalContext.Provider>
	);
};

export const GlobalConsumer = GlobalContext.Consumer;

export default GlobalContext;