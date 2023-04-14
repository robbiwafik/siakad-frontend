import * as Yup from 'yup';

Yup.setLocale({
    string: {
        required: '${path}',
    },
});

export default Yup;