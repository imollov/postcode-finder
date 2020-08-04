let timeout

function debounce(func, delay) {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    func()
  }, delay)
}

export default debounce
