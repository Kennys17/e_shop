// import React, {Component} from "react";
// import {connect} from 'react-redux'
// class Search extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: ''
//         }

//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }
//     handleChange(event) {
//         this.setState({
//             value: event.target.value
//         })
//     }
//     handleSubmit(event) {
//         event.preventDefault() 
//         this.props.searchPhone(this.state.value)
//     }
    
//     render() {
//         return(<div className="well blosd">
//             <h3 className="lead">Quick Shop</h3>
//             <div className="input-group">
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                     onChange={this.handleChange}
//                     type='text'
//                     className="form-control"
//                     />
//                 </form>
//                 <span className="input-group-btn">
//                     <button className="btn btn-default">
//                         <span className="glyphicon glyphicon-search"></span>
//                     </button>
//                 </span>
//             </div>
//         </div>
//     )}
// }

// export default Search