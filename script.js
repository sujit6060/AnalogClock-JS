const hourHand = document.getElementById('hours')
const minuteHand = document.getElementById('mins')
const secondHand = document.getElementById('secs')

function getClock() {
  const currentDate = new Date()
  const sec = currentDate.getSeconds() / 60
  const min = (sec + currentDate.getMinutes()) / 60
  const hour = (min + currentDate.getHours()) / 12
  setRotation(secondHand, sec)
  setRotation(minuteHand, min)
  setRotation(hourHand, hour)
}

function setRotation(element, rotation) {
  element.style.setProperty('--rotation', rotation * 360)
}

getClock()
setInterval(getClock, 1000)