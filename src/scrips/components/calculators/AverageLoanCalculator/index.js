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

        this.buttonDefinitions = [
            {
                rating: 'A',
                label: 'A'
            },
            {
                rating: 'AA',
                label: 'A+'
            },
            {
                rating: 'AAA',
                label: 'A++'
            },
            {
                rating: 'AAAA',
                label: 'A*'
            },
            {
                rating: 'AAAAA',
                label: 'A**'
            },
            {
                rating: 'B',
                label: 'B'
            },
            {
                rating: 'C',
                label: 'B'
            },
            {
                rating: 'D',
                label: 'D'
            }
        ];
    }

    handleClick(rating) {
        const endpoint = `http://localhost:3000/loanRating${rating}`;

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
        const averageLoan = Number((average(loanAmounts).toFixed(2)));

        this.setState({ averageLoan });
    }

    render() {
        return (
            <div>
                <h1>{`Average Loans: ${this.state.averageLoan}`}</h1>
                <Buttons handleClick={this.handleClick} buttonsDefinition={this.buttonDefinitions} />
            </div>
        );
    }
}

export default AverageLoanForm;
