"use client";
import { useNavigation } from "next/navigation";
import styles from "../styles/NoFound.module.css";
import Image from "next/image";
import img404 from "../images/404.jpg";
import NavBar from "@/components/NavBar";

export default function NoFound() {
  return (
    <main className={styles.container}>
      <NavBar></NavBar>

      <Image src={img404} alt="404 - Page Not Found" width={400} height={400} />
    </main>
  );
}
