export function HexagonFilledIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-filled-icon no-mui-hexagon-filled-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><polygon points="17.2,3 6.8,3 1.6,12 6.8,21 17.2,21 22.4,12"/></g></svg>
  );
}
