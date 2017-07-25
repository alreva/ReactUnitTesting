import React from 'react'
import Category from 'routes/Categories/components/Category'
import { shallow } from 'enzyme'
import { bindActionCreators } from 'redux'

describe('<Category />', () => {
  let _props, _spies, _wrapper, _deleteBtn

  beforeEach(() => {
    _spies = {}
    _props = {
      id: 'fe9bb93bfc8547f58daa6598adbede56',
      name: 'Sample category 1',
      path: '/api/v2/images/fe9bb93bfc8547f58daa6598adbede56.json',
      ...bindActionCreators({
        deleteCategory: (_spies.deleteCategory = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }
    _wrapper = shallow(<Category {..._props} />)
    _deleteBtn = _wrapper.find('button')
  })

  it('Renders without exploding', () => {
    expect(_wrapper).to.have.length(1)
  })

  it('Raises action on delete', () => {
    _deleteBtn.simulate('click')
    _spies.deleteCategory.should.have.been.called()
  })
})
