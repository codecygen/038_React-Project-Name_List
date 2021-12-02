Converting String to Number:
===
```
const num = '5';
console.log(typeof(+num));
// Outputs number
```

HTML attribute: for
===
The <label> tag allows you to click on the label, and it will be treated like clicking on the associated input element. There are two ways to create this association:

One way is to wrap the label element around the input element:

```
<label>Input here:
    <input type='text' name='theinput' id='theinput'>
</label>
```

The other way is to use the for attribute, giving it the ID of the associated input:

```
<label for="theinput">Input here:</label>
<input type='text' name='whatever' id='theinput'>
```

This is especially useful for use with checkboxes and buttons, since it means you can check the box by clicking on the associated text instead of having to hit the box itself.

Read more about this element in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label).

"for" attribute becomes "htmlFor" in Javascript

```
<input id="todo-0" type="checkbox" defaultChecked={true} />
<label className="todo-label" htmlFor="todo-0">
  Eat
</label>
```



Practice Project
===

In this project, I will make a simple app, where I can enter a name and age and the app will keep the entry records.

Reference .gitignore Content - React
===

This can be copied for other projects

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```