import errorImage from "../images/404.jpg";

const Error404 = () => {
  return (
    <div class="outer-container">
      <div class="inner-container">
        <main>
          <div class="notfound">
            <h1>404</h1>
            <img
              src={errorImage}
              alt="404 error"
              width="350px"
              height="400px"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Error404;
