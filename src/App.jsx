import { Outlet } from "react-router-dom"
import { Footer } from "./components/common/footer/Footer"
import { Header } from "./components/common/header/Header"

export const App = ()=> {
  return (
    <main className="flex flex-col">
        {/* Header  */}
        <Header />

        <section>
            <Outlet />
        </section>

        {/* Footer */}
        <Footer />

    </main >
  )
}

