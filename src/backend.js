const fetchStolenBikes = async () => {
  try {
    const url = 'https://bikeindex.org/api/v3/search';
    const headers = { 'Content-Type': 'application/json' };

    const response = await fetch(url, { headers });
    const status = response.status;
    const body = await response.json();

    if (status == 200) {
      console.log('Success');
      return body;
    } else {
      console.log('Error');
    }

    return { status: false };
  } catch (error) {
    console.error(error);
  }
};

const bikesStolenPastWeek = async () => {
  const stolenBikes = await fetchStolenBikes();

  const currentDate = new Date();
  const lastWeekDate = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  );

  const filteredData = stolenBikes['bikes'].filter((bike) => {
    const stolenDate = new Date(bike.date_stolen * 1000);

    return stolenDate >= lastWeekDate && stolenDate <= currentDate;
  });

  console.log(filteredData);
};

bikesStolenPastWeek();
