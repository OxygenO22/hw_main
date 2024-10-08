import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<NodeJS.Timer | undefined>(undefined);
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(true);
    useEffect(() => {}, [date]);

    const getCorrectDay = (date: Date) =>
      date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    const getCorrectMonth = (date: Date) =>
      date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;

    const getWeekDay = (date: Date) => {
      let days = [
        "Sunday", 
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thirsday", 
        "Friday", 
        "Saturday"
        ];

      return days[date.getDay()]; 
    }

    const getMonthOfYear = (date: Date) => {
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "Nowember",
        "December",
      ];

      return months[date.getMonth()];
    };

    const showTime = (date: Date) => {
        const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
        const minutes =
          date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
        const seconds =
          date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    };

    const start = () => {
      // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
      // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval) 
      setTimerId(setInterval(() => setDate(new Date()), 1000));
      setIsDisabled(!isDisabled);
    };

    const stop = () => {
      // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
      clearInterval(timerId);
      setIsDisabled(!isDisabled);
    };

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true);
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false);
    }

    const stringTime = showTime(date) || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = `${getCorrectDay(date)}.${getCorrectMonth(date)}.${date.getFullYear()}` || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = getWeekDay(date) || <br/> // пишут студенты
    const stringMonth = getMonthOfYear(date) || <br />; // пишут студенты

    return (
      <div className={s.clock}>
        <div
          id={"hw9-watch"}
          className={s.watch}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <span id={"hw9-day"}>{stringDay}</span>,{" "}
          <span id={"hw9-time"}>
            <strong>{stringTime}</strong>
          </span>
        </div>

        <div id={"hw9-more"}>
          <div className={s.more}>
            {show ? (
              <>
                <span id={"hw9-month"}>{stringMonth}</span>,{" "}
                <span id={"hw9-date"}>{stringDate}</span>
              </>
            ) : (
              <>
                <br />
              </>
            )}
          </div>
        </div>

        <div className={s.buttonsContainer}>
          <SuperButton
            id={"hw9-button-start"}
            disabled={!isDisabled} // пишут студенты // задизэйблить если таймер запущен
            onClick={start}
          >
            Start
          </SuperButton>
          <SuperButton
            id={"hw9-button-stop"}
            disabled={isDisabled} // пишут студенты // задизэйблить если таймер не запущен
            onClick={stop}
          >
            Stop
          </SuperButton>
        </div>
      </div>
    );
}

export default Clock
