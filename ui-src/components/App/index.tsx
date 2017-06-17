// require('./index.scss');
import './index.scss';
import * as React from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';
import LeftTree from 'components/LeftTree';

export interface AppProps {};

export class App extends React.Component<AppProps, undefined>{
    constructor(props: AppProps){
        super(props);
    }
    
    render(){
        return (
            <Row className="mod-container">
                <LeftTree />
            </Row>
        )
    }
}