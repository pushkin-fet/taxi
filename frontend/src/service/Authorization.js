
export async function authUser(email, password) {
    const response = await fetch('http://localhost:5000/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(async (res) => { console.log(res); return await res.json() })
    return response
}

export async function registrateUser(email, login, password) {
    const response = await fetch('http://localhost:5000/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, login, password })
    }).then((res) => { console.log(res); return res })
    return response
}
