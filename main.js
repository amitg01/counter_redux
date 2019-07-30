var increment = document.querySelector(".increment");
var decrement = document.querySelector(".decrement");
var reset = document.querySelector(".reset");
var counterDisplay = document.querySelector(".counter");

function reducer(state = 0, action) {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      case "reset":
        return state=0
      default:
        return state
    }
  }

  let store = Redux.createStore(reducer)

  store.subscribe(() => {
    counterDisplay.textContent = store.getState()
  })

  increment.addEventListener("click",()=> store.dispatch({type:"increment"}))
  decrement.addEventListener("click",()=> store.dispatch({type:"decrement"}))
  reset.addEventListener("click",()=> store.dispatch({type:"reset"}))





