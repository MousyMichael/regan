let globalPassword;

async function getLocationDetails(quanity, password) {

    try {
    const req = await fetch('https://reloc.ubgpt.xyz/api/latestLocations', {
        method: 'GET',
        headers: {
            "auth": password,
            "Quanity": quanity
        }
    })

    if(req.ok) {
        return req.json()
    }

    throw new Error('An error occurered, ensure password is correct and try again.')

} catch {
    return "Error"
}

}

async function manageLocationDetails(params) {
    
}

async function login(num) {

    if(num = '1') {
        const val = document.getElementById('pw2').value
        globalPassword = val

        getLocationDetails('10', globalPassword)

    }

    if(num = '0') {
        const val = document.getElementById('pw1').value
        globalPassword = val;
    }


} 
