import average from './index';

test('average of 2 + 2 + 2 to equal 2', () => {
    expect(average([2, 2, 2])).toBe(2);
});
