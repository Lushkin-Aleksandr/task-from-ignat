import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = `${s.input} ${error ? s.error : ''}` // need to fix with (?:)

    return (
        <div className={s.addUser} >
            <div className={s.inputWrapper}>
                <SuperInputText value={name} onChange={setNameCallback} error={error}/>
            </div>
            <SuperButton className={s.addUserBtn} onClick={addUser} disabled={!name}>add</SuperButton>
            <span className={s.totalUsers}>{totalUsers}</span>
        </div>
    )
}

export default Greeting
