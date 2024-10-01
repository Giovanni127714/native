for i in range(2, 21):
    # Start at 2, end at 20 (inclusive)
    if i == 8:
        print("❤️")
    print(i)

def on_forever():
    led.plot(0, 0)
basic.forever(on_forever)
