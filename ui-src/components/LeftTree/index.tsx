import * as React from 'react';
import 'rc-tree/assets/index.css';
import Tree from 'rc-tree';

export interface LeftTreeProps{

}


export default class LeftTree extends React.Component<LeftTreeProps, undefined>{

    // state = {

    // }
    constructor(props: LeftTreeProps){
        super(props);
    }

    render(){
        console.log(Tree);
        return <Tree>

        </Tree>
    }
}