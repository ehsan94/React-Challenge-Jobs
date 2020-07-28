const addItemToList = (cardItems, cardItemToAdd) =>{
    console.log(cardItemToAdd);
    return [...cardItems, {...cardItemToAdd, quantity:1 }]

}

export default addItemToList;

