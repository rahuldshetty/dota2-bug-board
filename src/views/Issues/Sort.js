
export const SortByName = (heros) => {
    return heros.sort(
        (a,b)=>{
            return a.localized_name.localeCompare(b.localized_name)
        }
    )
}