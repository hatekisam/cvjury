import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Main from "./pages/Main"
import Analyzer from "./pages/Analyzer"


function App() {
	return (
		<div className="w-screen h-screen overflow-hidden">
			<Router>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/analyzer" element={<Analyzer />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
