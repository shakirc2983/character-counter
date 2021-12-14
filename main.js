const textContent = document.getElementById('textContent')
const form = document.getElementById('form')
const promptElement = document.getElementById('prompt')

form.addEventListener('submit', (event) => {
	let messages = []

	if (textContent.value.length === 0) {
		messages.push("Please fill in this field")
	} else {
		messages.push(`Characters: ${textContent.value.length}`)
		messages.push(`Words: ${textContent.value.split(' ').length}`)
		console.log('Check')
	}

	event.preventDefault()
	promptElement.innerText = messages.join('\n')
})