chrome.storage.local.get('disabled', ({ disabled }) => {
  if (!disabled) {
    window.addEventListener('pointerdown', (event) => {
      if (event.target instanceof Element)
        event.target.setPointerCapture(event.pointerId)
    }, true)
  }
})
