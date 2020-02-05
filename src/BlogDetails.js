import React, {Component} from 'react';
import { Container, Row, Col } from 'styled-bootstrap-grid';

//This Component is a child Component of Customers Component
export default class BlogDetails extends Component {

  render() {
    if (!this.state.BlogDetails)
      return (<p>Loading Data</p>)
    return (<div className="BlogDetails">
      <Panel bsStyle="info" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.BlogDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          
        </Panel.Body>
      </Panel>
    </div>)
  }
}
