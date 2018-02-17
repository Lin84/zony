import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button
            className={`btn ${props.customClass}`}
            onClick={props.handleClick}
        >
            { props.label }
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    customClass: PropTypes.string,
    handleClick: PropTypes.func
};

Button.defaultProps = {
    label: 'Button',
    customClass: 'btn-default',
    handleClick: () => {}
};

export default Button;
