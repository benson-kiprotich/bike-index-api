import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

import { bikesStolenPastWeek } from './backend.js';

$(function () {
  $('#searchForm').on('submit', function (event) {
    event.preventDefault();
    const searchLocation = $('#searchInput').val();
    populateTable(searchLocation);
  });
});

async function populateTable() {
  const data = await bikesStolenPastWeek();
  // eslint-disable-next-line
  console.log('filtered data', data);
  const tableBody = $('#dataTable > tbody');
  // tableBody.remove(); // Clear previous data

  data.forEach(function (record) {
    let row = `<tr>
                <td>${record['id']}</td>
                <td>${record['title']}</td>
                <td>${record['frame_model']}</td>
                <td>${record['manufacturer_name']}</td>
                <td>${record['year']}</td>
                <td>${record['description']}</td>
                <td>${record['status']}</td>
                <td>${record['stolen_location']}</td>
              </tr>`;

    tableBody.append(row);
  });
}

populateTable();
