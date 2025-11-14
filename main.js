let choice = prompt("Welcome to the perimiter calculator app. \nPlease enter your choise. \n1.perimiter of a rectengle \n2.perimiter of a triangle \n3.perimiter of a circle \n4.perimiter of a parrallelogram")
//perimiter of a rectengle
if (choice == "1") {
    let l = prompt("Please enter the length:")
    let b = prompt("Please enter the breadth:")
    result = (Number(l) + Number(b) * 2)
    alert(result)
}
// perimiter of a triangle
if (choice == "2") {
    let h = prompt("Please enter the height:")
    let b = prompt("Please enter the base:")
    result =  2 * (h + b);
    alert(result)
}
// perimiter of a circle
if (choice == "3") {
    let r = prompt("Please enter the radius:")
    result = (2 * 3.14159 * r)
    alert(result)
} 
// perimiter of a parralelogram
if (choice == "4") {
    let h = prompt("Please enter the height:")
    let cb = prompt("Please enter the corresponding base:")
    result = (2 * (h + cb))
    alert(result)
}