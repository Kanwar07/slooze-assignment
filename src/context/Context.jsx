import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ContextData = createContext();

function Context({ children }) {
  const allcolors = [
    {
      id: 1,
      name: "Blue",
      hexCode: "#4F45E4",
    },
    {
      id: 2,
      name: "Red",
      hexCode: "#c0392b",
    },
    {
      id: 3,
      name: "Orange",
      hexCode: "#d35400",
    },
    {
      id: 4,
      name: "Purple",
      hexCode: "#8e44ad",
    },
    {
      id: 5,
      name: "Green",
      hexCode: "#27ae60",
    },
  ];
  const [toggleColor, setToggleColor] = useState(false);
  const [colors, setcolors] = useState([]);
  const [selectedColor, setSelectdColor] = useState("#4F45E4");

  useEffect(() => {
    const fetchColors = () => {
      setcolors(allcolors);
    };
    fetchColors();
  }, []);

  return (
    <ContextData.Provider
      value={{
        toggleColor,
        setToggleColor,
        colors,
        selectedColor,
        setSelectdColor,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;
