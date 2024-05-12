export function DeskTwoToneIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-two-tone-icon no-mui-desk-two-tone-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="2" opacity=".3" width="4" x="16" y="8"/><rect height="2" opacity=".3" width="4" x="16" y="12"/><path d="M2,6v12h2V8h10v10h2v-2h4v2h2V6H2z M20,14h-4v-2h4V14z M20,10h-4V8h4V10z"/></g></g></svg>
  );
}
