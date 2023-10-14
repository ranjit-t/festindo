import { useNavigate, useLocation } from "react-router-dom";

function SingleEvent() {
  const navigate = useNavigate();

  const goBack = () => {
    if (window.location.href.includes("festindo")) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="px-[10vw] flex flex-col gap-10 w-screen justify-center items-center pt-[20vh] text-3xl cursor-pointer"
      onClick={goBack}
    >
      <h1>Sorry, Page Not Found!</h1>
      <p>Click Here Go Back</p>
    </div>
  );
}

export default SingleEvent;
