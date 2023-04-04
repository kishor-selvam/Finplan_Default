const ExpenseSourceChart = {
    height: 679,
    type: 'bar',
    options: {
        chart: {
            id: 'bar-chart',
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '50%'
            }
        },
        xaxis: {
            type: 'category',
            categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','Jan', 'Feb', 'Mar']
        },
        legend: {
            show: true,
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 10,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        colors: [
            "#e07a5f",
            "#3d405b",
            "#81b29a",
            "#3d5a80",
            "#1f7a8c",
        ],
        grid: {
            show: true
        }
    },
    series: [
        {
            name: 'Education',
            data: [5000, 4000, 10000, 3000, 2000, 8000, 3500, 2000, 6500, 4500, 1500, 9000]
        },
        {
            name: 'Medical',
            data: [1000, 1500, 2000, 3000, 1000, 500, 2000, 2500, 2000, 850, 1000, 7500]
        },
        {
            name: 'Entertainment',
            data: [1000, 1200, 1000, 1500, 800, 2000, 1600, 10000, 3000, 2000, 3000, 1000]
        },
        {
            name: 'Life Style',
            data: [3000, 1400, 3500, 3500, 2000, 1200, 1000, 1000, 6500, 4500, 3000, 3000]
        },
        {
            name: 'Household',
            data: [1000, 2000, 10000, 3500, 2000, 13000, 1800, 1300, 5000, 6000, 7000, 3000]
        },
    ]
};
export default ExpenseSourceChart;