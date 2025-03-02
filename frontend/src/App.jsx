import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"
import { DashBoard } from "./pages/DashBoard"
import SendMoney from "./pages/SendMoney"
import PinGenerate from "./pages/PinGenerate"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/dashBoard" element={<DashBoard />} />
          <Route path="/sendMoney" element={<SendMoney />} />
          <Route path="/pinGenerate" element={<PinGenerate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
