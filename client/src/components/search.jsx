import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle
} from "mdbreact";
import { Row, Col } from 'react-bootstrap'
import Rend from './rend'
import modelList from "../data/model.json";

class Search extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      modelName: ""
    };
  }
  
  renderModel = model => {

    /*-- finction to handle the click on the image card
    ----*/
    function handleClick() {
      console.log('in cardClick ' + model.name);
      this.setState({ modelName: model.name });
    }

    return (
      <div className="col-md-3" style={{ marginTop: "20px" }} onClick={handleClick.bind(this)}>
        <Card>
          <CardBody>
            <p className=""
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                width={200}
                height={200}
                src={model.image}
                className={model.image}
                alt={model.name}
              />
            </p>
            <CardTitle title={model.name}>
              {model.name.substring(0, 15)}
              {model.name.length > 15 && "..."}
            </CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  };


  onchange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { search } = this.state;
    const filteredModels = modelList.filter(model => {
      return model.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    return (
      <div className="search">
        <div className="container">
          <h3 className="search-text"> Search 3D model</h3>

          {/*Search Input*/}
          <label className="search-label" htmlFor="search-input">

            <input
              label="Search Model"
              icon="search"
              placeholder="Enter name of model"
              onChange={this.onchange}
            />
            <i className="fa fa-search search-icon" />
          </label>

          <Row>
            <Col md={6}>

              {filteredModels.map(model => {
                return this.renderModel(model);
              })
              }

            </Col>
            <Col md={6}>
              {console.log(`in search name is ./img/search/${this.state.modelName}.obj`)}
              <Rend objFileName={`./img/search/${this.state.modelName}.obj`}/>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Search;