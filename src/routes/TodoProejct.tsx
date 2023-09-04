import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm{
    email: string,
    password: string,
    password2: string,
    nickname?: string
}
const TodoProejct = () => {
    const { register, watch, handleSubmit, formState: {errors} } = useForm<IForm>({
        defaultValues: {
            email: 'email',
            nickname: 'nickname'
        }
    })
    
    // const {Email} = watch();
    // console.log("Email", Email)

    const onValid = (data: any) => {
        console.log("onValid", data)
    }

    


    // const [todo, setTodo] = useState('');
    // const onChnage = (e: React.FocusEvent<HTMLInputElement>) => {
    //     const {
    //         currentTarget:{value}
    //     } = e;
    //     setTodo(value);
    // }
    // const submit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log(todo)
    // }
    return <div>
        <form onSubmit={handleSubmit(onValid)}>

            <input {...register('email', {required: 'Email is Required', minLength: {
                value: 5, message: 'Your Eamil is To Short'
            },
            pattern: {
                value: /^[A-Za-z0-9._%+-]+@naver.com$/,
                message: 'Only @naver.com'
            }
            })} placeholder="Email.."/>
            <span>
                {errors?.email?.type==='required'?'required':'??'}
            </span>

            <input {...register('password', {required: true})} placeholder="Password.."/>
            <input {...register('password2', {required: true})} placeholder="Password Check.."/>
            


            <input {...register('nickname', {minLength: 10})} placeholder="Nickname.."/>

            
            
            <button>ADD</button>
        </form>
    </div>
}

export default TodoProejct;

