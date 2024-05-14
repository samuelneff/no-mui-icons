import highlighter from 'highlight.js/lib/core';
import javascriptHighlights from 'highlight.js/lib/languages/javascript';

highlighter.registerLanguage('javascript', javascriptHighlights);

import styles from './UsageSection.module.scss';
import { CodeTitle } from './CodeTitle';
import { IconMarquee } from './IconMarquee';
import { CodeExplanation } from './CodeExplanation';


const installCode = {
  __html: `
npm install no-mui-icons-filled
npm install no-mui-icons-outlined
npm install no-mui-icons-rounded
npm install no-mui-icons-sharp
npm install no-mui-icons-two-tone
`.trim()
};

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

      <IconMarquee />

      <CodeExplanation>
        The icons are distributed in five packages corresponding to the five icon styles.
      </CodeExplanation>

      <pre><code
        className="nohighlight"
        dangerouslySetInnerHTML={installCode}
      /></pre>

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
