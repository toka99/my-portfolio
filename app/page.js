"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="container">
      <div className="photo">
      <img src="/TokaElBorie.png" className="avatar" />
      </div>

      <div className="linksContainer">
              <h3><a href="/Toka_ElBorie.pdf" target="_blank" className="links">CV</a></h3>
          <h3><a href="https://www.linkedin.com/in/toka-elborie-992469207/" target="_blank" className="links">
            LinkedIn
          </a></h3>
      </div>

      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Toka El-Borie
      </motion.h1>

      <p>Software Engineer | Backend, Full-Stack & AI Development | APIs & Scalable Systems</p>

      <h2>Contact</h2>

      <p>Email: toka.attiah@gmail.com</p>
      <p>Phone: 01141080121</p>
    
    </main>
  );
}