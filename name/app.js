anime.timeline({
    easing: 'linear'
})
.add({
    targets: '.cls-1',
    duration: 1000,
    opacity: [0,1],
    delay: anime.stagger(100)
})