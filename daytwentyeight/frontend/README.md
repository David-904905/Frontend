# Day Twenty Eight React

- for draggable, make use of beautiful dnd


``` bash


npm i react-beautifyl-dnd



```

- I stopped at 13:00:00


# Work with cloudinary to handle static files.

- should we have like a chat room, or something?

- groups for a particular topic?

- The user should be able to start a study session, which will lock all other functionalities except note, tasks, and books until that study session ends.


# Random stuff I just discovered

- Selenophile: A person who is fascinated by the moon.

- Nyctophile: A person who loves or is fascinated by the night and darkness. It means a strong preference for the night or darkness.

- felinophile: A person who likes cats.


# CSS stuff

- The transform-origin property is used to set the point around which a CSS transformation is applied. For example, when performing a rotate, the transform origin determins around which point the element is rotated.

``` CSS

.some-class
{
    transform-origin: 0% 0%;
}

```

- To target the second element with the same css class or selector, you use the nth-of-type selector.

``` CSS

.line:nth-of-type(2)
{
    transfor: rotate(60deg);
}

```


## Keyframes

- @keyframes at-rule is used to define the flow of a CSS animation. Within the @keyframes rule, you can create selectors for specific points in the animation sequence, such as 0%, 25%, and use 'from' and 'to' to define the start and end of the sequence.

- @keyframes rules require a name to be assigned to them, which you use in other rules to reference. e.g @keyframes freeCodeCamp {} would be named freeCodeCamp.


``` CSS

@keyframes animationName
{
    0% {
        background: red;
    }
}


```

- The animation-name property is used to link a @keyframes rule to a CSS selector. The value of this property should match the name of the @keyframes rule.

- The animation-duration property is used to set how long the animation should sequence to complete. The time should be specified in either seconds (s) or milliseconds (ms).

- The animation-iteration-count property sets how many times your animation should repeat. This can be set to a number, or to infinite to indefinitely repeat the animation.

- The animation-timing-function property sets how the animation should progress over time. There are few diferent values for this property.

``` CSS

.animate-me
{
    animation-name: animationName;
    animation-duration: 0.2s;
    animation-iteration-count: 2;
}


```

- Find your pdf's in a centralised place, sorted acording to groups and relevance, so that you dont have to look for different pdf's or do that manually. create an environment such that you can study, take notes and stuff like that. 

- Find a way so you can open a browser window inside the application so the user can perform research, or choose an AI model that was built for research and answering questions.

- Build a chrome extension. Project