import React, { Fragment } from 'react';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DoneButton = () => {
    return (
        <Fragment>
            <span className="icon is-primary">
                <a>
                    <FontAwesomeIcon icon={['far', 'circle']} />
                </a>
            </span>
        </Fragment>
    );
};

export default DoneButton;