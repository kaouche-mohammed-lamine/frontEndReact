import React ,{Component} from 'react';
import "./App.css"
import { Container, Row, Col } from 'styled-bootstrap-grid';
import ReactDOM from 'react-dom';


class headerApp extends Component{
    render(){
		return (
		<Container fluid="true" className="header">
			<Row>
				Hello worlddddd
			</Row>
		</Container>
		);
	}
}

export default headerApp;