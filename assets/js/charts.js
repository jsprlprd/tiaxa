var aur = document.getElementById('average-user-rating').getContext('2d');
var AverageUserRating = new Chart(aur, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Now', 'Dec'],
        datasets: [{
            label: '# of Votes',
            data: [8, 3, 6, 5, 9, 8, 8, 3, 6, 5, 9, 8],
            backgroundColor: [
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)'
            ],
            borderColor: [
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
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

















var bprsp = document.getElementById('booking-platform-review-source-pie').getContext('2d');
var BookingPlatformReviewSourcePie = new Chart(bprsp, {
    type: 'doughnut',
    data: {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
            label: 'Total Reviews',
            data: [60, 30, 10],
            backgroundColor: [
                'rgba(40, 167, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(43, 36, 34, 0.2)'
            ],
            borderColor: [
                'rgba(40, 167, 69, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(43, 36, 34, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});


var bprsp = document.getElementById('booking-platform-review-source-bar').getContext('2d');
var BookingPlatformReviewSourceBar = new Chart(bprsp, {
    type: 'horizontalBar',
    data: {
        labels: ['Booking.com', 'Tripadvisor', 'Agoda'],
        datasets: [{
            label: 'Total Reviews',
            data: [1045, 874, 693],
            backgroundColor: [
                'rgba(0, 123, 255, 0.2)',
                'rgba(0, 123, 255, 0.2)',
                'rgba(0, 123, 255, 0.2)'
            ],
            borderColor: [
                'rgba(0, 123, 255, 1)',
                'rgba(0, 123, 255, 1)',
                'rgba(0, 123, 255, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});










var smrsp = document.getElementById('social-media-review-source-pie').getContext('2d');
var SocialMediaReviewSourcePie = new Chart(smrsp, {
    type: 'doughnut',
    data: {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
            label: 'Total Reviews',
            data: [60, 30, 10],
            backgroundColor: [
                'rgba(40, 167, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(43, 36, 34, 0.2)'
            ],
            borderColor: [
                'rgba(40, 167, 69, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(43, 36, 34, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        legend: {
            display: false
        }
    }
});










var smrsb = document.getElementById('social-media-review-source-bar').getContext('2d');
var SocialMediaReviewSourceBar = new Chart(smrsb, {
    type: 'horizontalBar',
    data: {
        labels: ['Facebook', 'Twitter'],
        datasets: [{
            label: 'Total Reviews',
            data: [506, 388],
            backgroundColor: [
                'rgba(0, 123, 255, 0.2)',
                'rgba(0, 123, 255, 0.2)'
            ],
            borderColor: [
                'rgba(0, 123, 255, 1)',
                'rgba(0, 123, 255, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        legend: {
            display: false
        },
    }
});














var cs = document.getElementById('customer-sentiments').getContext('2d');
var CustomerSentiments = new Chart(cs, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Now', 'Dec'],
        datasets: [{
            label: 'Neutral',
            data: [5, 1, 4, 1, 5, 4, 4, 1, 2, 1, 7],
            backgroundColor: [
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)',
                'rgba(43, 36, 34, 0.2)'
            ],
            borderColor: [
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)',
                'rgba(43, 36, 34, 1)'
            ],
            borderWidth: 1
        }, {
        label: 'Negative',
        data: [7, 2, 5, 3, 7, 6, 6, 2, 4, 3, 8],
            backgroundColor: [
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)',
                'rgba(220, 53, 69, 0.2)'
            ],
            borderColor: [
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(242, 24, 0, 1)'
            ],
            borderWidth: 1
        }, {
            label: 'Possitive',
            data: [9, 3, 6, 5, 9, 8, 8, 3, 6, 5, 9],
            backgroundColor: [
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)',
                'rgba(40, 167, 69, 0.2)'
            ],
            borderColor: [
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(40, 167, 69, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
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
                'rgba(43, 36, 34, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)',
                'rgba(242, 145, 0, 0.2)'
            ],
            borderColor: [
                'rgba(43, 36, 34, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)',
                'rgba(242, 145, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
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
                'rgba(220, 53, 69, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(242, 24, 0, 1)',
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
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
