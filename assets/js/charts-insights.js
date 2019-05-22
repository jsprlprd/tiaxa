var cs = document.getElementById('customer-sentiments').getContext('2d');
var CustomerSentiments = new Chart(cs, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Now', 'Dec'],
        datasets: [{
            label: 'Neutral',
            data: [5, 1, 4, 1, 5, 4, 4, 1, 2, 1, 7],
            backgroundColor: [
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)'
            ],
            borderColor: [
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)',
                'rgba(132, 138, 132, 1)'
            ],
            borderWidth: 1
        }, {
        label: 'Negative',
        data: [7, 2, 5, 3, 7, 6, 6, 2, 4, 3, 8],
            backgroundColor: [
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)'
            ],
            borderColor: [
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)',
                'rgba(247, 77, 61, 1)'
            ],
            borderWidth: 1
        }, {
            label: 'Possitive',
            data: [9, 3, 6, 5, 9, 8, 8, 3, 6, 5, 9],
            backgroundColor: [
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)'
            ],
            borderColor: [
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)',
                'rgba(86, 184, 91, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 10,
                    stepSize: 2
                }
            }]
        }
    }
});


















var cer = document.getElementById('customer-experience-rating').getContext('2d');
var CustomerExperienceRating = new Chart(cer, {
    type: 'bar',
    data: {
        labels: ['No Rating', '1-Star', '2-Star', '3-Star', '4-Star', '5-Star'],
        datasets: [{
            label: '# of Votes',
            data: [80, 80, 90, 150, 300, 200],
            backgroundColor: [
                'rgba(132, 138, 132, 1)',
                'rgba(255, 201, 7, 1)',
                'rgba(255, 201, 7, 1)',
                'rgba(255, 201, 7, 1)',
                'rgba(255, 201, 7, 1)',
                'rgba(255, 201, 7, 1)'
            ],
            borderColor: [
                'rgba(132, 138, 132, 1)',
                'rgba(255, 201, 7, 1)',
                'rgba(255, 201, 7, 1)',
                'rgba(255, 201, 7, 1)',
                'rgba(255, 201, 7, 1)',
                'rgba(255, 201, 7, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        legend: {
            display: false
        }
    }
});




var cd = document.getElementById('customer-demographics').getContext('2d');
var CustomerDemographics = new Chart(cd, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(247, 77, 61, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(247, 77, 61, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});





var tnm = document.getElementById('total-negative-mentions').getContext('2d');
var TotalNegativeMentions = new Chart(tnm, {
    type: 'doughnut',
    data: {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
            label: 'Total Reviews',
            data: [40, 20, 40],
            backgroundColor: [
                'rgba(255, 176, 176, 1)',
                'rgba(255, 137, 137, 1)',
                'rgba(247, 77, 61, 1)'
            ],
            borderColor: [
                'rgba(255, 176, 176, 1)',
                'rgba(255, 137, 137, 1)',
                'rgba(247, 77, 61, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        animation: {
            duration: 0
        },
        legend: {
            display: false
        }
    }
});







var sme = document.getElementById('social-media-engagements').getContext('2d');
var SocialMediaEngagements = new Chart(sme, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Now', 'Dec'],
        datasets: [{
            label: '# of Votes',
            data: [8, 3, 6, 5, 9, 8, 8, 3, 6, 5, 9, 8],
            backgroundColor: [
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)'
            ],
            borderColor: [
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)',
                'rgba(26, 130, 218, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 10,
                    stepSize: 2
                }
            }]
        },
        legend: {
            display: false
        }
    }
});
