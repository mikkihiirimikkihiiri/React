import React,{useRef} from 'react';
interface ShoppingListFormprops{
    onAddItem:(item:string,quantity:number)=>void
}
function ShoppingListForm({onAddItem}:ShoppingListFormprops):JSX.Element{
    const inputRef=useRef<HTMLInputElement>(null);
    const valueinputRef=useRef<HTMLInputElement>(null);
    function handleSubmit(e:React.FormEvent){
        e.preventDefault();
        const newProduct= inputRef.current!.value;
        const quantity= parseInt(valueinputRef.current!.value);
        onAddItem(newProduct,quantity);
        inputRef.current!.value="";
        valueinputRef.current!.value="1";
        
     
        

    }
    return <form onSubmit={handleSubmit}>
        <input type="text"placeholder='dfdd' ref={inputRef}/>
        <input type='number' min={0} ref={valueinputRef}/>
        <button type='submit'>Add Item</button>
    </form>
}
export default ShoppingListForm;