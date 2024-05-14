import highlighter from 'highlight.js/lib/core';
import javascriptHighlights from 'highlight.js/lib/languages/javascript';
import cssHighlights from 'highlight.js/lib/languages/css';

import { CodeTitle } from './CodeTitle';
import { CodeExplanation } from './CodeExplanation';
import { InlineCode } from './InlineCode';

import styles from './StylingSection.module.scss';
import { IconMarquee } from './IconMarquee';

highlighter.registerLanguage('javascript', javascriptHighlights);
highlighter.registerLanguage('css', cssHighlights);

const customCssReactCode = {
  __html: highlighter.highlight(`
<EmailSharpIcon className="sendEmailIcon" />
`.trim(),
    {
      language: 'jsx'
    }
  ).value
};

const customCssExampleCode = {
  __html: highlighter.highlight(`
.sendEmailIcon {
  width: 40px;
  height: 40px;
  fill: blue;
  cursor: pointer;
}
`.trim(),
    {
      language: 'css'
    }
  ).value
};

const preDefinedCssReactCode = {
  __html: highlighter.highlight(`
<EmailSharpIcon />
`.trim(),
    {
      language: 'jsx'
    }
  ).value
};

const preDefinedCssExampleCode = {
  __html: highlighter.highlight(`
.no-mui-icon {
  width: 40px;
  height: 40px;
}

.no-mui-filled-icon {
  fill: blue;
}

.no-mui-email-sharp-filled-icon {
  fill: green;
}
`.trim(),
    {
      language: 'css'
    }
  ).value
};

export function StylingSection() {
  return (
    <div className={styles.stylingSection}>
      <CodeTitle>
        Custom CSS classes
      </CodeTitle>

      <IconMarquee />

      <CodeExplanation>
        Every icon accepts a custom <InlineCode>className</InlineCode> attribute that is
        passed to the <InlineCode>&lt;svg /&gt;</InlineCode> element.
      </CodeExplanation>

      <pre><code
        className="language-jsx"
        dangerouslySetInnerHTML={customCssReactCode}
      /></pre>
      <pre><code
        className="language-css"
        dangerouslySetInnerHTML={customCssExampleCode}
      /></pre>

      <CodeTitle>
        Pre-defined CSS classes
      </CodeTitle>

      <CodeExplanation>
        Every icon additionally includes three pre-defined classes.
        <ul>
          <li><InlineCode>no-mui-icon</InlineCode> is added to every icon.</li>
          <li>
            <InlineCode>no-mui-[style]-icon</InlineCode> where <InlineCode>[style]</InlineCode> is
            the appropriate icon style:
            <InlineCode>&nbsp;filled</InlineCode>,
            <InlineCode>&nbsp;outlined</InlineCode>,
            <InlineCode>&nbsp;sharp</InlineCode>,
            <InlineCode>&nbsp;rounded</InlineCode>, or
            <InlineCode>&nbsp;two-tone</InlineCode>.
          </li>
          <li>
            <InlineCode>no-mui-[icon-name]-[style]-icon</InlineCode> where <InlineCode>[icon-name]</InlineCode> is
            the kebab-case name of the icon and <InlineCode>[style]</InlineCode> is one of the previously
            mentioned styles such as <InlineCode>no-mui-thumb-up-filled-icon</InlineCode> or <InlineCode>no-mui-email-sharp-icon</InlineCode>.
          </li>
        </ul>
      </CodeExplanation>

      <pre><code
        className="language-jsx"
        dangerouslySetInnerHTML={preDefinedCssReactCode}
      /></pre>
      <pre><code
        className="language-css"
        dangerouslySetInnerHTML={preDefinedCssExampleCode}
      /></pre>
    </div>
  );
}
