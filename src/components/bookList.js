import React from 'react'
import {connect} from "react-redux";
import styled from 'styled-components';
import SingleBook from "./singleBook";

class BookList extends React.Component {

    // constructor(props) {
    //     super(props);
    // }
    //
    // // componentDidMount() {
    // //     this.props.getBooks();
    // // }

    render() {
        return (
            <Container>
                <button onClick={this.props.getBooks}>Show book list</button>
                <Books>
                    {
                        this.props.books.map((item, index) =>
                            <SingleBook key={index} book={item}>
                                {item.title}
                            </SingleBook>
                        )
                    }
                </Books>
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
const Books = styled.div`
	max-width: 1140px;
	margin: 0 auto;
	display : flex;
	justify-content: center;
	flex-wrap: wrap;
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
