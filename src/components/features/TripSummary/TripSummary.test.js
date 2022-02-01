import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
    it('should render correct link', () => {
        const expectedLink = '/trip/abc';
        const component = shallow(<TripSummary to={expectedLink} id="abc" />);

        expect(component.find('.link').prop('to')).toEqual(expectedLink);
        console.log(component.debug());
    });

    it('should have correct src and alt on image', () => {
        const component = shallow(<TripSummary src="image.jpg" alt="muster" />);
        expect(component).toBeTruthy();
    });

    it('should render correct props name, cost and days', () => {
        const expectedName = 'Lorem ipsum';
        const expectedCost = '100';
        const expectedDays = 10;
        const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);

        expect(component.find('img').prop('alt')).toEqual(expectedName);

        const renderedCostArray = component.find('.details span:last-child').text().split(' ');
        const renderedCost = renderedCostArray[1];
        expect(renderedCost).toEqual(expectedCost);

        const renderedDayString = component.find('.details span:first-child').text().split(' ');
        const renderedDays = Number(renderedDayString[0]);
        expect(renderedDays).toEqual(expectedDays);
    });

    it('should throw error without required props', () => {
        expect(() => shallow(<TripSummary />)).toThrow();
    });
});
