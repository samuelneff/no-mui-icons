export function FactorySharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-factory-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M22,10v12H2V10l7-3v2l5-2l0,0l0,3H22z M17.2,8.5L18,2h3l0.8,6.5H17.2z M11,18h2v-4h-2V18z M7,18h2v-4H7V18z M17,14h-2v4h2 V14z"/></g></svg>
  );
}
