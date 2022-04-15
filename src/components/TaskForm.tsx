import React, {useEffect} from 'react'
import {Path, useForm, UseFormRegister, SubmitHandler} from "react-hook-form";
import {useActions} from "../hooks/useActions";
import moment from "moment";
import {getRandomId} from "../helpers/function";

export type InputProps = {
    label: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
};

export interface IFormValues {
    id: null | string;
    name: string;
    content: string;
    category: string;
    created: string;
    dates: string;
    status: string;
}

export const TaskForm: React.FC = () => {

    const {createTaskItemAction} = useActions()

    const {register, handleSubmit, getValues, reset, formState: {errors}} = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        const a = getValues('category')
        console.log({data, a})

        createTaskItemAction({
            ...data,
            'id': getRandomId(),
            'created': moment().format('MMMM DD, YYYY'),
            'status': "active"
        })
        reset()
    };

    useEffect(() => {
        reset()
    }, [reset])

    return (
    <form className="form-inline d-flex mb-20 create-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text"
                       className="form-control"
                       placeholder="Enter name"
                       {...register("name" ,{required: true})} />
                <div className="form-error">
                    {errors['name'] && 'name is required'}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="category">Category list:</label>
                <select className="form-control" {...register("category" ,{required: true})}>
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
                    <option value="Quote">Quote</option>
                </select>
                <div className="form-error">
                    {errors['category'] && 'category is required'}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="content">Content</label>
                <input type="text"
                       className="form-control"
                       placeholder="Enter content"
                       {...register("content" ,{required: true})} />
                <div className="form-error">
                    {errors['content'] && 'content is required'}
                </div>
            </div>

            <button type="submit" id="createNote" className="btn btn-secondary create-note">Create Note</button>
    </form>
    )
}
