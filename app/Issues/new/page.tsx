  'use client';

import { TextField, Button, Callout } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import axios from 'axios';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import "easymde/dist/easymde.min.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';


interface IssueForm {
  title: string;
  description: string;
}


const NewIssuePage = () => {

  const router = useRouter();
  const [error, setError] =useState('');
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
      <div className='max-w-xl'>
        {error && <Callout.Root color="red" className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root> }
    <form
      className=' space-y-3'
       onSubmit={handleSubmit(async (data) => {
        try {

            await axios.post('/api/issues', data);
            router.push('/Issues');
        } catch (error) {
            setError("error occurred try again");
        }
      })
    }
    >
      <TextField.Root>
        <TextField.Input placeholder="Title..." {...register('title')} />
      </TextField.Root>
      {typeof window !== 'undefined' && (
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder='Description...' onChange={field.onChange} value={field.value} />
          )}
        />
      )}
      <Button>Submit New Issue</Button>
    </form>
    </div>
  );
};

export default NewIssuePage;