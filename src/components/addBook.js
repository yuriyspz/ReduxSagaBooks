import React from 'react'
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import fieldComponent from "./fieldComponent";
import styled from 'styled-components';
import validate from "./validate";

class AddBook extends React.Component {

    render() {

        const {handleSubmit, reset} = this.props;
        const submit = (values) => {
            this.props.onAddBook(values);
            reset();
        };
        return (
            <FormWrapper>
                <FormHeading>Add Book</FormHeading>
                <Form onSubmit={handleSubmit(submit)}>
                    <Field
                        name='title'
                        type='text'
                        component={fieldComponent}
                        label='Book Title'
                    />
                    <Field
                        name='author'
                        type='text'
                        component={fieldComponent}
                        label='Book Author'
                    />
                    <Field
                        name='description'
                        type='text'
                        component={fieldComponent}
                        label='Book Description'
                    />
                    <Field
                        name='published'
                        type='number'
                        component={fieldComponent}
                        label='Book Published Year'
                    />
                    <ButtonSubmit type="submit">Add book</ButtonSubmit>
                </Form>
            </FormWrapper>
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
`;
const ButtonSubmit = styled.button`
    width: 100%;
    height: 36px;
    border: none;
    background: green;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    margin-top: 15px;
`;

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBook: (book) => {
            console.log(book);
            dispatch({type:'CREATE_SINGLE_BOOK', book: book});
        }
    }
};

export default reduxForm({
    form: "addBookForm",
    validate,
})(
    connect(
        null,
        mapDispatchToProps
    )(AddBook)
);
