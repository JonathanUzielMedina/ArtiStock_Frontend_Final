import { Outlet } from "react-router";
import "./App.css";
import "./style_ap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

interface Props {}

const App = (_props: Props) => {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
          <Header />
          <main className="flex-fill">
              <Outlet />
          </main>
          <Footer />
      </div>
    </>
  );
}

export default App;