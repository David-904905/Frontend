import { useFormStatus } from "react-dom";

const FormButton = () => {
    const { pending } = useFormStatus();
    // useFormStatus is a react server component hook (RSC)
    // the useFormStatus tells the button if the form it's inside is currently being submitted
    // pending becomes true while the form is submitting.


    console.log(pending)
  return (
    <button type="submit" disabled={pending}>{pending? 'Submitting...' : "Submit"}</button>
  )
}

export default FormButton

// useFormStatus must be inside a component that is a decendant of a form, otherwise it won't detect the 
// submission status.


