export function SquareFilledIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-filled-icon no-mui-square-filled-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="18" width="18" x="3" y="3"/></g></g></svg>
  );
}
