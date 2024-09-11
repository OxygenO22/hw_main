import React, { ChangeEvent, useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2', [0, 100]))

    const change = (event: any) => {
      // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
      setValue1(+event.target.value);
      setValue2(value2.map((el, i) => (i === 0 ? (el = value1) : el)));
    };

    const change2 = (event: any) => {
      // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
      setValue1(+event.target.value[0]);
      setValue2(
        value2.map((el, i) =>
          i === 0
            ? (el = +event.target.value[0])
            : (el = +event.target.value[1])
        )
      );
    };

    return (
      <div id={"hw11"} className={s2.hw__wrapper}>
        <div className={s2.hwTitle}>
          <p className={s2.hwTitle__text}>Hometask № 11</p>
        </div>

        <div className={s2.hw}>
          <div className={s.container}>
            <div className={s.wrapper}>
              <span id={"hw11-value"} className={s.number}>
                {value1}
              </span>
              <SuperRange
                id={"hw11-single-slider"}
                step={1}
                min={0}
                max={100}
                value={value1}
                onChange={change}
                // сделать так чтоб value1 изменялось // пишет студент
              />
            </div>
            <div className={s.wrapper}>
              <span id={"hw11-value-1"} className={s.number}>
                {value1}
              </span>
              <SuperRange
                id={"hw11-double-slider"}
                // сделать так чтоб value1/2 изменялось // пишет студент
                step={1}
                min={0}
                max={100}
                value={value2}
                onChange={change2}
              />
              <span id={"hw11-value-2"} className={s.number}>
                {value2[1]}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HW11
