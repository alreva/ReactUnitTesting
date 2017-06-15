import React from 'react'
import EmptyCategories from 'routes/Categories/components/EmptyCategories'
import { shallow } from 'enzyme'

describe('<EmptyCategories />', () => {

    it('Renders without exploding', () => {
        expect(shallow(<EmptyCategories />)).to.have.length(1);
    });

})
