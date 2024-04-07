import React from 'react';
import { useForm } from 'react-hook-form';

const CarForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data); // Pass form data to onSubmit function from parent component
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default CarForm;
