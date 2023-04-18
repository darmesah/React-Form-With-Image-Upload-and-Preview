import ImageUpload from "./ImageUpload/ImageUpload";

const Form = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log([e.target[0].value, e.target[1].value, e.target[2].files]);
  };

  return (
    <main>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>Title:</label>
          <br />
          <input type="text" name="name" placeholder="Project Title" />
        </div>
        <div>
          <label>Main Description:</label>
          <br />
          <input type="text" name="name" placeholder="Project Title" />
        </div>
        <ImageUpload />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Form;
