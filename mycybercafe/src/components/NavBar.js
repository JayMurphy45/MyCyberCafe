import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Link from "next/link";

const NavBar = () => {
  //set value to 0
  const [value, setValue] = useState(0);
  //handle change function
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    //Tabs to navigate between pages
    <>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Monitor Page" component={Link} href="/dashboard" />
        <Tab label="Statistics" component={Link} href="/statistics" />
      </Tabs>
    </>
  );
};

export default NavBar;
