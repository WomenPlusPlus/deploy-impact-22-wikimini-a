import React from "react";

const ActiveContext = React.createContext({
    active: "owlets",
    setActive: (active) => {}
})

export default ActiveContext;