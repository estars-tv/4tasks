var env;

beforeEach(function () {
    env = new jasmine.Env();
});

describe('Доступность методов', function () {
    it('sortArray подключен', function () {
        expect(sortArray).toBeDefined();
    });
});

describe('Проверка возвращаемого результата', function () {
    it('Функция отсортировала массив [11, 0, \'asd\', null, 3, null, \'3zxx\', \'Asd\', \'a\', null, 4, \'5A,\', \'dd2\', 7, null]' +
        ' и вернула [0, 3, 4, 7, 11, "3zxx", "5A,", "Asd", "a", "asd", "dd2", null, null, null, null] (без передачи матрицы)', function () {
        expect(sortArray([11, 0, 'asd', null, 3, null, '3zxx', 'Asd', 'a', null, 4, '5A,', 'dd2', 7, null]))
            .toEqual([0, 3, 4, 7, 11, "3zxx", "5A,", "Asd", "a", "asd", "dd2", null, null, null, null]);
    });

    it('Функция отсортировала массив [null, 3, 1, \'3zxx\', \'a\', null] и вернула ["3zxx", "a", null, null, 1, 3] ' +
        'c матрицей [\'string\', \'object\', \'number\']', function () {
        expect(sortArray([null, 3, 1, '3zxx', 'a', null], ['string', 'object', 'number']))
            .toEqual(["3zxx", "a", null, null, 1, 3]);
    });
});

describe('Ошибки', function () {
    it('Без передачи параметров вызывается ошибка Cannot read property \'filter\' of undefined', function () {
        expect(function() {sortArray();}).toThrowError('Cannot read property \'filter\' of undefined');
    });

    it('При передаче не массива первым аргументом вызывается ошибка arr.filter is not a function', function () {
        expect(function() {sortArray(3);}).toThrowError('arr.filter is not a function');
    });

    it('При передаче не массива во втором аргументе возвращается пустой массив', function () {
        expect(sortArray([null, 3, 1, '3zxx', 'a', null], 3)).toEqual([]);
    });
});