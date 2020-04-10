const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Required'
    } else if (values.title.length <= 2) {
        errors.title = 'Must be at least 3 character long'
    }

    if (!values.author) {
        errors.author = 'Required'
    } else if (values.author.length <= 2) {
        errors.author = 'Must be at least 3 character long'
    }

    if (!values.description) {
        errors.description = 'Required'
    } else if (values.description.length <= 2) {
        errors.description = 'Must be at least 3 character long'
    }

    if (!values.published) {
        errors.published = 'Required'
    } else if (isNaN(values.published)) {
        errors.published = 'Must be number'
    } else if (values.published.length !== 4){
        errors.published = 'Must be 4 character long'
    }

    return errors
};

export default validate;
