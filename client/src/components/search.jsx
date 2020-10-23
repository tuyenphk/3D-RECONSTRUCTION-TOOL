import React from 'react';
class Search extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
                        results: {},
                        loading: false,
                        message: '',
		};
	}
	render() {
		return (
			<div className="container">
				 <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-8"> 
                        <div className="search-text">
                            <h3>Search 3D model</h3>    
                            {/*Search Input*/}
                            <label className="search-label" htmlFor="search-input">
                                <input
                                    type="text"
                                    value=""
                                    id="search-input"
                                    placeholder="Search..."
                                />
                                <i className="fa fa-search search-icon"/>
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
				
			</div>
			)
	}
}
export default Search;