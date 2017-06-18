import './index.scss';
import * as React from 'react';
import 'rc-tree/assets/index.css';
const Tree = require('rc-tree');
const TreeNode = Tree.TreeNode;
export interface LeftTreeProps{

}

export default class LeftTree extends React.Component<LeftTreeProps, undefined>{

    // state = {

    // }
    constructor(props: LeftTreeProps){
        super(props);
    }

    onSelect = (keys:string[], info:any) => {
        console.log(keys, info)
    }

    render(){
        return (
                <Tree
                    onSelect={this.onSelect}
                    className="mod-tree"
                >
                    <TreeNode title="parent-1">
                        <TreeNode title="leaf-1"></TreeNode>
                        <TreeNode title="leaf-2"></TreeNode>
                    </TreeNode>
                    <TreeNode title="leaf-3"></TreeNode>
                </Tree>
        )
    }
}