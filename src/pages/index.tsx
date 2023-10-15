import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Moves from "./Moves";
import AddMove from "./Moves/ui/AddMove";
import MoveLanding from "./Moves/ui/MoveLanding";


export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Moves/>}/>
      <Route path="/create" element={<AddMove/>}/>
      <Route path="/:id" element={<MoveLanding/>}/>
    </>
  )
)
