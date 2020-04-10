import React from 'react'
import Modal from "./modal";

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
            <div>
                <div onClick={this.showModal} className={'book-element'}>
                    <div>-----------------------------------</div>
                    <div>Название: {this.props.book.title}</div>
                    <div>Автор: {this.props.book.author}</div>
                    <div>Описание: {this.props.book.description}</div>
                    <div>Дата публикации: {this.props.book.published}</div>
                </div>
                <Modal show={this.state.show} book={this.props.book} onHideModal={() => this.setState({show: false})}/>
            </div>

        );
    }

}

export default SingleBook;
