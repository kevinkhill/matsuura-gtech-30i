# Matsuura G-Tech 30i

I really wanted to learn React & Tailwind (and Next.js along the way) so I decided to make a recreation of an actual machine panel. There is so much detail and I hope to maybe make it a functional interface for [the gcode parser project I have going](https://github.com/kevinkhill/ncstat) to be able to virtually run programs. 🤯

# Links
When visited [directly to the homepage](https://matsuura-gtech-30i.netlify.app/), the machine will be powered off. You can press (click) any of the display keys (group of 8 on the bottom right of the keyboard) to activate a screen. Screens can also be permalinked via query param as follows:

| Screen | Link |
|--------|------|
Program Page | [?screen=PROGRAM][LINK__PROGRAM_PAGE]
Position Page | [?screen=POSITION](https://matsuura-gtech-30i.netlify.app?screen=POSITION)
Offset Page | [?screen=OFFSET](https://matsuura-gtech-30i.netlify.app?screen=OFFSET)
Settings Page | [?screen=SETTINGS](https://matsuura-gtech-30i.netlify.app?screen=SETTINGS)
System Page | [?screen=SYSTEM](https://matsuura-gtech-30i.netlify.app?screen=SYSTEM)
Messages Page | [?screen=MESSAGES](https://matsuura-gtech-30i.netlify.app?screen=MESSAGES)
Graph Page | [?screen=GRAPH](https://matsuura-gtech-30i.netlify.app?screen=GRAPH)
Handyman Page (Custom 1) | [?screen=CUSTOM_1](https://matsuura-gtech-30i.netlify.app?screen=CUSTOM_1)
Webapp Settings (Custom 2) | [?screen=CUSTOM_2](https://matsuura-gtech-30i.netlify.app?screen=CUSTOM_2)

# Features so far...
 - softkey `a9` will toggle the machine controls on/off
 - the mode keys in the controls should reflect in the [program page][LINK__PROGRAM_PAGE]

# Reference Images

## Screen
[![Screen](./public/img/screen.jpg)](https://github.com/kevinkhill/matsuura-gtech-30i/blob/main/public/img/screen.jpg?raw=true)

## Keyboard
[![Keyboard](./public/img/keyboard.jpg)](https://github.com/kevinkhill/matsuura-gtech-30i/blob/main/public/img/keyboard.jpg?raw=true)

## Controls
[![Controls](./public/img/controls.jpg)](https://github.com/kevinkhill/matsuura-gtech-30i/blob/main/public/img/controls.jpg?raw=true)

[LINK__PROGRAM_PAGE]: https://matsuura-gtech-30i.netlify.app?screen=PROGRAM "Program Page"
