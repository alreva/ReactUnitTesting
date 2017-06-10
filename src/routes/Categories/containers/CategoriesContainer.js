import { connect } from 'react-redux'
import Categories from '../components/Categories'

const mapStateToProps = (state) => ({
  items : state.categories
})

export default connect(mapStateToProps, null)(Categories)