import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
("react-dom/client");

const root = createRoot(document.getElementById("root") ?? new HTMLElement());

root.render(<App />);
