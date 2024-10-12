import React from 'react'
import upActive from '../../icons/upActive.svg'
import downActive from '../../icons/downActive.svg'
import noSort from '../../icons/up.svg'
import noSortDown from '../../icons/down.svg'
import s from '../../HW15.module.css'

// добавить в проект иконки и импортировать
const downIcon = downActive;
const upIcon = upActive;
const noneIcon = noSort;
const noneIconDown = noSortDown;

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

    return sort === ""
      ? up
      : sort.startsWith("1")
      ? down
      : sort.startsWith("0") ? '' : ''
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '1' + value
    const down = '0' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
      <span id={id + "-sort-" + value} onClick={onChangeCallback} className={s.sortButton}>
        <img id={id + "-icon-" + sort} src={icon} />
        {icon === noneIcon && (
          <img id={id + "-icon-" + sort} src={noneIconDown} />
        )}
      </span>
    );
}

export default SuperSort 
