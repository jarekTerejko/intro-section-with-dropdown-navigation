import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About } from "./pages/About";
import Blog from "./pages/Blog";
import Calendar from "./pages/Calendar";
import Careers from "./pages/Careers";
import History from "./pages/History";
import Home from "./pages/Home";
import Login from "./pages/Login";
import OurTeam from "./pages/OurTeam";
import Planning from "./pages/Planning";
import Register from "./pages/Register";
import Reminders from "./pages/Reminders";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/history" element={<History />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
