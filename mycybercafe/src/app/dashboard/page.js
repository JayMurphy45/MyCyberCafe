"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Link from "next/link";
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";
import NavBar from "@/components/NavBar";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return <NavBar></NavBar>;
}
