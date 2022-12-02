import React, { useState } from "react";
import './Style/BubbleGum.css'
import CurrencyFormat from "./Shared/CurrencyFormat";

const bubbleGumData = [
    {
        name: "Excel Spearmint",
        price: 1.39,
        imgURL: "https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12026539&id=1739997&recipeId=500"
    },
    {
        name: "Hubba Bubba Max",
        price: 0.98,
        imgURL: "https://i5.walmartimages.ca/images/Enlarge/653/821/6000201653821.jpg"
    },
    {
        name: "Thrills",
        price: 0.99,
        imgURL: "https://cdn.shopify.com/s/files/1/0250/7483/products/Candyfunhouse_tootsie_thrills_gum_10pieces-Side-jpg-1_800x.jpg?v=1628525079"
    }, 
    {
        name: "Juicy Fruit",
        price: 0.98,
        imgURL: "https://i5.walmartimages.ca/images/Enlarge/711/914/6000203711914.jpg"
    },
    {
        name: "5 Gum",
        price: 3.97,
        imgURL: "https://i5.walmartimages.ca/images/Enlarge/650/482/6000201650482.jpg"
    },
    {
        name: "Trident Layers",
        price: 1.79,
        imgURL: "https://www.jeancoutu.com/catalog-images/960156/viewer/0/trident-trident-layers-strawberry-citrus-1-unit.png"
    }
]


class GumList extends React.Component {
    constructor(props) {
        super(props);
        this.candy = this.props.candy
    }
    render() {
        return(
            <div className="gum-list">
                {this.candy.map(thisGum => <BubbleGum gum={thisGum} onClickFunction={this.props.onClickFunction} />)}
            </div>
        )
    }
}

function BubbleGum(props) {
    const gumProfile = props.gum;
    return (
        <div className="gum-profile" onClick={() => props.onClickFunction(gumProfile)}>
            <img className="img-gum" alt={gumProfile.imgURL} src={gumProfile.imgURL} />
            <div className="gum-data">
                <div className="gum-name">{gumProfile.name}</div>
                <div className="gum-price">{CurrencyFormat(gumProfile.price)}</div>
            </div>
        </div>
    )
}


export default GumList