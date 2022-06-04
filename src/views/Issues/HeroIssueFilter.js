
const processText = (text) => {
    let newText = text.toLowerCase()
    newText = newText.replace(/-/g, " ");
    return newText
}


const FetchIssuesRelatedtoHero = (issues, hero) => {
    let heroName = processText(hero.localized_name);

    return issues.filter((issue)=>{
        let issueText = processText(
            issue.title + ". " + issue.body 
        )
        return issueText.includes(heroName + ( heroName == "io" ? " ":""))
    })
}

export default FetchIssuesRelatedtoHero