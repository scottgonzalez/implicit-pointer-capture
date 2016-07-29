chrome.storage.local.get('disabled', ({ disabled }) => {
  if (!disabled) {
    window.addEventListener('pointerdown', (event) => {
      event.target.setPointerCapture(event.pointerId)
    }, true)
  }
})
