import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateForm = ({ car, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      make: car.make,
      model: car.model,
    },
  });

  const handleFormSubmit = (data) => {
    onSubmit(data); // Pass updated data to onSubmit function from parent component
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <label>
        Make:
        <input type="text" {...register('make', { required: true })} />
      </label>
      <label>
        Model:
        <input type="text" {...register('model', { required: true })} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateForm;
