# Framer Motion

- values can only be animated between two of the same type.
- motion components can animate every transform axis independently.

## Transform Origin

- transform-origin has three shortcut values that can be set and animated individually.

  1. originX
  2. originY
  3. originZ

## Transitions

- you can define your own animations via the transition property

```javascript
<motion.div
  animate={{ x: 100 }}
  transition={{ ease: "easeOut", duration: 2 }}
/>
```

Jesus and wisdom 5 and 6 John chapter 7, John chapter 7, the people saying that the scripture says that the messiah is going to be a descendant of David. Does that mean that the LORD and saviour Jesus Christ was not a descendant of David, because they knew him well, remember when they said is this not Jesus who's mother and father we know, that means they knew his heritage.

Do more research on this. A prophet does not come out of galilee.

If one that is not rid of sin is not deserving to cast judgement, that means the judges themselves are not fit to send people to jail, cause they themselves partake in sin. I am curious as to how that works.

They did not know where Jesus was from, this is contradictory John 9

If you were blind, you will not be guilty of sin, but now that you claim you can see, your sins remain, what was Jesus refering to here, does he mean that if you were not aware of him, you will not be guilty of sin, but now that you are, and you still engage in sin, your sin remains.

You cannot say if someone is healed, that the healing was done by a demond, in the Holy Bible, in John Chapter 10, when the people were torn on whether Christ was a demond or not, people argued that a demond cannot raise someone from the dead.

The devil cannot give good. The works of his hands are always evil. Or can the devil heal that person, knowing full well that it will lead others astray, but if he does that will it not be going against his kingdom, surely if the persons blindness was caused by a spirit, the spirit is part of the devils kingdom, and now the devil casting that spirit out is it not going against his kingdom? 

Remember when Jesus casted out the demonds into the pigs, a situation like that would have been a kingdom being divided against itself.

John 11 is where the phrase Jesus wept was taken from.

Caiaphas


## Enter animations

- You can use the initial property to specify what an animation will do at its entry point

```javascript

<motion.li
  initial={{ opacity: 0, scale: 0 }}
  animate={{ opacity: 1, scale: 1 }}
>

```

## Exit animations

- You can also easily animate elements as they exit the DOM. In React, when a component is removed, it;s usually removed instantly. Motion provides the AnimatePresence component which keeps elements in the DOM while they perform an exit animation.

```javascript


<AnimatePresence>
  {isVisible && (
    <motion.div
      key='modal'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
  )}
</AnimatePresence>


```

## Keyframes

- Values in animate can be set as a series of keyframes. This will animate through each value in sequence.

``` javascript

<motion.div animate={{ x: [0, 100, 0] }} />

```

- 