import "./styles.css";
import Header from "./header";
import data from "./Data.json";
import Video from "video-react";

export default function App() {
  return (
    <div className="App">
      <Header data={data} />
      <Video />
    </div>
  );
}
