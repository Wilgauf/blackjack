let BASE_URL = 'https://localhost:8000/'

const login = (userObject) => {
  return fetch(`${BASE_URL}token-auth/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};

const getLoggedInUser = (token) => {
  return fetch(`${BASE_URL}api/current_user/`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    }
  }).then(res => res)
};

const signupUser = (userObject) => {
  return fetch(`${BASE_URL}api/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  }).then(res => res)
};


export { login, getLoggedInUser, signupUser }

/*
useEffect(() => {
  const getUser = async () => {
    let auth_token = localStorage.getItem("auth-user")
    if (auth_token !== 'null') {
      let response = await getLoggedInUser(auth_token)
      let data = await response.json()
      if (data.username) {
        setIsLoggedIn(true)
        setAuthUser(data)
      }
    }
  }

  getUser()

}, [user, isLoggedIn])


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