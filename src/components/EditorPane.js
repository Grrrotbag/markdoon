const EditorPane = (props) => {
  return <textarea id="editor" onChange={props.onChange} value={props.text} />;
};

export default EditorPane;
