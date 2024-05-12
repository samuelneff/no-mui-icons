export function ViewCarouselFilledIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-filled-icon no-mui-view-carousel-filled-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24"/><path d="M2,7h4v10H2V7z M7,19h10V5H7V19z M18,7h4v10h-4V7z"/></svg>
  );
}
