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

    throw new Error('Something went wrong, client')

} catch {
    return "Error"
}

}

async function manageLocationDetails(params) {
    
}
