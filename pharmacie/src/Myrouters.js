import { Routes,Route,Redirect, Navigate} from "react-router-dom"

import Home from './components/Home/Home.lazy'
import OpeningHoures from './components/OpeningHoures/OpeningHoures.lazy'
import Location from './components/Location/Location.lazy'
import Services from './components/Services/Services.lazy'
import AboutUs from './components/AboutUs/AboutUs.lazy'
import ContactUs from './components/ContactUs/ContactUs.lazy'
import ClientOpinion from './components/ClientOpinion/ClientOpinion.lazy'
import Categories from './components/categories/categories.lazy'
import Products from "./components/products/products.lazy"
import SignIn from "./components/signIn/signIn.lazy"
import SignUp from './components/signUp/signUp.lazy'
import AddProduct from "./components/AddProduct/AddProduct.lazy"

const Routers=[
         <Routes>
              <Route exact path="/" key='1' element={<Home/>}/>
              <Route exact path='/Services' key='2' element={<Services/> }/>
              <Route exact path='/Location' key='3' element={<Location/> }/>
              <Route exact path='/OpeningHoures' key='4' element={<OpeningHoures/> }/>
              <Route exact path='/ClientOpinion' key='5' element={<ClientOpinion/> }/>
              <Route exact path='/AboutUs' key='6' element={<AboutUs/> }/>
              <Route exact path='/ContactUs' key='7' element={<ContactUs/> }/>
              <Route exact path='/Categories' key='8' element={<Categories/> }/>
              <Route exact path='/products/:id' key='9' element={<Products/>}/>
              <Route exact path='/signIn' key='10' element={<SignIn/>}/>
              <Route exact path='/signUp' key='11' element={<SignUp/>}/>
              <Route exact path='/addProduct' key='12' element={<AddProduct/>}/>
              
              <Route  path='/*' key='13' element={ <Home />}/>
        </Routes>

]

export default Routers;