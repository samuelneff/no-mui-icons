export function OpacityRoundedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-rounded-icon no-mui-opacity-rounded-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M17.65,7.56L17.65,7.56L12.7,2.69c-0.39-0.38-1.01-0.38-1.4,0L6.35,7.56l0,0C4.9,8.99,4,10.96,4,13.13 C4,17.48,7.58,21,12,21c4.42,0,8-3.52,8-7.87C20,10.96,19.1,8.99,17.65,7.56z M7.75,8.99L12,4.81l4.25,4.18 c0.88,0.87,2.04,2.59,1.67,5.01H6.07C5.7,11.58,6.87,9.85,7.75,8.99z"/></g></svg>
  );
}
