console.log(`main.js loaded.`)

const formExampleEl = document.querySelector(`[data-element=form-example]`)
const passwordVisibilityEls = document.querySelectorAll(
  `[data-element=password-visibility]`
)
const formValuesEl = document.querySelector(`[data-element=form-values]`)

passwordVisibilityEls.forEach((passwordVisibilityEl) => {
  passwordVisibilityEl.addEventListener(`click`, (e) => {
    console.log(e.target.tagName)
    const formGroup =
      e.target.tagName === "BUTTON"
        ? e.target.parentElement
        : e.target.parentElement.parentElement
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

formExampleEl.addEventListener(`submit`, (e) => {
  e.preventDefault()

  const name = formExampleEl.elements["name"].value
  const email = formExampleEl.elements["email"].value
  const password = formExampleEl.elements["password"].value
  const confirmPassword = formExampleEl.elements["confirm-password"].value

  const formValuesHtml = `
        <hr class="my-400">

        <h2 class="fs-600">Form Result</h2>

        <p>
            Name: <strong>${name}</strong><br>
            Email: <strong>${email}</strong><br>
            Password: <strong>${password}</strong><br>
            Confirm Password: <strong>${confirmPassword}</strong><br>
        </p>
    `
  formValuesEl.innerHTML = formValuesHtml
})
