radius = prompt("1.Укажите радиус окружности")
console.log(radius)
alert(`Площадь окружности ≈ ${Math.round(Math.PI*radius**2)}`)


gb  = prompt("2.Укажите объем вашей флешки в Гб")
console.log(gb)
// 1гб - 1024мб
alert(`На вашу флешку поместится ${Math.round(1024 * gb / 820)} файлов размером 820мб`)
