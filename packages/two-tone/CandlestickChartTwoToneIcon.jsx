export function CandlestickChartTwoToneIcon({ className, ...props }) {
  return (
    <svg className={`no-mui-icon no-mui-two-tone-icon no-mui-candlestick-chart-two-tone-icon ${ className ?? '' }`} {...props} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M9,4H7v2H5v12h2v2h2v-2h2V6H9V4z M9,16H7V8h2V16z"/><rect height="8" opacity=".3" width="2" x="7" y="8"/><rect height="3" opacity=".3" width="2" x="15" y="10"/><path d="M19,8h-2V4h-2v4h-2v7h2v5h2v-5h2V8z M17,13h-2v-3h2V13z"/></g></g></svg>
  );
}
