import FetchIssuesRelatedtoHero  from "./HeroIssueFilter"

const processText = (text) => {
    let newText = text.toLowerCase()
    newText = newText.replace(/-/g, " ");
    return newText
}

export const SortByName = (heros) => {
    return heros.sort(
        (a,b)=>{
            return a.localized_name.localeCompare(b.localized_name)
        }
    )
}



export const SortByIssueCount = (heros, issues) => {
    let heros_list = []
    for(let i=0;i<heros.length;i++){
        let hero = {...(heros[i])}
        const issueCount = FetchIssuesRelatedtoHero(issues, hero).length
        hero.issueCount = issueCount
        heros_list.push(hero)
    }

    return heros_list.sort(
        (a,b)=>{
            return b.issueCount - a.issueCount 
        }
    )
}

export const FilterBySearchText = (heros, text) => {
    if(text == ""){
        return heros
    }
    const searchText = processText(text)

    let heros_list = []
    for(let i=0;i<heros.length;i++){
        let hero = {...(heros[i])}
        
        const heroName = processText(hero.localized_name)

        if (heroName.includes(searchText)){
            heros_list.push(hero)
        }
    }

    return heros_list
}