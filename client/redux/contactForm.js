import axios from "axios"

const SEND_CONTACT = "SEND_CONTACT"

const sendContact = (order) => {
    return {
      type: SEND_CONTACT,
      order,
    }
  }

export const sendContactThunk = (name, email, message) => {
    // const { guestName, guestEmail, itemQuantities, cartItems } = payload.checkoutInfo;
    return async (dispatch) => {
      try {
          console.log("gN gE gM Redux", name, email, message)
          const { data } = await axios.put(`/api/users/contact`, {
            name, email, message
          })
          console.log("thunk", data)
          dispatch(sendContact(data))
      } catch (error) {
        console.log(error)
        return dispatch(sendContact({ error: error.response.data }))
      }
    }
  }

const initialState = []

export default function contactFormReducer(state = initialState, action) {
  switch (action.type) {
      case SEND_CONTACT:
      return action.order.error
        ? {
            ...state,
            error: action.order.error,
          }
        : {
            ...state,
            cartItems: [],
            updatedPrices: [],
            error: "",
          }
    default:
      return state
  }
}