package main
import(
	"fmt"
)
func main(){
	// var a [5]int
	// a:= [5]int{1, 2, 3, 4, 5}
	a:= []int{1, 2, 3, 4, 5} //slice
	a=append(a, 13)// returns a new slice with the new element added
	fmt.Println(a)

	vertices := make(map[string]int)
	vertices["triangle"] = 3
	vertices["square"] = 4
	vertices["pentagon"] = 5
	delete(vertices, "square")// delete the key-value pair with the key "square"
	fmt.Println(vertices)
	for key, value := range vertices { // index and value
		fmt.Printf("%s has %d vertices\n", key, value)
	}
	fmt.Println("Hello, World!")
}
