export function HexagonRoundedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-rounded-icon no-mui-hexagon-rounded-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M16.05,3H7.95C7.24,3,6.58,3.38,6.22,4l-4.04,7c-0.36,0.62-0.36,1.38,0,2l4.04,7c0.36,0.62,1.02,1,1.73,1h8.09 c0.71,0,1.37-0.38,1.73-1l4.04-7c0.36-0.62,0.36-1.38,0-2l-4.04-7C17.42,3.38,16.76,3,16.05,3z"/></g></svg>
  );
}
