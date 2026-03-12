package main

import (
	"fmt"
	"time"
	// "sync"
)

func main(){
	// var wg sync.WaitGroup
	// wg.Add(1)
	// go func(){
	// 	defer wg.Done()
	// 	count("Sheep")
	// }()
	// wg.Wait()
	c:=make(chan string)
	go count("Sheep",c)
	// msg:=<-c // receives a message
	// for {
	//  msg,open:=<-c
	//  if(!open){
	// 	break
	//  }
	//  fmt.Println(msg) 
	// }
	for msg:=range c{
	fmt.Println(msg) 
	}	
	// go count("fish") 
}
//make this in main or seperate
func count (thing string, c chan string){
	for i :=1;i<=5;i++{
		c<-thing // sends a message
		time.Sleep(time.Millisecond * 500)
	}
	close(c) // close the channel when done 
}
// func count (thing string){
// 	for i :=1;i<=5;i++{
// 		fmt.Println(i,thing)
// 		time.Sleep(time.Millisecond * 500)
// 	}
// }

