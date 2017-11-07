
var secondHand = document.querySelector('.second-hand')
var hourHand = document.querySelector('.hour-hand')
var minuteHand = document.querySelector('.minute-hand')

function setDate() {
	const now = new Date()
	var seconds = now.getSeconds()
	const secondsDegree = ((seconds / 60) * 360)
	secondHand.style.transform = `rotate(${secondsDegree}deg)`

	const minutes = now.getMinutes()
	const minutesDegree = ((minutes / 60) * 360)
	minuteHand.style.transform = `rotate(${minutesDegree}deg)`
	
	const hour = now.getHours()
	const hoursDegree = ((hour / 12) * 360)
	hourHand.style.transform = `rotate(${hoursDegree}deg)`

}


setInterval(setDate, 1000)