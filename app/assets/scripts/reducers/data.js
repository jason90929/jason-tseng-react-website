import userData from '../../models/data';

const data = (state = userData('TW'), action) => {
    switch (action.type) {
        case 'GET_DATA':
            return userData(action.language);
            break;
        default:
            return state;
    }
};

export default data;