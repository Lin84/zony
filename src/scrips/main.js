/**
 * main styles:
 */
import css from './../styles/main.scss';

/**
 * React Component:
 */
import configureStore from './redux/store/configureStore';
import { render, renderFactory } from './ultilities/render';
import Headline from './components/_common/Headline';
import PlusOne from './components/plus-one/PlusOne';
import AverageLoanForm from './components/calculators/AverageLoanCalculator';

/**
 * @param {object} config
 */
const app = (config) => {
    const store = configureStore(config);

    // Demo render react component once:
    render(Headline, document.querySelector('.headline'), { label: 'Average Loan Calculator' });

    // Demo render react component connected to the Redux store:
    renderFactory(PlusOne, document.querySelectorAll('.plus-one'), {}, store);

    render(AverageLoanForm, document.querySelector('.calculator'));
};

app(window.config);
