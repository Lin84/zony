import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import Button from './../../_common/Button';

const Buttons = (props) => {
    const { handleClick, buttonDefinitions } = props;

    const allButtons = buttonDefinitions.map((definition) => {
        return (
            <Button
                label={definition.label}
                customClass="btn-default calculator__button"
                handleClick={() => handleClick(definition.rating)}
                key={definition.rating}
            />
        );
    });

    return (
        <div>
            { allButtons }
        </div>
    );
};

Buttons.propTypes = {
    handleClick: PropTypes.func.isRequired,
    buttonDefinitions: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Buttons;
