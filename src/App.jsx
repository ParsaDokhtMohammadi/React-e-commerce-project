import { createBrowserRouter , createRoutesFromElements, Route, RouterProvider } from "react-router"
import {store} from "./store/store"
import { Provider } from "react-redux"
import './App.css'
import Layout from "./Layout"
import Home from "./components/Home"
import Favorites from "./components/Favorites"
import Cart from "./components/Cart"
import Trending from "./components/Trending"
import Moviedetails from "./components/Moviedetails"
import Category from "./components/Category"
import Search from "./components/Search"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<Layout></Layout>}>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/favorites" element={<Favorites></Favorites>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/trending/:page" element={<Trending></Trending>}></Route>
      <Route path="/moviedetails/:id" element={<Moviedetails></Moviedetails>}></Route>
      <Route path="/category/:page" element={<Category></Category>}></Route>
      <Route path="Search/:page" element={<Search></Search>}></Route>
      
    </Route>
  )
)

function App() {


  return (
    <Provider store={store}>
          <RouterProvider router={router}>

          </RouterProvider>
    </Provider>
  )
}

export default App
