export function RectangleTwoToneIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-two-tone-icon no-mui-rectangle-two-tone-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g opacity=".3"><rect height="12" width="16" x="4" y="6"/></g><g><path d="M2,4v16h20V4H2z M20,18H4V6h16V18z"/></g></g></svg>
  );
}
