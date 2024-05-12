import highlighter from 'highlight.js/lib/core';
import javascriptHighlights from 'highlight.js/lib/languages/javascript';
import { ThumbUpFilledIcon } from 'no-mui-icons-filled';
import { EmailSharpIcon } from 'no-mui-icons-sharp';

highlighter.registerLanguage('javascript', javascriptHighlights);

import styles from './UsageSection.module.scss';
import { CodeTitle } from './CodeTitle';

const reactExampleCode = {
  __html: highlighter.highlight(`
import { ThumbUpFilledIcon } from 'no-mui-icons-filled';
import { EmailSharpIcon } from 'no-mui-icons-sharp';

function UseIcons() {
  return (
    <div>
      <ThumbUpFilledIcon />

      <EmailSharpIcon
        className={styles.iconClass}
        aria-label="Send email"
        role="button"
      />
    </div>
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

      <pre><code>&gt; npm install no-mui-icons-filled</code></pre>
      <pre><code>&gt; npm install no-mui-icons-sharp</code></pre>

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
