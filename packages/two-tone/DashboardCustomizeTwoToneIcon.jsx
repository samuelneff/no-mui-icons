export function DashboardCustomizeTwoToneIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-two-tone-icon no-mui-dashboard-customize-two-tone-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><rect enableBackground="new" height="4" opacity=".3" width="4" x="5" y="15"/><rect enableBackground="new" height="4" opacity=".3" width="4" x="5" y="5"/><rect enableBackground="new" height="4" opacity=".3" width="4" x="15" y="5"/><path d="M3,11h8V3H3V11z M5,5h4v4H5V5z"/><path d="M13,3v8h8V3H13z M19,9h-4V5h4V9z"/><path d="M3,21h8v-8H3V21z M5,15h4v4H5V15z"/><polygon points="18,13 16,13 16,16 13,16 13,18 16,18 16,21 18,21 18,18 21,18 21,16 18,16"/></g></g></svg>
  );
}
