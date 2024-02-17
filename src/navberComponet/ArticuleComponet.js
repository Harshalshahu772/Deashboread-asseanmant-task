import ChartBox from "./ChartBox";
import ChartBox2 from "./ChartBox2";
import TableComponet from "./TableComponet";

const ArticuleComponet = () => {
  const cardData = [
    {
      id: 1,
      title: "Earning",
      amount: "$198",
      month: "37.8 this month",
      imageSrc: "image/mony.png",
    },
    {
      id: 2,
      title: "Spending",
      amount: "$150",
      month: "25.6 this month",
      imageSrc: "image/mony.png",
    },
    {
      id: 2,
      title: "Spending",
      amount: "$150",
      month: "25.6 this month",
      imageSrc: "image/mony.png",
    },
    {
      id: 2,
      title: "Spending",
      amount: "$150",
      month: "25.6 this month",
      imageSrc: "image/mony.png",
    },
    // Add more objects as needed
  ];
  return (
    <>
      <div className="conatiner-navber">
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <p className="navbar-brand">hello shahrukh</p>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>

        <div className="container mt-3">
          <div className="row g-2">
            {cardData.map((card) => (
              <div className="col" key={card.id}>
                <div
                  className="card"
                  style={{
                    width: "15rem",
                    height: "8rem",
                    borderRadius: "20px",
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-4 mt-2">
                      <img
                        src={card.imageSrc}
                        style={{ width: "6rem", height: "7rem" }}
                        className="card-img"
                        alt="Left Side Image"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ms-3">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.amount}</p>
                        <p className="card-text">
                          <small className="text-muted">{card.month}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container-fluid d-flex mt-5">
          <ChartBox />
          <ChartBox2 />
        </div>
        <TableComponet />
      </div>
    </>
  );
};
export default ArticuleComponet;
