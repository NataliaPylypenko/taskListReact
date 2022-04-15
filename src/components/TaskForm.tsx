import React from 'react'
import {Path, useForm, UseFormRegister, SubmitHandler} from "react-hook-form";
import {useActions} from "../hooks/useActions";
import moment from "moment";
import { ucFirst, getRandomId} from "../helpers/function";

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

    const {register, handleSubmit, formState: {errors}} = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {

        createTaskItemAction({
            ...data,
            'id': getRandomId(),
            'created': moment().format('MMMM DD, YYYY'),
            'status': "active"
        })
    };

    const Input = ({label, register, required}: InputProps) => (
        <div className="form-group">
            <label>{ucFirst(label)}</label>
            <input className="form-control" {...register(label, {required: true})} />
            <div className="form-error">
                {errors[label] && label + " is required"}
            </div>

        </div>
    );

    const Select = React.forwardRef<HTMLSelectElement,
        { label: string } & ReturnType<UseFormRegister<IFormValues>>>(({onChange, onBlur, name, label}, ref) => (
        <div className="form-group">
            <label>{ucFirst(label)}</label>
            <select className="form-control" name={name} ref={ref}>
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
                <option value="Quote">Quote</option>
            </select>
        </div>
    ));

    return (

        <form className="form-inline d-flex mb-20 create-form" onSubmit={handleSubmit(onSubmit)}>

            <Input label="name" register={register} required/>
            <Select label="category" {...register("category")} />
            <Input label="content" register={register} required/>

            <button type="submit" id="createNote" className="btn btn-secondary create-note">
                Create Note
            </button>
        </form>
    )
}
