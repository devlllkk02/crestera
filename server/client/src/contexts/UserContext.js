import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({
  userData: null,
  setUserData: () => {},
});

export const useGlobalUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
	const [userData, setUserData] = useState(null);

	return (
		<UserContext.Provider value={{
			userData,
			setUserData
		}}>
			{children}
		</UserContext.Provider>
	);
};

export const UserConsumer = UserContext.Consumer;

export default UserContext;