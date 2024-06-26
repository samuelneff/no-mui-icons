export function CallMissedOutgoingOutlinedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-outlined-icon no-mui-call-missed-outgoing-outlined-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"/></svg>
  );
}
