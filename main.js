let choice = prompt("Welcome to the area calculator app. \nPlease enter your choise. \n1.Area of a rectengle \n2.Area of a triangle \n3.Area of a circle \n4.Area of a parrallelogram")
//Area of a rectengle
if (choice == "1") {
    let l = prompt("Please enter the length:")
    let b = prompt("Please enter the breadth:")
    result = (Number(l) * Number(b))
    alert(result)
}
// Area of a triangle
if (choice == "2") {
    let h = prompt("Please enter the height:")
    let b = prompt("Please enter the base:")
    result = (Number(h) * Number(b) / 2)
    alert(result)
}
// Area of a circle
if (choice == "3") {
    let r = prompt("Please enter the radius:")
    result = (3.14159 * Number(r) ** 2)
    alert(result)
}
// Area of a parralelogram
if (choice == "4") {
    let h = prompt("Please enter the height:")
    let cb = prompt("Please enter the corresponding base:")
    result = (Number(h) * Number(cb))
    alert(result)
}