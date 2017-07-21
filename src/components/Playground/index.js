/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
// Uncomment next line to import actions
// import * as actions from '../../actions';

const Playground = (/* {Pass down redux props here} */) => {
	// Initial render entry point here
	return (
		<div>
			PUT STUFF HERE!!!
		</div>
	);
};

// Use below functions to pass props + actions
const mapStateToProps = (/* state */) => ({});
const mapDispatchToProps = (/* dispatch */) => ({
	/* onChange: value => dispatch(actions.coolAction(value)), */
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Playground);
