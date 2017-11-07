const inputs = document.querySelectorAll('.controls input')

const color = inputs[2]
const blur = inputs[1]
const spacing = inputs[0]

color.addEventListener('change', function(e) {
	document.documentElement.style.setProperty('--base', e.target.value)
})

blur.addEventListener('mousemove', function(e) {
	document.documentElement.style.setProperty('--blur', `${e.target.value}px`)
})

spacing.addEventListener('mousemove', function(e) {
	document.documentElement.style.setProperty('--spacing', `${e.target.value}px`)
})