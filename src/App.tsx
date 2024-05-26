import { Fragment } from "react/jsx-runtime"
import GlobalStyle from "./globalStyles"
import HomePage from "./pages/Home"

function App() {

  return (
    <Fragment>
      <GlobalStyle />
      <HomePage/>
    </Fragment>
  )
}

export default App
