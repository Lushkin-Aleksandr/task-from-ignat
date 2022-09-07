import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: Dispatch<SetStateAction<FilterType>>
    filter: FilterType
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all');
    }
    const setHigh = () => {
        props.setFilter('high');
    }
    const setMiddle = () => {
        props.setFilter('middle');
    }
    const setLow = () => {
        props.setFilter('low');
    }


    return (
        <div className={styles.affairs}>

            <div className={styles.container}>
                <div className={styles.affairsItems}>
                    {mappedAffairs}
                </div>

                <div className={styles.filterBtns}>
                    <SuperButton className={`${styles.filterBtn} ${props.filter === 'all' ? styles.active : ''}`} onClick={setAll}>All</SuperButton>
                    <SuperButton className={`${styles.filterBtn} ${props.filter === 'high' ? styles.active : ''}`} onClick={setHigh}>High</SuperButton>
                    <SuperButton className={`${styles.filterBtn} ${props.filter === 'middle' ? styles.active : ''}`} onClick={setMiddle}>Middle</SuperButton>
                    <SuperButton className={`${styles.filterBtn} ${props.filter === 'low' ? styles.active : ''}`} onClick={setLow}>Low</SuperButton>
                </div>
            </div>
        </div>
    )
}

export default Affairs
