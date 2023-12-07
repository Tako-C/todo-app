let count = localStorage.getItem("counter")
if (count === null) {
    localStorage.setItem("counter",1)  
} else{
    localStorage.setItem("counter", ++count)
    alert(localStorage.getItem("counter"))
}