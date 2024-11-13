'use client';

import { useForm, SubmitHandler } from "react-hook-form"


interface Inputs {
  email: string
  password: string
}


export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="border-2 border-black" type="text" {...register("email")} />


      {/* include validation with required or other standard HTML validation rules */}
      <input className="border-2 border-black" type="text" {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}


      <input type="submit" />
    </form>
  )
}