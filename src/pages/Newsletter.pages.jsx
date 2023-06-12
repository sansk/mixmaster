export const Newsletter = () => {
  return (
    <form className="form">
      <h4 style={{ marginBottom: "1rem" }}>Our Newsletter</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          first name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="John"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last Name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="Doe"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          last Name
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          defaultValue="john.doe@test.com"
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};
