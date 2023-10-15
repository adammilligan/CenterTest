import {observer} from "mobx-react"
import "./index.sass"
import {useEffect} from "react";
import {RouterProvider} from "react-router-dom";
import {router} from "pages";
import {moveList} from "entities/moveList";

const App = observer(() => {
  useEffect(() => {
    moveList.getList()
  }, [])
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
})

export default App
