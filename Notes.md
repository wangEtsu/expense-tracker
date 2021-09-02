### Components
Components is how React work, everything is build around them
Using components achieves reusability & Separation Concerns (DRY)

### Components Are Just Functions
That Explained a lot

### Level of Components
Components have different levels, some are built into others. Usually the bottom level of components are build with default HTML tags, while components at higher level are mostly custom element <ExpenseItem></ExpenseItem>

### JSX is Just Syntax Sugar
You used to need to import react object to enable JSX syntax, its just we don't need to do it now in modern react project
JSX is more readble than HTML(Maybe), while in the React object it will be transformed to normal HTML elements

### First React Hook: useState
It register a certain props so that when it's value changed, react re-evaluate the component and thus reflect the change

### States are spearated on a component basis
I don't know what that means lol

### You Can't Skip Component When Passing Props
To pass props From App.js => NewExpense => ExpenseForm, or vice versa, you SHOULD NOT SKIP ANY ONE OF THE COMPONENT IN BETWEEN

### Controlled Component
A component that doesn't handle its own value, which are handled by its parent component: ExpenseFilter for example

### Stateful component & Stateless (Presentational / dumb) component
Stateful component: components that manage states (of others)
Stateless component: components that don't manage states, jsut for presentational use
