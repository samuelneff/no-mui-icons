export function BuildCircleRoundedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-rounded-icon no-mui-build-circle-rounded-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10 C22,6.48,17.52,2,12,2z M16.54,15.85l-0.69,0.69c-0.39,0.39-1.02,0.39-1.41,0l-3.05-3.05c-1.22,0.43-2.64,0.17-3.62-0.81 c-1.11-1.11-1.3-2.79-0.59-4.1l2.35,2.35l1.41-1.41L8.58,7.17c1.32-0.71,2.99-0.52,4.1,0.59c0.98,0.98,1.24,2.4,0.81,3.62 l3.05,3.05C16.93,14.82,16.93,15.46,16.54,15.85z" fill-rule="evenodd"/></g></g></svg>
  );
}
