import React, { Component } from 'react';
import axios from 'axios';

// components:
import Buttons from './Buttons';

// ultilities:
import average from './../../../ultilities/average';


class AverageLoanForm extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.calculateAverageLoan = this.calculateAverageLoan.bind(this);

        this.state = {
            averageLoan: 0
        };
    }

    handleClick(endpoint) {
        axios({
            url: endpoint,
            method: 'get'
        }).then((response) => {
            this.calculateAverageLoan(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }

    calculateAverageLoan(data) {
        const loanAmounts = data.map(loan => loan.amount);
        this.setState({
            averageLoan: average(loanAmounts)
        });
    }

    render() {
        return (
            <div>
                <h1>{`Average Loans: ${this.state.averageLoan}`}</h1>
                <Buttons handleClick={this.handleClick} />
            </div>
        );
    }
}

export default AverageLoanForm;
