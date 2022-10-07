console.log(`main.js loaded.`)

const formEl = document.querySelector(`[data-element=form]`)
const passwordVisibilityEls = document.querySelectorAll(
  `[data-element=password-visibility]`
)

passwordVisibilityEls.forEach((passwordVisibilityEl) => {
  passwordVisibilityEl.addEventListener(`click`, (e) => {
    console.log(e.target.tagName)
    const formGroup = e.target.tagName === "BUTTON" ? e.target.parentElement : e.target.parentElement.parentElement;
    console.log(formGroup.childNodes)

    if (formGroup.childNodes.length >= 3 && formGroup.childNodes[3]) {
      const passwordInputEl = formGroup.childNodes[3]
      let inputType = passwordInputEl.getAttribute(`type`)
      console.log(inputType)
      if (inputType === "password") {
        inputType = "text"
      } else if (inputType === "text") {
        inputType = "password"
      }

      passwordInputEl.setAttribute(`type`, inputType)
    }
  })
})
