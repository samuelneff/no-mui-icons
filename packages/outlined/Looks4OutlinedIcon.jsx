export function Looks4OutlinedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-outlined-icon no-mui-looks-4-outlined-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M.04 0h24v24h-24V0z" fill="none"/><path d="M19.04 3h-14c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16h-14V5h14v14zm-6-2h2V7h-2v4h-2V7h-2v6h4z"/></svg>
  );
}
