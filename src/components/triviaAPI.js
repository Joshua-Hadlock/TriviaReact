export default async function getApi(category) {
    console.log(category)
    return fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`).then(result => result.json());
}