export default async function getApi() {
    return fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple').then(result => result.json());
}