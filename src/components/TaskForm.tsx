import React, {useEffect} from 'react'
import {useForm, SubmitHandler} from "react-hook-form";
import {useActions} from "../hooks/useActions";
import moment from "moment";
import {getRandomId} from "../helpers/function";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IFormValues} from "../types/task";
import {STATUS} from "../redux/db";


export const TaskForm: React.FC = () => {

    const {currentTask} = useTypedSelector(state => state)
    const {createTaskItemAction, updateTaskItemAction} = useActions()
    const {register, handleSubmit, setValue, reset, formState: {errors}} = useForm<IFormValues>();

    const onSubmit: SubmitHandler<IFormValues> = data => {
        if(currentTask?.id){
            updateTaskItemAction({...currentTask, ...data})
        }else {
            createTaskItemAction({
                ...data,
                'id': getRandomId(),
                'created': moment().format('MMMM DD, YYYY'),
                'status': STATUS.ACTIVE
            })
        }

        reset()
    };
    useEffect(() => {
        reset()
        if (currentTask?.id) {
            setValue('name', currentTask.name);
            setValue('category', currentTask.category);
            setValue('content', currentTask.content);
        }
    }, [reset, currentTask, setValue])


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

            <button type="submit" id="createNote" className="btn btn-secondary create-note">{currentTask?.id ? 'Edit' : 'Create'} Note</button>
    </form>
    )
}
