export function ColorizeSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-colorize-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21.42 6.34l-3.75-3.75-3.82 3.82-1.94-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.84-3.83zM6.92 19L5 17.08l8.06-8.06 1.92 1.92L6.92 19z"/></svg>
  );
}
