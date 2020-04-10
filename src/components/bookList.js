import React from 'react'
import {getAllBooksSuccess} from "../actions";
import {connect} from "react-redux";
import styled from 'styled-components';
import SingleBook from "./singleBook";

class BookList extends React.Component {

    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     this.props.getBooks();
    // }

    render() {
        return (
            <Container>
                <button onClick={this.props.getBooks}>Show book list</button>
                <ul className="list">
                    {
                        this.props.books.map((item, index) =>
                            <SingleBook key={index} book={item}>
                                {item.title}
                            </SingleBook>
                        )
                    }
                </ul>
            </Container>
        );
    }

}

const Container = styled.div`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;
const ListElement = styled.li`
	font-size: 24px;
	font-weight: 500;
	color: palevioletred;
`;
const mapStateToProps = (state) => {
    return {
        books: state.book
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getBooks: () => {
            dispatch({type: 'GET_ALL_BOOKS'});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
