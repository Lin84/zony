import React from 'react';

import PropTypes from 'prop-types';

import Button from './../../_common/Button';

const Buttons = (props) => {
    return (
        <div>
            <Button label="A**" handleClick={() => props.handleClick('http://localhost:3000/loanRatingDoubleStarA')} />
            <Button label="A*" handleClick={() => props.handleClick('http://localhost:3000/loanRatingStarA')} />
            <Button label="A++" handleClick={() => props.handleClick('http://localhost:3000/loanRatingDoublePlusA')} />
            <Button label="A+" handleClick={() => props.handleClick('http://localhost:3000/loanRatingPLusA')} />
            <Button label="A" handleClick={() => props.handleClick(' http://localhost:3000/loanRatingA')} />
            <Button label="B" handleClick={() => props.handleClick(' http://localhost:3000/loanRatingB')} />
            <Button label="C" handleClick={() => props.handleClick('http://localhost:3000/loanRatingC')} />
            <Button label="D" handleClick={() => props.handleClick('http://localhost:3000/loanRatingD')} />
        </div>
    );
};

Buttons.propTypes = {
    handleClick: PropTypes.func
};

Buttons.defaultProps = {
    handleClick: () => {}
};

export default Buttons;
