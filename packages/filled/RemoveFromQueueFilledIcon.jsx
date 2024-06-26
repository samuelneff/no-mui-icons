export function RemoveFromQueueFilledIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-filled-icon no-mui-remove-from-queue-filled-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M21,3H3C1.89,3,1,3.89,1,5v12c0,1.1,0.89,2,2,2h5v2h8v-2h5c1.1,0,1.99-0.9,1.99-2L23,5C23,3.89,22.1,3,21,3z M21,17H3V5 h18V17z M16,10v2H8v-2H16z"/></g></g></g></svg>
  );
}
