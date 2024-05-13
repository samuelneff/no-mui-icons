export function DeskSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-desk-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M2,6v12h2V8h10v10h2v-2h4v2h2V6H2z M20,8v2h-4V8H20z M16,14v-2h4v2H16z"/></g></svg>
  );
}
