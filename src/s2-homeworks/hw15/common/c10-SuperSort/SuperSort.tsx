import React from 'react'
import arrowDown from './icons/downarrow_121316.svg'
import arrowUp from './icons/uparrow2_89326.svg'
import arrows from './icons/list_dashes_icon_174419.svg'

// добавить в проект иконки и импортировать
const downIcon = arrowDown
const upIcon = arrowUp
const noneIcon = arrows

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    //return up // исправить
    return sort === up
        ? ""
        : sort === down
            ? up
            : down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            <img
                id={id + '-icon-' + sort}
                src={icon}
                style={{width: '10px', marginLeft: '7px'}}
            />

            {/*{icon} /!*а это убрать*!/*/}
        </span>
    )
}

export default SuperSort
