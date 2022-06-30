// export const GlobalReducer = () => {
//
// }

const initialState = {
  usersList: []
}

// action  { type:'', payload:''}

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_USERS_LIST_STORAGE': {
      const usersStorage = localStorage.getItem('users_list')
      if (usersStorage) {
        let x = JSON.parse(usersStorage)
        return {...state, usersList: x}
      }
      return {...state}
    }
    case 'ADD_USER': {
      let newUser = [...state.usersList, action.payload]
      newUser = newUser.map((item, index) => {
        return {
          ...item,
          id: index + 1
        }
      })

      const JSONString = JSON.stringify(newUser)
      localStorage.setItem('users_list', JSONString)

      return {...state, usersList: newUser}
    }
    case 'DELETE_USER': {

      const newUsers = state.usersList.filter(x => x.id !== action.payload)
      localStorage.setItem('users_list', JSON.stringify(newUsers))

      return {...state, usersList: newUsers}
    }
    default: {
      return state
    }
  }
}

export default GlobalReducer