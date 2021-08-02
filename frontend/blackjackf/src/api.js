let BASE_URL = 'http://localhost:8000/'
const login = async (userObject) => {
  let res = await fetch(`${BASE_URL}token-auth/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  })
  let data = await res.json()
  return data
};

const getLoggedInUser = (token) => {
  return fetch(`${BASE_URL}api/current_user/`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
};

// const signupUser = (userObject) => {
//   return fetch(`${BASE_URL}api/users/`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(userObject)
//   }).then(res=>res)
// };

const signupUser = async (userObject) => {
  let res = await fetch(`${BASE_URL}api/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  })
  let data = await res.json()
  return data
};

const startGame = async (player_bet, token)=>{
  let res = await fetch(BASE_URL+'api/new_game/',
  method: 'POST',)

}



export { login, getLoggedInUser, signupUser }

/*

const handleLogin = async (evt) => {
  evt.preventDefault()
  let userObject = {
    username: evt.target.username.value,
    password: evt.target.password.value,
  }
  let response = await login(userObject)
  let data = await response.json()
  if (data.token) {
    localStorage.setItem("auth-user", `${data.token}`)
    setIsLoggedIn(true)
    setUser(data.user)
  }
}

const handleLogout = () => {
  localStorage.setItem("auth-user", null)
  setIsLoggedIn(false)
  setUser(null)
  setAuthUser(null)
}
*/