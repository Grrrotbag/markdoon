import marked from "marked";

// MARKED OPTIONS
const renderer = new marked.Renderer();
renderer.link = (href, text) => {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const PreviewPane = (props) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.text, { renderer: renderer, sanitize: false }),
      }}
      id="preview"
    />
  );
};

export default PreviewPane;
