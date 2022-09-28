import React, { useContext } from "react";
import PropTypes from "prop-types";
import context from "react-bootstrap/esm/AccordionContext";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value={{ test: "hola" }}>
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.node,
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
