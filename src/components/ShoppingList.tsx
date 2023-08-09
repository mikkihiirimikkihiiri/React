import React from 'react';
import Item from '../models/items'



interface Shoppinglistprops {
  items: Item[];
}

export default function ShoppingList(props: Shoppinglistprops): JSX.Element {
  return (
    <div>
      <h1>shoppinglist</h1>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>{item.product}-{item.quantity}</li>
        ))}
      </ul>
    </div>
  );
}
