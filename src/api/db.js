const loanRatingA = require('./mock-data/loan-rating-a.json');
const loanRatingB = require('./mock-data/loan-rating-b.json');
const loanRatingC = require('./mock-data/loan-rating-c.json');
const loanRatingD = require('./mock-data/loan-rating-d.json');
const loanRatingDoublePlusA = require('./mock-data/loan-rating-double-plus-a.json');
const loanRatingDoubleStarA = require('./mock-data/loan-rating-double-star-a.json');
const loanRatingPLusA = require('./mock-data/loan-rating-plus-a.json');
const loanRatingStarA = require('./mock-data/loan-rating-star-a.json');

module.exports = () => {
    return {
        loanRatingA,
        loanRatingB,
        loanRatingC,
        loanRatingD,
        loanRatingDoublePlusA,
        loanRatingDoubleStarA,
        loanRatingPLusA,
        loanRatingStarA
    };
};
