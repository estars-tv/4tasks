var env;

beforeEach(function () {
    env = new jasmine.Env();
});

describe('Доступность методов', function () {
    it('countCharacters подключен', function () {
        expect(countCharacters).toBeDefined();
    });
});

describe('Проверка возвращаемого результата', function () {
    it('При передаче списка {\n' +
        '    \'Киевская область\': \'Киев\',\n' +
        '    \'Полтавская область\': \'Полтава\',\n' +
        '    \'Харьковская область\': \'Харьков\'\n' +
        '} возвращаемая функцией сумма символов в названиях всех областных центров равна 18', function () {
        expect(countCharacters({
            'Киевская область': 'Киев',
            'Полтавская область': 'Полтава',
            'Харьковская область': 'Харьков'
        })).toEqual(18);
    });
});

describe('Ошибки', function () {
    it('При передаче в функцию не объекта она возвращает 0', function () {
        expect(countCharacters(3)).toEqual(0);
    });

    it('При вызове функции без аргументов она возвращает 0', function () {
        expect(countCharacters()).toEqual(0);
    });
});