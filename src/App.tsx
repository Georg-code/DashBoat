import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Connect from "./pages/Connect";
import Analytics from "./pages/Analytics";
import Controll from "./pages/Controll";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Connect />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="controll" element={<Controll />} />
            <Route path="console" element={<Controll />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
