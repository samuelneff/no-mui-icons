export function HdrAutoSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-hdr-auto-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><polygon points="12.04,8.04 11.95,8.04 10.35,12.59 13.64,12.59"/><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M15.21,17l-0.98-2.81H9.78l-1,2.81h-1.9l4.13-11 h1.97l4.13,11H15.21z"/></g></g></svg>
  );
}
