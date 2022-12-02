import React from "react"

export const AddCandyForm = ({ onSubmit }) => {
    <form className="popup-form" onSubmit={onSubmit}>
        <div className="popup-form-group">
            <label htmlFor="name">Name</label>
            <input className="txtCandyName" id="name"/>
        </div>
        <div className="popup-form-group">
            <label htmlFor="price">Price</label>
            <input type={"number"} className="txtCandyPrice" id="price"/>
        </div>
        <div className="popup-form-group">
            <label htmlFor="imgUrl">Image URL</label>
            <input className="txtCandyImgUrl" id="imgUrl"/>
        </div>
        <div className="popup-form-group">
            <button className="submit-button" type="submit"></button>
        </div>
    </form>
}

export default AddCandyForm