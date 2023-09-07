import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm{
    email: string,
    password: string,
    password2: string,
    nickname?: string, // 필수값이 아닌 경우 ? 붙여주기
    extraError?: string
}

const TodoProejct = () => {
    const { register, watch, handleSubmit, formState: {errors}, setError } = useForm<IForm>({
        defaultValues: {
            email: 'aa@naver.com',
            nickname: 'nickname'
        }
    })
    
    // const {Email} = watch(); 
    // console.log("Email", Email)

    const onValid = (data: IForm) => {
        console.log("onValid", data)
        const {password, password2} = data;
        if(password!==password2){
            setError("password", {message: "비밀번호가 다릅니다."}, {shouldFocus: true})
        }
        // setError('extraError', {message: 'Server offline'});
        
    }

    
    console.log(errors);

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
            


            <input {
                ...register('nickname', {
                    minLength: 5, 
                    validate: (value)=> !value?.includes("nico")||'??'
                })
            } placeholder="Nickname.."/>
            {/* type: validate 통과하지못해서 생김 */}
            {/* <input {
                ...register('nickname', {
                    minLength: 5, 
                    validate: {
                        noNico: value => value?.includes('nico') ? 'no nicos allowed': true,
                        noNick: value => value?.includes('nick') ? 'no nicks allowed' : true
                    }
                })
            } placeholder="Nickname.."/> */}
            
            {/* validate : { (value) => !value.includes("nico") || "error message"} */}
            
            <button>ADD</button>
        </form>
         <span>{errors?.password?.message}</span>
         <p>{errors?.extraError?.message}</p>

    </div>
}

export default TodoProejct;

