export function ShowChartRoundedIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-rounded-icon no-mui-show-chart-rounded-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4.2 17.78l5.3-5.3 3.25 3.25c.41.41 1.07.39 1.45-.04l7.17-8.07c.35-.39.33-.99-.04-1.37-.4-.4-1.07-.39-1.45.04l-6.39 7.18-3.29-3.29c-.39-.39-1.02-.39-1.41 0l-6.09 6.1c-.39.39-.39 1.02 0 1.41l.09.09c.39.39 1.03.39 1.41 0z"/></svg>
  );
}
