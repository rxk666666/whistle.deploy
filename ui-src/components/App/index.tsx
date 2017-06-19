// require('./index.scss');
import './index.scss';
import * as React from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';
import LeftTree from 'components/LeftTree';
import RightPanel from 'components/RightPanel';
import {Provider, observer} from 'mobx-react';
import {observable, action} from 'mobx';
import appStore from '../stores/appStore';

export interface AppProps {};

@observer
export class App extends React.Component<AppProps, undefined>{
    constructor(props: AppProps){
        super(props);
    }

    store = new appStore();

    componentDidMount(){
    }

    render(){
        return (
            <Provider store={this.store}>
            <div className="mod-container">
                <LeftTree/>
                <RightPanel/>
            </div>
            </Provider>
        )
    }
}