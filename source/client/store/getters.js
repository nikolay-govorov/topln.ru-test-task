const getTime = time => new Date(time).getTime();

// eslint-disable-next-line import/prefer-default-export
export function currentStats({ user, timePeriod }) {
  if (!user.statistics || !timePeriod.start || !timePeriod.end) {
    return [];
  }

  const { start, end } = Object.keys(timePeriod)
    .reduce((all, key) => ({ ...all, [key]: getTime(timePeriod[key]) }), {});

  return user.statistics.filter((record) => {
    const date = getTime(record.date);

    return (date >= start && date <= end);
  });
}
