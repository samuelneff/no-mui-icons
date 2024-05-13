export function DoorbellFilledIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-filled-icon no-mui-doorbell-filled-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,3L4,9v12h16V9L12,3z M12,17.5c-0.55,0-1-0.45-1-1h2C13,17.05,12.55,17.5,12,17.5z M16,16H8v-1h1v-2.34 c0-1.54,0.82-2.82,2.25-3.16V9.25c0-0.41,0.34-0.75,0.75-0.75s0.75,0.34,0.75,0.75V9.5C14.19,9.84,15,11.12,15,12.66V15h1V16z"/></g></svg>
  );
}
