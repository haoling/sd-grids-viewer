import { useEffect, useRef, useState } from "react";
import { LegendX } from "./LegendX";

function App() {
  const pathbase = location.href.replace(/\.html?$/, '');
  const refImg = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    window.gridSettings.setImage(refImg);
  }, [refImg]);
  useEffect(() => {
    if (refImg.current) {
      console.log("Start image loading");
      refImg.current.src = pathbase + '.png';
    }
  }, []);
  const onLoaded = () => {
    setImageLoaded(true);
  }
  return (
    <>
      <div>{pathbase}</div>
      <div><pre>{JSON.stringify(window.gridSettings, null, 2)}</pre></div>
      <img ref={refImg} onLoad={onLoaded} style={{display:"none"}} />
      <LegendX image={refImg} imageLoaded={imageLoaded} />
    </>
  )
}

export default App
