import React from 'react'
import { bindActionCreators } from 'redux'
import Categories from 'routes/Categories/components/Categories'
import { shallow } from 'enzyme'

describe('<Categories />', () => {
    let _props, _wrapper

    beforeEach(() => {
        _props = {
            items: [{
                id: "fe9bb93bfc8547f58daa6598adbede56",
                name: "Sample category 1",
                path: "/api/v2/images/fe9bb93bfc8547f58daa6598adbede56.json"
            },
            {
                id: "3231f110a2c34377bfc3f6cd4f359d83",
                name: "Sample category 2",
                path: "/api/v2/images/3231f110a2c34377bfc3f6cd4f359d83.json"
            }]
        }
        _wrapper = shallow(<Categories {..._props} />)
    })

    it('Given items, renders the <CategoriesList />', () => {
        expect(_wrapper.is('CategoriesList')).to.equal(true)
    })

    it('Given no items, renders the <EmptyCategories />', () => {
        expect(shallow(<Categories { ...{items: [] } } />).is('EmptyCategories')).to.equal(true)
    })
})