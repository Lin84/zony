import React from 'react';

import PropTypes from 'prop-types';

import Button from './../../_common/Button';

const Buttons = (props) => {
    const { handleClick } = props;

    return (
        <div>
            <Button
                label="A**"
                customClass="btn-default calculator__button"
                handleClick={() => handleClick('http://localhost:3000/loanRatingDoubleStarA')}
            />
            <Button
                label="A*"
                customClass="btn-default calculator__button"
                handleClick={() => handleClick('http://localhost:3000/loanRatingStarA')}
            />
            <Button
                label="A++"
                customClass="btn-default calculator__button"
                handleClick={() => handleClick('http://localhost:3000/loanRatingDoublePlusA')}
            />
            <Button
                label="A+"
                customClass="btn-default calculator__button"
                handleClick={() => handleClick('http://localhost:3000/loanRatingPLusA')}
            />
            <Button
                label="A"
                customClass="btn-default calculator__button"
                handleClick={() => handleClick(' http://localhost:3000/loanRatingA')}
            />
            <Button
                label="B"
                customClass="btn-default calculator__button"
                handleClick={() => handleClick(' http://localhost:3000/loanRatingB')}
            />
            <Button
                label="C"
                customClass="btn-default calculator__button"
                handleClick={() => handleClick('http://localhost:3000/loanRatingC')}
            />
            <Button
                label="D"
                customClass="btn-default calculator__button"
                handleClick={() => handleClick('http://localhost:3000/loanRatingD')}
            />
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
