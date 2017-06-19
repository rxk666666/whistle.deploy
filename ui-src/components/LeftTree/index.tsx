import './index.scss';
import * as React from 'react';
import 'rc-tree/assets/index.css';
import {inject, observer} from 'mobx-react';
import {AppStoreProps} from '../stores/appStore';
import axios from 'axios';
const Tree = require('rc-tree');
const TreeNode = Tree.TreeNode;
export interface LeftTreeProps extends AppStoreProps{

}

declare namespace file{
    interface fileItem{
        name?: string,
        path?: string,
        size?: number,
        type?: string,
        children?: fileItem[]
    }
}

interface LeftTreeState{
    dirTree?: file.fileItem
}

@inject('store')
@observer
export default class LeftTree extends React.Component<LeftTreeProps, LeftTreeState>{
    state:LeftTreeState = {
        
    }
    constructor(props: LeftTreeProps){
        super(props);
    }

    onSelect = (keys:string[], info:any) => {
        if(info.node.props['data-type'] == 'file'){
            this.props.store.setFile(keys[0]);
        }
    }

    componentDidMount(){
        axios.get('/cgi-bin/getFiles')
        .then((response) => {
            console.log(response);
            this.setState({
                dirTree: response.data.files
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }

    renderFileTree(fileItem: file.fileItem):JSX.Element[]{
        let children = fileItem.children && fileItem.children.map((item) => {
            return <TreeNode title={item.name} key={item.path} data-type={item.type}>{this.renderFileTree(item)}</TreeNode>
        });
        return children;
    }

    render(){

        let node = this.state.dirTree && this.renderFileTree(this.state.dirTree)

        return (
                <Tree
                    onSelect={this.onSelect}
                    className="mod-tree"
                >
                    {node}
                </Tree>
        )
    }
}