import React, { Fragment, Component } from "react";
import styled from "styled-components";
const Card = styled.div`
    border-radius: 14px;
    border: 1px solid #fff;
    max-width: 250px;
    min-height: 86px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    border: 1px solid #EA6D23;
    background: #FDF0E9;
    color: #EA6D23;
    ${({ selected }) => selected && `
        border: 1px solid #262211;
        background: #E9E9E7;
        color: #262211;
    `}
`;
const CardIcon = styled.div`
    max-width: 60px;
    height: auto;
`;
const CardTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
`;
const IconoCheck = styled.div`
    height: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 5px;
    margin-left: 5px;
`;
class CardItemSelect extends Component {
    selectCurrentOption = () => {
        const { onSelect, method } = this.props;
        if (onSelect) onSelect(method);
    }
    render() {
        const { method: {
            icon, displayName
        }, selected, actionAlerts } = this.props;
        return (
            <Card selected={selected} onClick={this.selectCurrentOption}>

                {selected ? <IconoCheck><img height={15} src={"https://firebasestorage.googleapis.com/v0/b/twowheelstogo-572d7.appspot.com/o/logotipos%2FDise%C3%B1o-sin-t%C3%ADtulo.svg?alt=media&token=d19d6a26-8c9c-457c-a5ea-63b69b0bd4d3"}
                /> </IconoCheck> : <IconoCheck></IconoCheck>}
                <CardIcon>
                    <img src={icon} height={30} />
                </CardIcon>
                <CardTitle>{displayName}</CardTitle>
            </Card>
        );
    }
}
export default CardItemSelect;