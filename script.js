const chk = document.querySelectorById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})