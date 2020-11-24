import React from "react";
import marked from "marked";
import "./App.css";
import placeholder from "./components/Placeholder";
import EditorPane from "./components/EditorPane";
import PreviewPane from "./components/PreviewPane";

marked.setOptions({
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder,
    };
  }
  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
  render() {
    return (
      <div id="page-container">
        <div id="header">
          <h1>Markdoon</h1>
        </div>
        <div id="body-container">
          <div id="editor-container" className="pane-container">
            <EditorPane text={this.state.text} onChange={this.handleChange.bind(this)} />
          </div>
          <div id="preview-container" className="pane-container">
            <PreviewPane text={this.state.text} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
