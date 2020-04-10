import React from 'react'
import Modal from "./modal";
import styled from "styled-components";

class SingleBook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show: false};
    }

    showModal = () => {
        this.setState({show: true});
    };

    hideModal = () => {
        this.setState({show: false});
    };

    render() {
        return (
            <BookItem>
                <div onClick={this.showModal} className={'book-element'}>
                    <div>Название: {this.props.book.title}</div>
                    <div>Автор: {this.props.book.author}</div>
                    <div>Описание: {this.props.book.description}</div>
                    <div>Дата публикации: {this.props.book.published}</div>
                </div>
                <Modal show={this.state.show} book={this.props.book} onHideModal={() => this.setState({show: false})}/>
            </BookItem>

        );
    }

}
const BookItem = styled.div`
    width: calc(100% / 5);
    min-width: 228px;
    padding: 25px 15px;
    border: 2px solid #dedede;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export default SingleBook;
