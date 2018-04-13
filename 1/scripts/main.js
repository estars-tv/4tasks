/**
 * calculateArea - методы для вычисления площади фигур
 * @type {{rectangle: rectangle, triangle: triangle, circle: circle}}
 */
var calculateArea = {
    /**
     * @name rectangle - метод возвращающий площадь прямоугольника
     * @param width {number} - ширина
     * @param height {number} - высота
     * @returns {number}
     */
    rectangle: function (width, height) {
        return width * height;
    },
    /**
     * @name triangle - метод возвращающий площадь треугольника
     * @param base {number} - основа
     * @param height {number} - высота
     * @returns {number}
     */
    triangle: function (base, height) {
        return base * height / 2;
    },
    /**
     * @name circle - метод возвращающий площадь круга
     * @param radius {number} - радиус
     * @returns {number}
     */
    circle: function (radius) {
        return Math.PI * Math.pow(radius, 2);
    }
};