import { connect } from 'react-redux'
import { deleteCategory } from '../modules/categories'

import Category from '../components/Category'

const mapDispatchToProps = {
  deleteCategory
}

export default connect(null, mapDispatchToProps)(Category)
