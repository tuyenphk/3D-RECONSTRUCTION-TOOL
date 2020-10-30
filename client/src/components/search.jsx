import React from 'react';
import axios from 'axios';
import Loader from './loader.gif';
import {Row, Col} from 'react-bootstrap'
import Rend from './rend'

class Search extends  React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			query: '',
            results: {},
            loading: false,
            message: '',
        };
        this.cancel = '';
    }
        /**
     * Fetch the search results and update the state with the result.
     *
     * @param {int} updatedPageNo Updated Page No.
     * @param {String} query Search Query.
     *
     */
    fetchSearchResults = (updatedPageNo = '', query ) => {
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        // By default the limit of results is 20
        const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}${pageNumber}`;
        if (this.cancel) {
            // Cancel the previous request before making a new request
            this.cancel.cancel();
        }
        // Create a new CancelToken
        this.cancel = axios.CancelToken.source();
        axios
            .get(searchUrl, {
                cancelToken: this.cancel.token,
            })
            .then((res) => {
                const resultNotFoundMsg = !res.data.hits.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                this.setState({
                    results: res.data.hits,
                    message: resultNotFoundMsg,
                    loading: false,
                });
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch results.Please check network',
                    });
                }
            });
    };

    handleOnInputChange = (event) => {
        const query = event.target.value;
        if ( ! query ) {
            this.setState({ query, results: {}, message: '' } );
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(1, query);
            });
        }
    };
    renderSearchResults = () => {
        const {results} = this.state;
        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container">
                    {results.map((result) => {
                        return (
                            <a key={result.id} href={result.previewURL} className="result-items">
                                <h6 className="image-username">{result.user}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={result.previewURL} alt={result.user}/>
                                </div>
                            </a>
                        );
                    })}
                </div>
            );
        }
    };

	render() {
        const {message, loading, query } = this.state;
		return (	
			<div className="search">
				 <div className="container">
                    <h3 className="search-text"> Search 3D model</h3>  

                    {/*Search Input*/}
                    <label className="search-label" htmlFor="search-input">
                   
                        <input
                            type="text"
                            value={query}
                            id="search-input"
                            placeholder="Search..."
                            onChange={this.handleOnInputChange}
                        />
                        <i className="fa fa-search search-icon"/>
                    </label>

                {/*Error Message*/}
                    { message && <p className="message">{message}</p> }
                    <Row>
                <Col md = {6}>  
                {/*Loader*/}
               
                    <img  src={Loader} className={`search-loading ${loading ? 'show' : 'hide' }`}  alt="loader"/>
                
                {/*Result*/}
                    { this.renderSearchResults() }

                </Col>

                <Col md = {6}> 
                    <Rend/>
                </Col>
                </Row>
                        </div>
                    </div>
              
           
			)
	}
}
export default Search;