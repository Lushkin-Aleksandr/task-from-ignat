import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: any // need to fix any
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = `${s.input} ${error ? s.error : ''}` // need to fix with (?:)

    return (
        <div className={s.addUser} >
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.addUserBtn} onClick={addUser} disabled={!name}>add</button>
            <span className={s.totalUsers}>{totalUsers}</span>
            {error && <div><span className={s.errorText}>{error}</span></div>}
        </div>
    )
}

export default Greeting
