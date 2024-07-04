export const fetchStolenBikes = async () => {
  try {
    const url = 'http://localhost:3000/api/data';

    const response = await fetch(url);
    const status = response.status;
    const body = await response.json();

    if (status == 200) {
      return body;
    }
    return { status: false };
  } catch (error) {
    return error.message;
  }
};

export const bikesStolenPastWeek = async (stolenLocation = null) => {
  const stolenBikes = await fetchStolenBikes();

  if (!stolenLocation) {
    stolenLocation = '';
  }

  const currentDate = new Date();
  const lastWeekDate = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  );

  const filteredData = stolenBikes['bikes'].filter((bike) => {
    const stolenDate = new Date(bike['date_stolen'] * 1000);

    return (
      stolenDate >= lastWeekDate &&
      stolenDate <= currentDate &&
      bike['stolen_location']
        .toLocaleLowerCase()
        .includes(stolenLocation.toLocaleLowerCase())
    );
  });

  return filteredData;
};

// window.onload = bikesStolenPastWeek;
