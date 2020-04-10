import React from 'react'
import {createBook, deleteBook, updateBook} from "../actions";
import {connect} from "react-redux";
import styled from "styled-components";
import fieldComponent from "./fieldComponent";
import {Field, reduxForm} from "redux-form";

class Modal extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     title: this.props.book.title,
        //     author: this.props.book.author,
        //     description: this.props.book.description,
        //     published: this.props.book.published,
        //     id: this.props.book.id
        // };
    }

    handleDelete = e=>{
        this.props.onDeleteBook(this.props.book.id);
        this.props.onHideModal();
    };

    submit = (values) => {
        this.props.onUpdateBook(this.props.book.id, values);
        this.props.onHideModal();
    };

    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <div className={this.props.show ? "modal display-block" : "modal display-none"}>
                    <FormWrapper className="modal-main">
                        <FormHeading>Редактируем: {this.props.book.title}</FormHeading>
                        <Form>
                            <Field
                                name='title'
                                type='text'
                                component={fieldComponent}
                                label='Book Title'
                                placeholder={this.props.book.title}
                            />
                            <Field
                                name='author'
                                type='text'
                                component={fieldComponent}
                                label='Book Author'
                                placeholder={this.props.book.author}
                            />
                            <Field
                                name='description'
                                type='text'
                                component={fieldComponent}
                                label='Book Description'
                                placeholder={this.props.book.description}
                            />
                            <Field
                                name='published'
                                type='number'
                                component={fieldComponent}
                                label='Book Date published'
                                placeholder={this.props.book.published}
                            />
                        </Form>
                        <ButtonSubmit onClick={handleSubmit(this.submit)}>Edit</ButtonSubmit>
                        <ButtonDelete onClick={this.handleDelete}>Delete</ButtonDelete>
                        <ButtonClose onClick={this.props.onHideModal}>Close</ButtonClose>
                    </FormWrapper>
                </div>
            </div>
        );
    }
}
const FormWrapper = styled.div`
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
`;
const FormHeading = styled.div`
    font-size: 30px;
    text-align: center;
    margin-bottom: 25px;
`;
const Form = styled.form`
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
    background: transparent;
    padding: 25px;
    margin-bottom: 20px;
`;
const ButtonSubmit = styled.button`
    width: 100%;
    height: 36px;
    border: none;
    background: green;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 10px;
`;
const ButtonDelete = styled.button`
    width: 100%;
    height: 36px;
    border: none;
    background: red;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 10px;
`;
const ButtonClose = styled.button`
    width: 100%;
    height: 36px;
    background: transparent;
    border: 1px solid #dedede;
    color: grey;
    font-size: 18px;
    cursor: pointer;
`;
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateBook: (id, book) => {
            dispatch({type:'UPDATE_SINGLE_BOOK', id: id, book: book});
        },
        onDeleteBook: (id)=>{
            dispatch({type:'DELETE_SINGLE_BOOK', id: id});
        }
    }
};
export default reduxForm({
    form: "modifyBookForm"
})(
    connect(
        null,
        mapDispatchToProps
    )(Modal)
);
