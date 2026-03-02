```css
width: min(var(--max-width), 100% - (var(--padding) * 2));
```
- for font size use - clamp(1rem, 2vw + 1rem, 3rem);
- for margin and padding use - min(5em,8%) - min(fix value,relative one), otherwise use media queries also

dvh- dynamic viewport height

- set max-width: 60rem;
- set min-height:x px;

@media(min-width: 40em) { 
  :root {
    --max-width: 60rem;
    --padding: 1rem;
  }
}

outline: 4px auto -webkit-focus-ring-color;
@media (prefers-color-scheme: light)
filter: drop-shadow(0 0 2em #61dafbaa);?
drop-shadow

container class and container queries in tailwind css
prose in tailwind 


```js
<div class="grid gap-4 m-4 sm:grid-cols-12 ">
  <div class="min-h-[100px] rounded bg-orange-500 shadow-xl sm:col-span-2"></div>
  <div class="min-h-[100px] rounded bg-red-500 shadow-xl sm:col-span-10"></div>
</div>
```
```js
<div class="p-4 grid gap-4 sm:grid-cols-12 container mx-auto">
  <div class="min-h-[100px] rounded bg-orange-500 shadow-xl sm:col-span-2"></div>
  <div class="min-h-[100px] rounded bg-red-500 shadow-xl sm:col-span-10"></div>
</div>
```

[text](https://api.dicebear.com/7.x/avataaars/svg?seed=${Math.random()})