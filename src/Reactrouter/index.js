import { Routes , Route, Link } from "react-router-dom"

import HomePage from "./pages/Home"
import NewsPage from "./pages/News"
import ContactPage from "./pages/Contact"

function ReactRouter () {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/News" element={<NewsPage/>} />
                <Route path="/Contact" element={<ContactPage/>} />
            </Routes>
        </div>
    )
}
export default ReactRouter