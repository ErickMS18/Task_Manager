import "./App.css";
import DataList from "./components/DataList";
import TaskCrud from "./components/TaskCrud";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Task Manager</h1>

        <Routes>
          <Route path="/" element={<DataList />} />
          <Route path="/crud" element={<TaskCrud />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
