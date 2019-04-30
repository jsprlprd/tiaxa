var aur = document.getElementById('average-user-rating').getContext('2d');
var AverageUserRating = new Chart(aur, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Now', 'Dec'],
        datasets: [{
            label: '# of Votes',
            data: [8, 3, 6, 5, 9, 8, 8, 3, 6, 5, 9, 8],
            backgroundColor: [
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)'
            ],
            borderColor: [
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)',
                'rgba(241, 196, 51, 1)'
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

















var bprsp = document.getElementById('booking-platform-review-source-pie').getContext('2d');
var BookingPlatformReviewSourcePie = new Chart(bprsp, {
    type: 'doughnut',
    data: {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
            label: 'Total Reviews',
            data: [60, 30, 10],
            backgroundColor: [
                'rgba(0, 166, 81, 1)',
                'rgba(255, 97, 97, 1)',
                'rgba(165, 165, 165, 1)'
            ],
            borderColor: [
                'rgba(0, 166, 81, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(165, 165, 165, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        legend: {
            display: false
        }
    },
    centerText: {
        display: true,
        text: "280"
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
                'rgba(127, 170, 255, 1)',
                'rgba(127, 170, 255, 1)',
                'rgba(127, 170, 255, 1)'
            ],
            borderColor: [
                'rgba(127, 170, 255, 1)',
                'rgba(127, 170, 255, 1)',
                'rgba(127, 170, 255, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        animation: {
            duration: 0
        },
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
                'rgba(0, 166, 81, 1)',
                'rgba(255, 97, 97, 1)',
                'rgba(165, 165, 165, 1)'
            ],
            borderColor: [
                'rgba(0, 166, 81, 1)',
                'rgba(242, 24, 0, 1)',
                'rgba(165, 165, 165, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        animation: {
            duration: 0
        },
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
                'rgba(127, 170, 255, 1)',
                'rgba(127, 170, 255, 1)'
            ],
            borderColor: [
                'rgba(127, 170, 255, 1)',
                'rgba(127, 170, 255, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        animation: {
            duration: 0
        },
        legend: {
            display: false
        },
    }
});









