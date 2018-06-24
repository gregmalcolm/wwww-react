
import PropTypes from 'prop-types'
import React from 'react';

import WithLoading from '../with-loading';
import Loading from '../loading';
import WeaponsResults from '../results';

import { connect } from 'react-redux';

const WeaponsResultsWithLoading = WithLoading(Loading, WeaponsResults);

const WeaponsContainer = ({isLoading, weapons, paginationInfo}) => (
    <WeaponsResultsWithLoading 
        isLoading={isLoading}
        weapons={weapons}
        paginationInfo={paginationInfo}
        {...this.props}
    />
);
WeaponsContainer.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    weapons: PropTypes.array.isRequired,
    paginationInfo: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        weapons: state.weapons,
        paginationInfo: state.paginationInfo
    }
};

//const mapDispatchToProps = null;

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(WeaponsContainer);

export default connect(
    mapStateToProps
)(WeaponsContainer);

//import {  } from '../../../actions/weapons'


// const mapStateToProps = state => {
//     return {
//       todo: state.todos[0]
//     }
//   }
  
// const mapDispatchToProps = dispatch => {
// return {
//     destroyTodo: () =>
//     dispatch({
//         type: 'DESTROY_TODO'
//     })
// }

//OLD Color
// class Color extends Component {

//     componentWillMount() {
//         this.style = { backgroundColor: "#CCC" }
//     }

//     shouldComponentUpdate(nextProps) {
//         const { rating } = this.props
//         return rating !== nextProps.rating
//     }

//     componentWillUpdate(nextProps) {
//         const { title, rating } = this.props
//         this.style = null
//         this.refs.title.style.backgroundColor = "red"
//         this.refs.title.style.color = "white"
//         alert(`${title}: rating ${rating} -> ${nextProps.rating}`)
//     }

//     componentDidUpdate(prevProps) {
//         const { title, rating } = this.props
//         const status = (rating > prevProps.rating) ? 'better' : 'worse'
//         console.log(`${title} is getting ${status}`)
//         this.refs.title.style.backgroundColor = ""
//         this.refs.title.style.color = "black"
//     }

//     render() {
//         const { title, color, rating, onRemove, onRate} = this.props
//         return (
//             <section className="color" style={this.style}>
//                 <h1 ref="title">{title}</h1>
//                 <button onClick={onRemove}>X</button>
//                 <div className="color"
//                      style={{ backgroundColor: color }}>
//                 </div>
//                 <div>
//                     <StarRating starsSelected={rating} onRate={onRate}/>
//                 </div>
//             </section>
//         )
//     }

// }


//New Color

// export const Color = connect(
//     ({ colors }, { match }) => findById(colors, match.params.id)
// )(ColorDetails)
//class Color extends Component {
//     render() {
//         const { id, title, color, rating, timestamp, onRemove, onRate, history } = this.props
//         return (
//             <section className="color" style={this.style}>
//                 <h1 ref="title"
//                     onClick={() => history.push(`/${id}`)}>{title}</h1>
//                 <button onClick={onRemove}>
//                     <FaTrash />
//                 </button>
//                 <div className="color"
//                      onClick={() => history.push(`/${id}`)}
//                      style={{ backgroundColor: color }}>
//                 </div>
//                 <TimeAgo timestamp={timestamp} />
//                 <div>
//                     <StarRating starsSelected={rating} onRate={onRate}/>
//                 </div>
//             </section>
//         )
//     }

// }


