# React 19 Day Twenty Six

- React 19 includes a action property, which is used to control what happens after a form has been submitted.

- You can use the .get method on the contents of the form data, by passing the name of the input into it

``` JSX

const FormComponent = () => {
  const formAction = (formAction) => {
    firstname = formAction.get("firstname");
    console.log(firstname);
  };


  return (
    <>
      <div className="container">
        <form action={formAction}>
          <input type="text" name="firstname">
          <button type="submit">Submit</button>
        </form>
      </div>
    <>
  )
};


export default FormComponent;

```


## React 19 useActionState hook

- The useActionState hook allows you to update state based on the result of a form action.

``` TypeScript

const [state, formAction, isPending] = useActionState(fn, initialState, permalink?);

```



## React 19 useForm Hook

- 