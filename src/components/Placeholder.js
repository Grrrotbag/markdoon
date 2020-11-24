const placeholder = `# Markdoon

## This is a sub-heading...
### And here's some other cool stuff:

## Code

Heres some code, \`<div>test</div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

## Text

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to ~~strikethrough~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

## Tables:

Header 1 | Header 2 | Header 3
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Or here... | Wherever!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want
1. Let's not forget embedded images:

If you want to embed images, this is how you do it:

![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)
`;

export default placeholder;
