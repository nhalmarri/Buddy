function Input({ title, description }) {
  return (
    <div className="flex justify-center ">
      <h1 className="w-[25%]">{title}</h1>
      <input
        // id={id}
        description={description}
        // onChange={onChange}
        className="w-[70%] border pl-2 border-black rounded-md"
        placeholder={title}
      />
    </div>
  );
}

export default Input;
