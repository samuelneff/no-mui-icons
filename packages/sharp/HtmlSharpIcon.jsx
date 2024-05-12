export function HtmlSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-html-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M3.5,9H5v6H3.5v-2.5h-2V15H0V9h1.5v2h2V9z M18.5,9H12v6h1.5v-4.5h1V14H16v-3.51h1V15h1.5V9z M11,9H6v1.5h1.75V15h1.5v-4.5 H11V9z M24,15v-1.5h-2.5V9H20v6H24z"/></g></svg>
  );
}
