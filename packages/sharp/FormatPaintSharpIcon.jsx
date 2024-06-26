export function FormatPaintSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-format-paint-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M18 4V2H4v6h14V6h1v4H9v12h4V12h8V4h-3z"/></svg>
  );
}
