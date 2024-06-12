import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { bikesStolenPastWeek } from './backend.js';

async function populateTable() {
  const data = await bikesStolenPastWeek();
  var tableBody = document.querySelector('#dataTable tbody');
  tableBody.empty(); // Clear previous data

  data.forEach(function (record) {
    var row = `<tr>
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
