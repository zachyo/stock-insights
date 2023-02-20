const Error = (error) => {
  return (
    <div className="error">
        {error.message}
      <h1>Failed to fetch</h1>
      <p>Kindly reload the page or check your internet connection</p>
    </div>
  );
};

export default Error;
