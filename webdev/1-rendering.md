# TOC
---

## rendering on the web

- 1 DNS lookup: The browser perform a DNS lookup to convert the human-readable web address into an ip adress that computers can understand.
- 2 HTTP Request: The browser sends an HTTP(or HTTPS) request to the server where the web page is hosted, asking for the web pages's resources. the server responds with the requested resources, such as HTML, CSS, and JavaScript files, images and other media.

- 3 Rendering Page: the browser starts parsing the html document, creating a DOM(Document object model) tree that represents the structure of the web page, parsing cSS executing javascript etc. 
--> the page is fully rendered.

---

## key metrics

- **Time to First Byte (TTFB)**: The time it takes for the browser to receive the first byte of data from the server after making a request. It measures the responsiveness of the server.
- **First Contentful Paint (FCP)**: The time it takes for the browser to render the first piece of content (text, image, etc.) on the screen. It indicates how quickly the user can see something on the page.
- **Largest Contentful Paint (LCP)**: is one of the three core web vitals metrics, and it represents how quickly the main content of a web page is loaded. Specifivally, LCP measures the time from when the user initiates loading the page until the largest image or text block is rendered within the viewport.
- **Total Blocking Time (TBT)**: The total time during which the main thread is blocked and unable to respond to user input. It measures the responsiveness of the page during loading.
[image](./asset/rendering.png)

- when rendering occurs on the client side(eg on the browser), we call it client side rendering(csr). when it occurs on the server side, we call it server side rendering(ssr).when the rendering process occures partially on both sides, we call it hybrid rendering.

- in the case of ssr we send the client completely or partially ready to display html pages.
- in the case of csr we send the client a bare minimum html page with js and css files, and the browser renders the page by executing the js code.
