export function VerticalShadesTwoToneIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-two-tone-icon no-mui-vertical-shades-two-tone-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><rect height="14" opacity=".3" width="2" x="6" y="5"/><rect height="14" opacity=".3" width="2" x="16" y="5"/><path d="M20,19V3H4v16H2v2h20v-2H20z M8,19H6V5h2V19z M14,19h-4V5h4V19z M18,19h-2V5h2V19z"/></g></g></svg>
  );
}
