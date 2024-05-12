export function CompressSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-compress-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect height="2" width="16" x="4" y="9"/><polygon points="16,4 13,4 13,1 11,1 11,4 8,4 12,8"/><polygon points="8,19 11,19 11,22 13,22 13,19 16,19 12,15"/><rect height="2" width="16" x="4" y="12"/></g></g></svg>
  );
}
