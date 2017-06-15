import React from 'react'
import CategoriesList from 'routes/Categories/components/CategoriesList'
import { shallow } from 'enzyme'

describe('<CategoriesList />', () => {
    let _state, _wrapper

    beforeEach(() => {
        _state = [{
            id: "fe9bb93bfc8547f58daa6598adbede56",
            name: "Sample category 1",
            path: "/api/v2/images/fe9bb93bfc8547f58daa6598adbede56.json"
        },
        {
            id: "3231f110a2c34377bfc3f6cd4f359d83",
            name: "Sample category 2",
            path: "/api/v2/images/3231f110a2c34377bfc3f6cd4f359d83.json"
        }]
        _wrapper = shallow(<CategoriesList items={_state} />)
    })

    it('Renders without exploding', () => {
        expect(_wrapper).to.have.length(1);
    });

    it('Has two <Category /> elements', () => {
        //console.log(_wrapper.debug())
        expect(_wrapper.find('Connect(Category)')).to.have.length(2)
    })
})