// import axios from 'axios'
// import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
//
// const url = `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;

// export const getAllBooks = () => {
//     return (dispatch) => {
//         return axios.get(url)
//             .then((response) => {
//                 dispatch(getAllBooksSuccess(response.data))
//             })
//     }
// };
//export const getAllBooksSuccess = (books) => {
//     return {
//         type: 'GET_ALL',
//         payload: books
//     }
// };
// export const createBookSuccess = (data) => {
//     return {
//         type: 'CREATE_BOOK',
//         payload: {
//             id: data.id,
//             title: data.title,
//             author: data.author,
//             description: data.description,
//             published: data.published
//         }
//     }
// };
// export const createBook = (book) => {
//     console.log('333333' + JSON.stringify(book));
//     return (dispatch) => {
//         return axios.post(`${url}/create`, book)
//             .then((response) => {
//                 dispatch(createBookSuccess(response.data))
//             })
//     }
// };
//
// export const updateBookSuccess = (id, data) => {
//     return (dispatch) => {
//         dispatch({type: 'UPDATE_BOOK', id: id, data: data});
//     }
// };
// export const updateBook = (id, data) => {
//     console.log(data.published);
//     return (dispatch) => {
//         return axios.put(`${url}/${id}`, {
//             title: data.title,
//             author: data.author,
//             description: data.description,
//             published: data.published
//         })
//             .then(res => {
//                 dispatch(updateBookSuccess(id, data));
//             });
//     }
// };
//
// export const deleteBookSuccess = (id) => {
//     return (dispatch) => {
//         dispatch({type: 'DELETE_BOOK', id: id});
//     }
// };
// export const deleteBook = (id) => {
//     return (dispatch) => {
//         return axios.delete(`${url}/${id}`)
//             .then(res => {
//                 dispatch(deleteBookSuccess(id));
//             });
//     }
// };
