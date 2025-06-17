import { useState, useEffect } from "react";

const useFont = () => {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontReady(true);
    });
  }, []);

  return fontReady;
};

export default useFont;
