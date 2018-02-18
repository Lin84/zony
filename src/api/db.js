const loanRatingA = require('./mock-data/loan-rating-A.json');
const loanRatingAA = require('./mock-data/loan-rating-AA.json');
const loanRatingAAA = require('./mock-data/loan-rating-AAA.json');
const loanRatingAAAA = require('./mock-data/loan-rating-AAAA.json');
const loanRatingAAAAA = require('./mock-data/loan-rating-AAAAA.json');
const loanRatingB = require('./mock-data/loan-rating-B.json');
const loanRatingC = require('./mock-data/loan-rating-C.json');
const loanRatingD = require('./mock-data/loan-rating-D.json');

module.exports = () => {
    return {
        loanRatingA,
        loanRatingAA,
        loanRatingAAA,
        loanRatingAAAA,
        loanRatingAAAAA,
        loanRatingB,
        loanRatingC,
        loanRatingD
    };
};
