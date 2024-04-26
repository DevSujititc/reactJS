export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/DevSujititc')
    return response.json()
}