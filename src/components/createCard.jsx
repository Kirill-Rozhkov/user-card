import React, { useEffect, useState } from "react"
import TextField from "./textField"
import { useHistory, Link } from "react-router-dom"
import { validator } from "../utils/validator"

const CreateCard = () => {
    localStorage.setItem("data", "")
    const [data, setData] = useState({
        name: "",
        surname: "",
        ageBearn: "",
        cv: ""
    })
    const [errors, setErrors] = useState({})
    const validatorConfig = {
        name: {
            isRequied: {
                message: "Поле обязательно для заполнения"
            },
            isSumbol: {
                message: "В поле не должно быть символов"
            }
        },
        surname: {
            isRequied: {
                message: "Поле обязательно для заполнения"
            },
            isSumbol: {
                message: "В поле не должно быть символов"
            }
        },
        ageBearn: {
            isRequied: {
                message: "Поле обязательно для заполнения"
            },
            isPast: {
                message: "Год рождения не может быть больше, чем текущий год"
            },
            isNotNumber: {
                message: "В поле должны быть только числа"
            }
        },
        cv: {
            isRequied: {
                message: "Поле обязательно для заполнения"
            },
            isUrl: {
                message: "Данные в поле должны быть написаны верно"
            }
        }
    }
    const history = useHistory()
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }
    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (isValid) {
            history.push("/")
            const dataToStore = data
            localStorage.setItem("data", JSON.stringify(dataToStore))
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-mb-6 offset-mb-3 shadow p-4">
                    <h1 className="mb-4">Создать</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label={"Имя"}
                            name={"name"}
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <TextField
                            label={"Фамилия"}
                            name={"surname"}
                            value={data.surname}
                            onChange={handleChange}
                            error={errors.surname}
                        />
                        <TextField
                            label={"Год рождения"}
                            name={"ageBearn"}
                            value={data.ageBearn}
                            onChange={handleChange}
                            error={errors.ageBearn}
                        />
                        <TextField
                            label={"Портфолио"}
                            name={"cv"}
                            value={data.cv}
                            onChange={handleChange}
                            error={errors.cv}
                        />
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto"
                        >
                            Создать
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateCard
