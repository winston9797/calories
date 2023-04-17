import { RouterProvider,Router } from "react-router-dom"
import router from './router/router'

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
