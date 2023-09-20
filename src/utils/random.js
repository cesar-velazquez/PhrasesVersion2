export const getRandom = (list) => {
    const randomIndex = Math.floor(Math.random() * list.length)
    return list[randomIndex]
}  