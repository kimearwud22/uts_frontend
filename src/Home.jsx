import Header from "./component/Header";
import FormulirDaftar from "./component/Formulir";
import KartuAnggota from "./component/Card";
const Home = () => {
  return (
    <>
      <Header />
      <div className="daftar">
        <FormulirDaftar />
      </div>
      <div className="container">
        <div className="card-header text-center">
          <h3>Kartu Anggota</h3>
        </div>
        <div className="card-body">
          <div className="row mt-3">
            <div className="col col-sm-6 col-md-4 col-lg-3">
              <KartuAnggota
                img="img/laki.png"
                nama="hakim"
                nim="1129171818"
                tlpn="01826625181"
                jurusan="Teknik Informatika"
              />
            </div>

            <div className="col col-sm-6 col-md-4 col-lg-3">
              <KartuAnggota
                img="img/laki.png"
                nama="liqman"
                nim="1129171818"
                tlpn="01826625181"
                jurusan="Teknik Informatika"
              />
            </div>
            <div className="col col-sm-6 col-md-4 col-lg-3">
              <KartuAnggota
                nama="hakim"
                nim="1129171818"
                tlpn="01826625181"
                jurusan="Teknik Informatika"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
