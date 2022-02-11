import validWords from 'services/dictionaryService/validWords';

class DictionaryService {
  static isValidWord(word) {
    return validWords.includes(word);
  }

  static getRandomWord() {
    const index = Math.floor(Math.random() * validWords.length);
    return validWords[index];
  }
}

export default DictionaryService;
