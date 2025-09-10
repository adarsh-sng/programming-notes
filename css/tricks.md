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