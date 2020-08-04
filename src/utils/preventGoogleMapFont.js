function preventGoogleMapFont() {
  const head = document.getElementsByTagName('head')[0]
  const insertBefore = head.insertBefore

  head.insertBefore = (newElement, referenceElement) => {
    if (
      newElement.href &&
      newElement.href.indexOf(
        'https://fonts.googleapis.com/css?family=Roboto',
      ) === 0
    ) {
      return
    }
    insertBefore.call(head, newElement, referenceElement)
  }
}

export default preventGoogleMapFont
