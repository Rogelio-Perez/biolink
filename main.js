window.addEventListener('DOMContentLoaded', () => {
  const $ = (query) => document.querySelector(query)

  setTimeout(() => {
    const main = $('main')
    main.style.opacity = 1
    main.style.filter = 'blur(0px)'
  }, 1000);
})
