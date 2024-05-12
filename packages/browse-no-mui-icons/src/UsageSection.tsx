import highlighter from  'highlight.js/lib/core';
import javascriptHighlights from 'highlight.js/lib/languages/javascript';

highlighter.registerLanguage('javascript', javascriptHighlights);

import styles from './UsageSection.module.scss';
import { CodeTitle } from './CodeTitle';

const reactExampleCode = {
  __html: highlighter.highlight(`
import { ThumbUpFilledIcon } from 'no-mui-icons-filled';
import { EmailSharpIcon } from 'no-mui-icons-sharp';

function UseIcons() {
  return (
    <>
      <ThumbUpFilledIcon />

      <EmailSharpIcon
        className={styles.iconClass}
        aria-label="Send email"
        role="button"
      />
    </>
  );
}
`.trim(),
    {
      language: 'jsx'
    }
  ).value
};

export function UsageSection() {
  return (
    <div className={styles.usageSection}>
      <CodeTitle>
        Installation
      </CodeTitle>

      <code>&gt; npm install no-mui-icons</code>

      <CodeTitle>
        React usage
      </CodeTitle>

      <pre><code
        className="language-jsx"
        dangerouslySetInnerHTML={reactExampleCode}
      /></pre>
    </div>
  );
}
