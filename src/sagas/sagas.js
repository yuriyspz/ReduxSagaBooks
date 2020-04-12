import axios from 'axios'
import {call, put, takeEvery, all} from 'redux-saga/effects'

const url = `https://spring-boot-mysql-server-part0.herokuapp.com/api/books`;

const getAllBooks = () => {
    return axios.get(url)
        .then(response => response.data);
}

function* watchFetchBooks() {
    yield takeEvery('GET_ALL_BOOKS', fetchBooksAsync);
}

function* fetchBooksAsync() {
    try {
        const bookList = yield call(getAllBooks);
        console.log(bookList);
        yield put({type: 'GET_ALL', payload: bookList});
    } catch (error) {
        return console.log(error);
    }
}

const createBook = (book) => {
    return axios.post(`${url}/create`, book).then(response => {
        console.log(response.data);
        return response.data;
    })
}

function* watchCreateBook() {
    yield takeEvery('CREATE_SINGLE_BOOK', createBookAsync);
}

function* createBookAsync(action) {
    console.log(action)
    const response = yield call(createBook, action.book)
    yield put({
        type: 'CREATE_BOOK',
        payload: {
            id: response.id,
            title: response.title,
            author: response.author,
            description: response.description,
            published: response.published
        }
    })
}

const deleteBook = (id) => {
    return axios.delete(`${url}/${id}`).then(res => res.data);
}

function* watchDeleteBook() {
    yield takeEvery('DELETE_SINGLE_BOOK', deleteBookAsync);
}

function* deleteBookAsync(action) {
    const response = yield call(deleteBook, action.id)
    yield put({
        type: 'DELETE_BOOK',
        id: response.id
    })
}

const updateBook = (id, data) => {
    return axios.put(`${url}/${id}`, {
        title: data.title,
        author: data.author,
        description: data.description,
        published: data.published
    }).then(res => res.data);
}

function* watchUpdateBook() {
    yield takeEvery('UPDATE_SINGLE_BOOK', updateBookAsync);
}

function* updateBookAsync(action) {
    const response = yield call(updateBook, action.id, action.book)
    yield put({
        type: 'UPDATE_BOOK',
        id: response.id,
        data: response,
    })
}

export default function* rootSaga() {
    yield all([
        watchFetchBooks(),
        watchCreateBook(),
        watchDeleteBook(),
        watchUpdateBook(),
    ])
}
