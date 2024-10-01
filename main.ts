for (let i = 2; i < 21; i++) {
    //  Start at 2, end at 20 (inclusive)
    if (i == 8) {
        console.log("❤️")
    }
    
    console.log(i)
}
basic.forever(function on_forever() {
    led.plot(0, 0)
})
