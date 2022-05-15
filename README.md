# player-APP-mobile

    Just design implementation on React.
    Design was only for one resolution - 576/1024px but i made it responsive
[DEMO](https://mtctxd.github.io/player-APP-mobile/)
## Technologies i used

    - react
    - sass
    - valtio
    - swiper
    - vite

### Dependencies

- Node v12.16.3 and higher
- NPM v6.14.4 and higher

### Installing

- Fork and clone this repository
- Run `npm install` in your terminal
- Run `npm run dev`

## Thoughts

    - maybe it would be better if I store checked characters separately
    - process and store characters as objects with id's
    - should use mapping technique on filterOptions type
    - should use styled either styled components or css modules next time

## issues / todos

- [ ] Play button is flickering due to not setting any width and height. The reason is because this 2 images have different width and height

## Q&A

-  Q: Why you using sass if you dont use variables?
-  A: Why I dod not used scss variables? Because after compiling this variable would turn into just ready property, but if i type like native css property, it would be using like native property in the browser.
So, why i did use scss in the first place? Nesting....
_____
-  Q: valtio?
-  A: yea, wanted to try some proxy-state manager package


## couple words about z-indexes

So in this page they are from 1 to 9.

1. Background
2. background gradient
4. Main page.
5. labels for icons
8. side menus
9. labels that inside side menus