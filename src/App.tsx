import { Outlet } from "react-router-dom";
import Header from "./components/Header";


function App() {
  return <>
    <Header/>
    <Outlet/> {/* children이 렌더링 */}
  </>
}
export default App;
