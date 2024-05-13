export function WindowSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-window-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="8" width="8" x="3" y="3"/><rect height="8" width="8" x="13" y="3"/><rect height="8" width="8" x="3" y="13"/><rect height="8" width="8" x="13" y="13"/></g></g></svg>
  );
}
