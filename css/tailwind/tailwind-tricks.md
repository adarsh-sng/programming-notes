mask-r-from-50%
mask-l-from-50%

const handleThemeChange = () => {
const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
document.documentElement.classList.toggle("dark");
localStorage.setItem("theme-myproject", currentTheme);
}

[background-image:radial-gradient(#000000_1px,transparent_1px);background-size:10px_10px;]
 [background-image:radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px] //correct tailwind syntax

 animate-gradient-xy?

perspective-distant transform-3d

//css
.container {
grid-template-columns: repeat(3, 1fr); /_ Desktop _/
}

grid grid-cols-3
col-span-2
grid-cols-[250px_1fr]

auto-rows-[200px]

// grid stack

<div class="grid">
  <img src="mountain.jpg" class="col-start-1 row-start-1 w-full" />
  
  <div class="col-start-1 row-start-1 bg-black/50"></div>
  
  <div class="col-start-1 row-start-1 self-center justify-self-center text-white font-bold">
    Welcome to the Mountain
  </div>
</div>


Force Row 1	grid-row-start: 1;	row-start-1
Force Col 1	grid-column-start: 1;	col-start-1
Vertical Align	align-self: end;	self-end
Horizontal Align	justify-self: end;	justify-self-end
Center Both	place-self: center;	place-self-center

backdrop-blur-md

tracking-tight leading-tight

bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400
selection:text-white 

focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500

placeholder:text-neutral-500

---
animate-spin
[background-image:conic-gradient(at_center,transparent,var(--color-blue-500)_20%,transparent_30%);] scale-[1.4]
---

@ theme {
--color-primary: #1DA1F2;
--color-primary-dark: #0d8ddb;
--shadow-primary: rgba(29, 161, 242, 0.4);
--font-sans: "Inter", sans-serif;
--spacing-custom: 1.25rem;
}

---
group/foo
group/foo-hover:bg-gray-200

---
