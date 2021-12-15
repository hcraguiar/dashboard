const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril ', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Vendas',
            data: [10, 15, 16, 5, 20, 30, 25, 15, 14, 13, 11, 9],
            backgroundColor: 'transparent',
            borderColor: '#66bf69',          
            borderWidth: 2,
            pointBackgroundColor: '##66bf69'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});