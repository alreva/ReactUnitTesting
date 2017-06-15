import React from 'react'
import { bindActionCreators } from 'redux'
import Categories from 'routes/Categories/components/Categories'
import { shallow } from 'enzyme'

describe('<Categories />', () => {
    let _props, _spies, _wrapper

    beforeEach(() => {
        _spies = {}
        _props = {
            items: [{
                id: "fe9bb93bfc8547f58daa6598adbede56",
                name: "Sample category 1",
                path: "/api/v2/images/fe9bb93bfc8547f58daa6598adbede56.json",
                ...bindActionCreators({
                    doubleAsync : (_spies.deleteCategory = sinon.spy())
                }, _spies.dispatch = sinon.spy())
            },
            {
                id: "3231f110a2c34377bfc3f6cd4f359d83",
                name: "Sample category 2",
                path: "/api/v2/images/3231f110a2c34377bfc3f6cd4f359d83.json",
                ...bindActionCreators({
                    doubleAsync : (_spies.deleteCategory = sinon.spy())
                }, _spies.dispatch = sinon.spy())
            }]
        }
        _wrapper = shallow(<Categories {..._props} />)
    })

    it('Given items, renders the <CategoriesList />', () => {
        expect(_wrapper.is('CategoriesList')).to.equal(true)
    })

    describe('Empty <Categories />', () => {
        let _empty, _emptyProps

        beforeEach(() => {
            _emptyProps = {
                items: []
            }
            _empty = shallow(<Categories {..._emptyProps} />)
        })

        it('Given no items, renders the <EmptyCategories />', () => {
            expect(_empty.is('EmptyCategories')).to.equal(true)
        })
    })
})