chrome.storage.local.get('disabled', ({ disabled }) => {
  if (!disabled) {
    document.addEventListener('pointerdown', (event) => {
      event.target.setPointerCapture(event.pointerId)
    }, true)
  }
})
