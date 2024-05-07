function handleOutsideClick({
  inputElement,
  aiBtn
}: {
  inputElement: HTMLElement
  aiBtn: HTMLElement
}) {
  return (e: Event) => {
    if (!inputElement) return
    const p = inputElement.querySelector("p")
    if (e.target === inputElement || e.target === p) {
      aiBtn.style.display = "flex"
      aiBtn.style.justifyContent = "center"
      aiBtn.style.alignItems = "center"
    } else {
      aiBtn.style.display = "none"
    }
  }
}

export const useInsertBtnToInput = ({
  handleOpenModal,
  inputElement
}: {
  handleOpenModal: () => void
  inputElement: HTMLElement
}) => {
  const isAiBtn = document.getElementById("chatgpt-writer-linkedIn-ai-btn")
  let inputElem = inputElement
  if (!inputElem) {
    inputElem = document.querySelector(
      ".msg-form__contenteditable"
    ) as HTMLElement
  }
  if (!isAiBtn) {
    const aiBtn = document.createElement("div")
    aiBtn.addEventListener("click", () => {
      handleOpenModal()
    })

    // ai btn styles
    aiBtn.id = "chatgpt-writer-linkedIn-ai-btn"
    aiBtn.classList.add("ai-div")
    // I dont know why but the stye from css file were not implementing
    aiBtn.style.display = "none"
    aiBtn.style.width = "23px"
    aiBtn.style.height = "23px"
    aiBtn.style.borderRadius = "9999px"
    aiBtn.style.backgroundColor = "white"
    aiBtn.style.cursor = "pointer"
    aiBtn.style.position = "absolute"
    aiBtn.style.right = "5px"
    aiBtn.style.bottom = "5px"

    aiBtn.innerHTML = `
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="ai-icon" 
              style="
              width: 20px;
              color: #2663eb;
             
              "
              >
              <path
                fill-rule="evenodd"
                d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
                clip-rule="evenodd"
              />
            </svg>
          `
    inputElem?.appendChild(aiBtn)

    // adding event listner to shoe btn in input box is clicked
    const handleClick = handleOutsideClick({ inputElement: inputElem, aiBtn })
    window.addEventListener("click", handleClick)
  }
}
