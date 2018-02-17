import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button
            className={`btn ${props.class}`}
            onClick={props.handleClick}
        >
            { props.label }
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    class: PropTypes.string,
    handleClick: PropTypes.func
};

Button.defaultProps = {
    label: 'Button',
    class: 'btn-default',
    handleClick: () => {}
};

export default Button;
