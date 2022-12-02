import Candy from '../../Store/Candy.json'

function GetCandy() {
    return Candy.candy
}

function AddCandy(candy) {
    var candyObj = Candy;
    candyObj.candy = [candyObj.candy, candy]
    const requestOptions  = {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(candyObj)
    }
    
    fetch('../../Store/Candy.json', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
}

export {GetCandy, AddCandy}