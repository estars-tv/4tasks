/**
 * @name sortArray - сортировка массивов по заданной матрице
 * @param arr {Array.<number|string|null>} - массив элементов
 * @param matrix {Array.<string>} - матрица типов
 * @returns {Array}
 */
function sortArray(arr, matrix) {
    var mask = matrix || ['number', 'string', 'object'],
        sorted = [];

    for (var i = 0; i < mask.length; i++) {
        var result = arr
            .filter(function (keyword) {
                return typeof keyword === mask[i];
            }).sort(function (a, b) {
                return a < b ? -1 : 1;
            });

        sorted = sorted.concat(result);
    }

    return sorted;
}