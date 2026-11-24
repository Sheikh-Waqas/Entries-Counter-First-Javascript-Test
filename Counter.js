let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)
console.log(saveEl)

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countstr = count +" - "
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
    // console.log(count)
}

// I wrote all the code for practice only, It has nothing to do with code above

// document.getElementById("count").innerText = 5

// let count = 0
// console.log(count)
// let MyAge = 27
// console.log(MyAge)

// let DogYears = 7
// let HumanYears = 27
// let count = DogYears * HumanYears
// console.log(count)

// let count = 50
// count = count + 50
// count = count - 30
// count = count + 80
// console.log(count)

// function increment() {
//     console.log("The button was clicked")
// }

// function Countdown() {
//     console.log("5")
//     console.log("4")
//     console.log("3")
//     console.log("2")
//     console.log("1")
// }
// // Before Starting
// console.log(Countdown())
// // Game Start
// console.log(Countdown())

// function Score() {
//     console.log("48")
// }
// console.log(Score())

// let lap1 = 34
// let lap2 = 44
// let lap3 = 39
// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
//     console.log(totalTime)
// }
// console.log(logLapTime())

// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// let username = "John"
// let message = "You have three new notifications"
// let messagesToUser = username + ", " + message 
// console.log(messagesToUser)

// let myName = "John"
// let greetings = "Hi, my name is"
// let myGreetings = greetings + " " + myName
// console.log(myGreetings)

// let wish = "I'd love to see the film \"The Lion King\""
// console.log(wish)
// Use backslash before writting "" so it does not error

// let welcomeEl = document.getElementById("welcome-el")

// let name = "John"
// let greeting = "We welcome you to our website, "

// welcomeEl.innerText = greeting + name
// welcomeEl.innerText += " 👋"

