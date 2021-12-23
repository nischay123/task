
import './App.css';
import Home from './container/home/Home';
import Shop from './container/shop/Shop';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Catalog from './container/catalog/Catalog';
function App() {

  const [catalog, setCatalog] = useState([]);

 const  increaseCount =(id  )=>{
       const newcata=  catalog.map(ele => {
          if(ele.id == id){
            return {
              ...ele,
              count: ele.count+1
            }
           
          }
          return ele;
        })
        setCatalog(newcata);
  }

  const  decreaseCount =(id  )=>{
    console.log(id);
    const newcata=  catalog.map(ele => {
       if(ele.id == id && ele.count >1){
         return {
           ...ele,
           count: ele.count-1
         }
       }
       console.log(ele);
       return ele;
     })
     setCatalog(newcata);
}


const  removeItem =(id)=>{
  console.log(id,"fgsdfgsdgfdf");
  const newcata=  catalog.filter(item => item.id !== id );
   setCatalog(newcata);
}
  return (
    <div className="App">
          
          <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/catalog" element={<Catalog 
          catalog={catalog}
          removeItem={removeItem}
          decreaseCount={decreaseCount}
          increaseCount ={increaseCount}/>}>
          </Route>
          <Route path="/shop" element={<Shop catalog={catalog} setCatalog={setCatalog}/>}>
          </Route>
         
        </Routes>
       

     
    </div>
  );
}

export default App;
