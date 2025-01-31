import "./App.css";
import Sidebar from "./components/SideBar";
import Context from "./context/Context";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <>
      <Context>
        <Sidebar />
        <DashBoard />
      </Context>
    </>
  );
}

export default App;
