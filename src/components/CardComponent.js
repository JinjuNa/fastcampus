import React from 'react';
import './CardComponent.css';
import styled from "styled-components";

const CardImage = styled.div`
  background-image: url("${props => props.img}");
  background-size:cover;
  /* width : 90%; */
  height : 125px;
  border-radius : 10px;
`

const CardItemBox = (props) => {
    const link = "/fastcampus";
    return (
        <li className="card-item">
            <a href={link}>
            <CardImage img={props.img} />
            <div className="txt-container">
                <span className="category-txt">{props.category[0]}</span>
                <span className="category-txt">{props.category[1]}</span>
                <span className="category-txt">{props.category[2]}</span>
                <h6 className="f-16 title">{props.title}</h6>
                <p className="f-12 text">{props.text}</p>
            </div>
            </a>
        </li>
    )
}

const CardComponent = (props) => {
    const contentData = props.contentData
    const cardItemData = contentData.cardItem;
    const CardListItem = cardItemData.map((cardItem, index)=> <CardItemBox key={index} img={cardItem.img} category={cardItem.category} title={cardItem.itemTitle} text={cardItem.itemText} />);
    return(
        <div className="card-component">
            {contentData.isBest ? <div className="best-bedge">Best</div> : null}
            <h3 className="card-component-title">{contentData.title}</h3>
            <ul className="card-item-container">
            {CardListItem}
            </ul>
        </div>
    )
}


export default CardComponent;
