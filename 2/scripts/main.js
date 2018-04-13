/**
 * @name countCharacters - метод для получения суммы символов в названиях всех столиц штатов
 * @param list {object} - список штатов
 * @returns {number}
 */
function countCharacters(list) {
    var count = 0;

    if (typeof list === 'object') {
        for (var key in list) {
            if (Object.prototype.hasOwnProperty.call(list, key)) count += list[key].length;
        }
    }

    return count;
}