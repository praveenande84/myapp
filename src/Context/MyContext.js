import { createContext } from 'react';

/* -----> Global State <----- */
const MyContext = createContext({
	isLogin: false,
	setIsLogin: () => {},
});

export default MyContext;
