var env;

beforeEach(function () {
    env = new jasmine.Env();
});

describe('Доступность методов', function () {
    it('extractEmails подключен', function () {
        expect(extractEmails).toBeDefined();
    });
});

describe('Проверка возвращаемого результата', function () {
    it('С массива [\'asdasdasdads\', \'21221@ii.oo sd asdsadasd asdsdas 44sadas@ii.com\', \'asd asdas asd asd\', \'a12@ii.oo asddas\'] ' +
        'функция вернула массив почтовых адресов ', function () {
        expect(extractEmails(['asdasdasdads', '21221@ii.oo sd asdsadasd asdsdas 44sadas@ii.com', 'asd asdas asd asd', 'a12@ii.oo asddas'])).toEqual(["21221@ii.oo", "44sadas@ii.com", "a12@ii.oo"]);
    });
});

describe('Ошибки', function () {
    it('Без передачи параметров вызывается ошибка Cannot read property \'length\' of undefined', function () {
        expect(function() {extractEmails();}).toThrowError('Cannot read property \'length\' of undefined');
    });

    it('При передаче не массива возвращается пустой массив', function () {
        expect(extractEmails(3)).toEqual([]);
    });
});