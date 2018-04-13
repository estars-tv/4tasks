var env;

beforeEach(function () {
    env = new jasmine.Env();
});

describe('Доступность методов', function () {
    it('CalculateArea подключен', function () {
        expect(calculateArea).toBeDefined();
    });

    it('Метод rectangle доступен', function () {
        expect(calculateArea.rectangle).toBeDefined();
    });

    it('Метод triangle доступен', function () {
        expect(calculateArea.triangle).toBeDefined();
    });

    it('Метод circle доступен', function () {
        expect(calculateArea.circle).toBeDefined();
    });
});

describe('Проверка возвращаемого результата', function () {
    it('Площадь прямоугольника со сторонами 2 и 4 равна 8', function () {
        expect(calculateArea.rectangle(2, 4)).toEqual(8);
    });

    it('Площадь треугольника с основой 2 и высотой 5 равна 5', function () {
        expect(calculateArea.triangle(2, 5)).toEqual(5);
    });

    it('Площадь круга с радиусом 3 равна 28.274333882308138', function () {
        expect(calculateArea.circle(3)).toEqual(28.274333882308138);
    });

    it('При передачи строки "строка" в метод circle он вернул NaN', function () {
        expect(calculateArea.circle('строка')).toEqual(NaN);
    });

    it('При передачи строки "строка" и числа 3 в метод triangle он вернул NaN', function () {
        expect(calculateArea.triangle('строка', 3)).toEqual(NaN);
    });

    it('При вызове функии rectangle без параметров она возвращает NaN', function () {
        expect(calculateArea.rectangle()).toEqual(NaN);
    });
});