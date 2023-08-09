import React from 'react';
interface Greederprops{
    person:string;
}
function Greeter({person}:Greederprops):JSX.Element{
    return <h1>Hellou,{person}</h1>

}

export default Greeter;