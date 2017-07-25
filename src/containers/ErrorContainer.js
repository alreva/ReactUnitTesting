import { connect } from 'react-redux'
import Error from '../components/Error'

const mapStateToProps = (state) => ({
  error : state.error.error
})

export default connect(mapStateToProps, null)(Error)
