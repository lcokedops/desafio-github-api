import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./routes/HomePage"
import NotFound from "./routes/Search/NotFound"
import Search from "./routes/Search"
import StartPage from "./routes/StartPage"
import Profile from "./routes/Search/Profile"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<StartPage />} />
          <Route path="search" element={<Search />}>
            <Route path="profile/:profileName" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
