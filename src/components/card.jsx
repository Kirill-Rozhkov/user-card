import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Card = () => {
    const [cardParams, setCardParams] = useState(undefined)
    const [year, setYear] = useState(0)
    const date = new Date()
    const thisYear = date.getFullYear()
    useEffect(() => {
        const info = localStorage.getItem("data")
        if (info) {
            setCardParams(JSON.parse(info))
        }
    }, [])
    useEffect(() => {
        if (cardParams) {
            const date = new Date()
            const year = date.getFullYear()
            setYear(year - cardParams.ageBearn)
        }
    }, [cardParams])

    return (
        <div>
            <h1>Карточка студента</h1>
            {cardParams ? (
                <div>
                    <h5>
                        <b>Имя: </b> {cardParams.name}
                    </h5>
                    <h5>
                        <b>Фамилия: </b>
                        {cardParams.surname}
                    </h5>
                    <h5>
                        <b>Год рождения: </b>
                        {`${thisYear - year} (${year} ${
                            Math.floor(year % 10) === 1
                                ? "год"
                                : Math.floor(year % 10) > 1 &&
                                  Math.floor(year % 10) < 5
                                ? "года"
                                : Math.floor(year % 10) > 4 && "лет"
                        })`}
                    </h5>
                    <h5>
                        <b>Портфолио: </b>
                        <a href={cardParams.cv}>{cardParams.cv}</a>
                    </h5>
                    <Link to={"/createCard"} className="btn btn-primary mt-1">
                        Редактировать
                    </Link>
                </div>
            ) : (
                <div>
                    <h3>Нет данных</h3>
                    <Link to={"/createCard"} className="btn btn-primary">
                        Добавить
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Card
