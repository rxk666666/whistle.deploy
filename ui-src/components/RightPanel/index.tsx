import './index.scss';
import * as React from 'react';
import * as CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/mode/javascript/javascript'
export interface RightPanelProps{

}

export default class RightPanel extends React.Component<RightPanelProps, {}>{
    constructor(props: RightPanelProps){
        super(props);
    }

    componentDidMount(){
        let editor: ReactCodeMirror.ReactCodeMirror = this.refs.editor as ReactCodeMirror.ReactCodeMirror;
        editor.getCodeMirror().setSize('auto', window.innerHeight);
        //console.log(editor.focus());
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
                value="var a = 1; \n \nvar b = 5;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar b = 5;"
                options = {editorOptions}    
            />
            </div>
        )
    }
}