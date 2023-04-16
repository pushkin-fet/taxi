import { Header } from "./components/header/header"
import { MainPage } from "./pages/mainPage/mainPage"
import { Footer } from "./ui/layout/Footer"
import { Layout } from "./ui/layout/Layout"


function App() {

  return (
    <Layout>
      <Header />
      <MainPage />
      <Footer/>
    </Layout>
  )
}

export default App
