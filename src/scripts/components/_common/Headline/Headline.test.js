import React from 'react';
import { shallow } from 'enzyme';

import Headline from './index';

/**
 * @param {object} props
 * @return {object}
 */
const createTestProps = props => ({
    label: 'Headline',
    ...props
});

/**
 * @param {object} props
 * @return {wrapper} contains shallow component
 */
const createWrapper = props => shallow(<Headline {...props} />);

describe('rendering Headline', () => {
    const props = createTestProps();
    const wrapper = createWrapper(props);

    it('should render headline label', () => {
        expect(wrapper.find('h1').text()).toEqual('Headline');
    });
});
