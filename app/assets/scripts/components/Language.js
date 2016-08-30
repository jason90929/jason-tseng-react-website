import React, { PropTypes } from 'react';
import LanguageLink from '../containers/LanguageLink';

/**
 * @return {string}
 */
const Language = ({content, language}) => {
    if (content === 'HOME') {
        return false;
    }

    return (
        <div className="language-wrapper">
            <LanguageLink filter="TW">
                TW
            </LanguageLink>
            <LanguageLink filter="EN">
                EN
            </LanguageLink>
        </div>
    );
};

export default Language;