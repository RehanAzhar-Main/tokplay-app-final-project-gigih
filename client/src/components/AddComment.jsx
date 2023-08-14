import { useForm } from "react-hook-form";
import axios from 'axios';

export default function AddComment({id}){
    const { register, handleSubmit } = useForm();
    const handleRegistration = async(data) => {
        console.log("id : ",data.video_id)
        console.log(data)

        console.log(data.username)
        console.log(data.comment)

        await axios.post('http://localhost:3000/video/submit', {
            video_id: data.video_id,
            comment: data.comment,
            username: data.username,
            timestamp: "2023-07-02T05:30:00.000+00:00"
        })
    };

    return (
        <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
            <input type="hidden" name="video_id" value={id} {...register('video_id')} />
        </div>
        <div>
          <label>Username</label>
          <input name="username" {...register('username')} />
        </div>
        <div>
          <label>comment</label>
          <input type="textarea" name="comment" {...register('comment')} />
        </div>
        <button>Submit</button>
      </form>
    )
}