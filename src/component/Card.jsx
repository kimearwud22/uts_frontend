const KartuAnggota = (props) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nama}</h5>
          <p className="card-text">
            {props.nim}
          </p>
          <p className="card-text">
            {props.tlpn}
          </p>
          <p className="card-text">
            {props.jurusan}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default KartuAnggota;
