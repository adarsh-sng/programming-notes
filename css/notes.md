- css reset
- role = "list"?
`@layer` - does so that your next layer will have higher specificity

- attribute selector is same specificity as class selector
- css -> things that come after have higher specificity
- for font size dont use `px` use `rem`.

## CSS Layers (@layer)
- **Purpose**: Organize styles into named groups to control cascade order, reducing specificity issues.
- **Syntax**: `@layer base { /* styles */ }` or declare order: `@layer reset, base, utilities;`.
- **Key Benefits**: Modularity, scalability; overrides based on layer order, not just specificity.
- **Drawbacks**: Browser support needed; adds complexity.
- **Best Practice**: Use for design systems, e.g., low-specificity utilities in higher layers.

## Importing in CSS (@import)
- **Purpose**: Modularize CSS by including external stylesheets.
- **Syntax**: `@import url("styles.css");` at file top; supports media: `@import url("print.css") print;`.
- **How It Works**: Browser fetches and inserts rules; integrates with cascade.
- **With Layers**: `@import url("file.css") layer(name);`.
- **Pros**: Reusability, organization.
- **Cons**: Performance hit from extra requests; prefer build tools for production.
- **Best Practice**: Use sparingly; opt for multiple `<link>` tags in HTML for better loading.
- **Note**: `@import` is deprecated in favor of `<link>` tags in HTML for better performance.
---
## user agent styles
- default styles applied by browsers to HTML elements, can be overridden by your own styles.

:root is a pseudoclass that matches the document's root element, typically `<html>`.

## CSS Variables.
:root{
    --color-dark:;
}

## Pseudoselectors.


## Gradeient

tolearn - linear gradient,grid,clamp,boxshadow
what is auto?

- em compounds
- for font size em sees the parent, but for margin and padding it sees the element itself(font size).
- for font use rem, for margin and padding use em.


## Fonts
@font-face{
    font-family: MyFont;
    src: url('myfont.woff2') format('woff2'),
         url('myfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap; /* Optional: controls how the font is displayed while loading */
}
body{
    font-family: MyFont, sans-serif;
}
---
## other way
@import url('https://fonts.googleapis.com/css2?family=MyFont:wght@400&display=swap'); in css

## in tailwind
@theme{
    --font-myfont: MyFont, sans-serif;
}
