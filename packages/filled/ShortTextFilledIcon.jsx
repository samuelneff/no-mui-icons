export function ShortTextFilledIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-filled-icon no-mui-short-text-filled-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M4,9h16v2H4V9z M4,13h10v2H4V13z"/></g></g></g></svg>
  );
}
