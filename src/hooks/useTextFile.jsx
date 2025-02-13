// src/hooks/useTextFile.js
import { useState, useEffect } from "react";

const useTextFile = (fileName) => {
  const [text, setText] = useState("");

  useEffect(() => {
    // Use Vite's BASE_URL if your app is served from a subdirectory
    fetch(`${import.meta.env.BASE_URL}${fileName}`)
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => console.error(`Error loading ${fileName}:`, error));
  }, [fileName]);

  return text;
};

export default useTextFile;
