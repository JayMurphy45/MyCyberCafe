    var ctx = document.getElementById('myChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Indeed', 'Discord', 'Sky Sports', 'BBC', 'Twitter', 'FaceBook', 'Youtube'],
            datasets: [{
            label: 'My First dataset',
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(255, 159, 64)', 'rgb(255, 79, 64)'],
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },
        // Configuration options go here
        options: {}
    });
