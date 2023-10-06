package main

import (
	"encoding/base64"
	"fmt"
	"image"
	"image/png"
	"io/ioutil"
	"net/http"
	"strings"
	"text/template"
)

type Page struct {
	Title string
}

func main() {
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/generator/", viewCodeHandler)
	http.HandleFunc("/upload", img2base)
	http.ListenAndServe(":8080", nil)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	p := Page{Title: "base64 To Image"}

	t, _ := template.ParseFiles("indexnew.html")
	t.Execute(w, p)
}

func viewCodeHandler(w http.ResponseWriter, r *http.Request) {
	dataString := r.FormValue("dataString")
	reader := base64.NewDecoder(base64.StdEncoding, strings.NewReader(dataString))
	m, fileType, err := image.Decode(reader)
	if err != nil {
		fmt.Println(err)
	}

	switch fileType {
	case "jpeg":
		jpeg.Encode(w, m, &jpeg.Options{95})
	default:
		png.Encode(w, m)
	}
}

func toBase64(b []byte) string {
	return base64.StdEncoding.EncodeToString(b)
}

func img2base(w http.ResponseWriter, r *http.Request) {
	file, _, err := r.FormFile("myFile")
	if err != nil {
		fmt.Println("Error Retrieving the File")
		fmt.Println(err)
		return
	}
	defer file.Close()
	fileBytes, err := ioutil.ReadAll(file)
	if err != nil {
		fmt.Println(err)
	}
	var base64Encoding string
	mimeType := http.DetectContentType(fileBytes)

	switch mimeType {
	case "image/jpeg":
		base64Encoding += ""
	case "image/png":
		base64Encoding += ""
	}

	base64Encoding += toBase64(fileBytes)
	fmt.Fprintf(w, base64Encoding)
}
