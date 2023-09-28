import { useState } from 'react';
import { useCreateTask } from './reactQueryCustomHooks';

export const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const { isLoading, createTask } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName, {
      onSuccess: () => {
        setNewItemName('');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text'
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className='form-input'
        />
        <button type='submit' className='btn' disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
