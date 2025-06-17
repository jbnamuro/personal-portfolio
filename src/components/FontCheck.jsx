import { useState } from "react";

const font = () => {
  const [font, setfont] = useState(false);
  document.fonts.ready.then(() => {
    setfont(true);
  });
  return font;
};
export default font;
