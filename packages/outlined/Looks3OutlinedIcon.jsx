export function Looks3OutlinedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-outlined-icon no-mui-looks-3-outlined-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-4-4v-1.5c0-.83-.67-1.5-1.5-1.5.83 0 1.5-.67 1.5-1.5V9c0-1.11-.9-2-2-2H9v2h4v2h-2v2h2v2H9v2h4c1.1 0 2-.89 2-2z"/></svg>
  );
}
