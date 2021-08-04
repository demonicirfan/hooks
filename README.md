<h1>Concepts</h1>

This readme contains all the important concepts and doubts that i got while studying this.

**useState Hook** 🦉
- The ```useState``` hook lets you add stat to functional components.
- In classes, the state is always an object.
- With the ```useState``` hook, the state doesn't have to be an object.
- The ```useState``` hook returns an array with 2 elements.
- The first element is the current balue of the state, and the second element is a state setter function.
- New state value depends on the previous state value? You can pass a funciton to the setter function.
- When dealing with objects or arrays, always make sure to spread your state bariable and then call the setter function.


>```e.target.value```


The ```e``` is the argument of an event handler you attach to a certain event on a certain component... in this case the ```onChange``` event in HookCounter3.js file. Events are objects with certain properties, and ```e.target``` almost always represents a DOM element.

Thus ```e.target.value``` is the value property of some DOM element, in this case that means the text entered in the input.


> ``` js
> onChange={(event) => setName({...name, lastName: event.target.value })} 
> ```
The ```setName``` function provided by ```useState``` hook does not automatically merge an update objects we have to manually update and pass theme.

##useEffect Hook 🤖
- The effect hook lets you perform side effects in functional components.
- The perameter inside ```useEffect``` is a function which gets executed after every render
- For conditional executing an effect we use second parameter