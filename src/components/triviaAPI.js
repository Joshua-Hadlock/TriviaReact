// ----------------------------------------------------------------accesses the API


export default async function getApi(category, number, difficulty) {
    return fetch(`https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}&type=multiple`).then(result => result.json());
}