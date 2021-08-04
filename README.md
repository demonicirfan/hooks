#Doubts

###This readme contains all the important concepts and doubts that i got while studying this.

```e.target.value```
The ```e``` is the argument of an event handler you attach to a certain event on a certain component... in this case the ```onFilterTextInput``` event. Events are objects with certain properties, and ```e.target``` almost always represents a DOM element.

Thus ```e.target.value``` is the value property of some DOM element, in this case that means the text entered in the search input.