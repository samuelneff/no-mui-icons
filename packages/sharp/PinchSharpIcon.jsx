export function PinchSharpIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-sharp-icon no-mui-pinch-sharp-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M23.18,15.4L22.1,23h-9L8,17.62l1.22-1.23L13,17.24V6.5C13,5.67,13.67,5,14.5,5S16,5.67,16,6.5v6h1.38L23.18,15.4z M6,2.5 V1h5v5H9.5V3.56L3.56,9.5H6V11H1V6h1.5v2.44L8.44,2.5H6z"/></g></svg>
  );
}
