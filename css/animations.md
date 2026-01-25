```css
  transform: translate(x, y);
transform: translateX(value);
transform: translateY(value);

transform: scale(x, y);
transform: scaleX(value);
transform: scaleY(value);

transform: rotate(angle);

transform: skew(x-angle, y-angle);

transform: matrix(a, b, c, d, e, f); /* rarely used */

```

### transition
```css
transition: property duration timing-function delay;
transition-property: all | specific properties;
transition-duration: time;
transition-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(n, n, n, n);
transition-delay: time;
```
### animation
```css
@keyframes animation-name {
  0% { /* starting styles */ }
  100% { /* ending styles */ }
} 
animation: name duration timing-function delay iteration-count direction fill-mode;
animation-name: name;
animation-duration: time;
animation-timing-function: ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(n, n, n, n);
animation-delay: time;
animation-iteration-count: number | infinite;
animation-direction: normal | reverse | alternate | alternate-reverse;
animation-fill-mode: none | forwards | backwards | both;

@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}

.ball {
  animation: bounce 0.8s ease-in-out infinite;
}

```
