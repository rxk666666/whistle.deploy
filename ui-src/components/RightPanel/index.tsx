import './index.scss';
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/mode/javascript/javascript';
import {observer, inject} from 'mobx-react';
import {AppStoreProps} from '../stores/appStore';
import axios from 'axios';
export interface RightPanelProps extends AppStoreProps{

}

@inject('store')
@observer
export default class RightPanel extends React.Component<RightPanelProps, {}>{
    constructor(props: RightPanelProps){
        super(props);
    }

    componentDidMount(){
        let editor: ReactCodeMirror.ReactCodeMirror = this.refs.editor as ReactCodeMirror.ReactCodeMirror;
        editor.getCodeMirror().setSize('auto', window.innerHeight);
    }

    componentWillReact(){
        axios.get('/cgi-bin/getFile', {
            params:{
                filepath: this.props.store.file
            }
        })
        .then((response) => {
            let editor: ReactCodeMirror.ReactCodeMirror = this.refs.editor as ReactCodeMirror.ReactCodeMirror;
            editor.getCodeMirror().setValue(response.data.raw);
        })
        .catch((err) => {
            console.log(err);
        })

    }

    render(){
        
        let editorOptions:CodeMirror.EditorConfiguration = {
            readOnly: true,
            mode: 'javascript',
            theme: 'cobalt'
        }
        return (
            <div
                className="mod-right-panel"
            >
            <CodeMirror
                ref="editor"
                value={this.props.store.file + '333'}
                options = {editorOptions}    
            />
            </div>
        )
    }
}