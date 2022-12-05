import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
