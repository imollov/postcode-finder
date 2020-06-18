let timeout

export default (func, delay) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    func()
  }, delay)
}
