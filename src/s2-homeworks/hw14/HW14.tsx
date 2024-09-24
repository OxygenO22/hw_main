import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'
import axios from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import {useSearchParams} from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'

/*
* 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
* 2 - дописать функцию sendQuery в HW14
* 3 - дописать функцию onChangeText в HW14
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW14 в HW5/pages/JuniorPlus
* */

const getTechs = (find: string) => {
    return axios
        .get<{ techs: string[] }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test2',
            {params: {find}}
        ).then(res => res.data.techs)
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}



const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<string[]>([])
    

    const sendQuery = useDebouncedCallback((value: string) => {
      setLoading(true);
      setTechs([]);
      getTechs(value).then((res) => {
        // делает студент
        if (res) {
          setTechs(res);
          setLoading(false);
        }
        // сохранить пришедшие данные
      });
    }, 1500);

    const onChangeText = (value: string) => {
        setFind(value)
        // делает студент

        // добавить/заменить значение в квери урла
        // setSearchParams(
        setSearchParams()
        //
    }

    useEffect(() => {
      const params = Object.fromEntries(searchParams);
      sendQuery(params.find || "");
      setFind(params.find || "");
    }, []);

    const mappedTechs = techs.map(t => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
      <div id={"hw14"} className={s2.hw__wrapper}>
        <div className={s2.hwTitle}>
          <p className={s2.hwTitle__text}>Hometask № 14</p>
        </div>

        <div className={s2.hw}>
          <div className={s.tech}>
            <SuperDebouncedInput
              id={"hw14-super-debounced-input"}
              value={find}
              onChangeText={onChangeText}
              onDebouncedChange={sendQuery}
            />

            <div id={"hw14-loading"} className={s.loading}>
              {isLoading ? "...ищем" : <br />}
            </div>

            {mappedTechs}
          </div>
        </div>
      </div>
    );
}

export default HW14
