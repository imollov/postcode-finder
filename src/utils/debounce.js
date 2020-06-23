let timeout

const debounce = (func, delay) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    func()
  }, delay)
}

export default debounce
