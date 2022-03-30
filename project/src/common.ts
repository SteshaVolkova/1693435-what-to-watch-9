export const getTimeFromMins = (mins: number) => {
  const hours = Math.trunc(mins/60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
};

export const convertDate = (commentDate: Date): string => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = commentDate.getFullYear();
  const month = months[commentDate.getMonth()];
  const day = commentDate.getDate();
  return `${month} ${day}, ${year}`;
};

export const getRemainingTime = (runTimeItem: number, currentTimeItem: number) => new Date(((runTimeItem * 60) - currentTimeItem) * 1000).toISOString().substr(11, 8).toString();

export const getRemainingPercent = (runTimeItem: number, currentTimeItem: number) => ((currentTimeItem * 100) / (runTimeItem * 60)).toFixed(3);
