import React ,{useState} from 'react';

import ShoppingList from './components/ShoppingList';
import Item from './models/items';
import './App.css';
import ShoppingListForm from './components/ShoppingListForm';



function App() {
  const [items,setItems] =useState<Item[]>([])
  const addItem =(product:string,quantity:number)=>{
  setItems([...items,{id:Math.random(),product,quantity}]);

  }
  return (
    <div>
     <ShoppingList items={items} />

     <ShoppingListForm onAddItem={addItem}/>

    </div>
  );
}

export default App;
