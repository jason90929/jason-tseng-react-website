// Todo:
function getTwData() {
    return {
        portfolio: 'TW'
    }
}

function getEnData() {
    return {
        about: 'EN'
    }
}

const data = (state = getEnData(), action) => {
    switch (action.type) {
        case 'GET_DATA':
            if (action.language === 'TW') {
                return getTwData();
            }
            else if (action.language === 'EN') {
                return getEnData();
            }
        default:
            return state;
    }
};

export default data;