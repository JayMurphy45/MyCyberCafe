  // Fetch data from the server
fetch("http://localhost:3000/api/renderData")
.then(response => response.json())
.then(data => {
  // Extract labels and data from the response
  const labels = data.map(record => record.url1);
  const chartData = data.map(record => record.time);

      
  var ctx = document.getElementById('myChart').getContext('2d');
  var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: [[data[1]],[data[5]],[data[3]]],
          datasets: [{
          label: 'My First dataset',
          backgroundColor: ['rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)',  'rgb(153, 102, 255)', 'rgb(255, 159, 64)', 'rgb(255, 79, 64)'],
          borderColor: 'rgb(255, 99, 132)',
          data: [data[0], data[1], data[2], data[3], data[4]],


      }]
  },

      options: {}
  })
});


