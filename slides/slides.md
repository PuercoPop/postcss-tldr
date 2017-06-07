# PostCSS tl;dr

@PuercoPop

---

# Questions?

---

# PostCSS is a

- post-processor

---

# Post-processor?

Is that like a pre-processor?

???

How does a post-processor differs from a pre-processor?

---

# A pre-processor takes any language and outputs CSS

```
    +------------------+           +------------------+
    |                  |           |                  |
    |   • SASS         |        \  |                  |
    |   • LESS         | --------> |       CSS        |
    |   • etc          |        /  |                  |
    |                  |           |                  |
    +------------------+           +------------------+
```

---

# A post-processor takes in CSS and outputs anything (including CSS).


    +------------------+           +------------------+
    |                  |           |                  |
    |                  |        \  |     • CSSS       |
    |       CSS        | --------> |     • JS         |
    |                  |        /  |     • etc        |
    |                  |           |                  |
    +------------------+           +------------------+

---

# PostCSS is a

- post-processor
- compiler

---

# PostCSS is a

- post-processor
- compiler
- everything but a compiler

???

No Analysis done, just parsing and emitting

---

# PostCSS is a

- post-processor
- compiler
- everything but a compiler
- a toolkit for processing CSS

---

# PostCSS at its core is a

- CSS Parser
- An AST for CSS
- Helpers to manipulate the AST
- A pretty-printer

---

# Value proposition

is in providing a common framework to write composable plugins to manipulate CSS as one sees fit.

---

# There are plugins for

- Variable interpolation
- Vendor Prefixes
- CSS modules
- etc (http://postcss.parts/)

---

# So what is an AST?

???

Abstract syntax tree

---


# Why abstract syntax?

var x = 1

var    x    = 1;

maps to the same AST

---

# Code as Data

Because it presents the code as a data structure it is easier to modify than code as text.

---

# PostCSS Nodes

- Root
- Rule
- Declaration

---

# Root

The root node represents a CSS file and contains all its parsed nodes.

---

# Rule

Represents a CSS rule: a selector followed by a declaration block.
Has 'selectors' and 'declarations' as attributes.

---

# Declaration

color: black;

---

# JSON


{
  "type"  : "declaration",
  "prop"  : "color,
  "value" : "black",
}

---

# AST Explorer


We can inspect what AST a CSS file maps in http://astexplorer.net/#/2uBU1BLuJ1

---

# What are AST Walkers

They abstract the details of walking through the graph for us

---

# Examples

- walkDeclarations
- walkRules
- …

---

# PostCSS helpers

to modify the AST

- append
- insertAfter
- clone

---

# Show me the Code

We have two simple plugins demonstrate PostCSS in use:

- variable interpolation
- vendor prefixes
