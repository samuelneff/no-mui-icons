export function FenceRoundedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-rounded-icon no-mui-fence-rounded-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><path d="M21,11L21,11c0-0.55-0.45-1-1-1h-1V7l-2.29-2.29c-0.39-0.39-1.02-0.39-1.41,0L14,6l-1.29-1.29c-0.39-0.39-1.02-0.39-1.41,0 L10,6L8.71,4.71c-0.39-0.39-1.02-0.39-1.41,0L5,7v3H4c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h1v2H4c-0.55,0-1,0.45-1,1v0 c0,0.55,0.45,1,1,1h1v3c0,0.55,0.45,1,1,1h12c0.55,0,1-0.45,1-1v-3h1c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-1v-2h1 C20.55,12,21,11.55,21,11z M16,6.83l1,1V10h-2V7.83l0.41-0.41L16,6.83z M12,6.83l0.59,0.59L13,7.83V10h-2V7.83l0.41-0.41L12,6.83z M11,14v-2h2v2H11z M13,16v2h-2v-2H13z M7,7.83l1-1l0.59,0.59L9,7.83V10H7V7.83z M7,12h2v2H7V12z M7,16h2v2H7V16z M17,18h-2v-2h2 V18z M17,14h-2v-2h2V14z"/></g></svg>
  );
}
