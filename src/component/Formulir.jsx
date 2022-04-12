import { useState } from "react";

const FormulirDaftar = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [tlpn, setTlpn] = useState("");
  const [email, setEmail] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [gambar, setGambar] = useState("");
  const [DaftarAnggota, setDaftarAnggota] = useState([]);

  const simpan = () => {
    setDaftarAnggota([
      ...DaftarAnggota,
      {
        nama,
        nim,
        email,
        tlpn,
        jurusan,
        gambar,
      },
    ]);
    setNama("");
    setNim("");
    setEmail("");
    setTlpn("");
    setJurusan("");
    setGambar("");
    alert("Data berhasil disimpan");
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="card">
          <div className="card-header">
            <h3>Formulir Pendaftaran</h3>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="nama">Nama</label>
              <input
                type="text"
                className="form-control"
                id="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="tulis nama lengkap"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nim">NIM</label>
              <input
                type="text"
                className="form-control"
                id="nim"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="tulis nama lengkap"
              />
            </div>
            <div className="form-group">
              <label htmlFor="tlpn">No Telepone</label>
              <input
                type="text"
                className="form-control"
                id="tlpn"
                value={tlpn}
                onChange={(e) => setTlpn(e.target.value)}
                placeholder="081xxxxxxxx"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Painjo@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="jurusan">Jurusan</label>
              <select
                name=""
                id="jurusan"
                className="form-control"
                value={jurusan}
                onChange={(e) => setJurusan(e.target.value)}
              >
                <option value="TI">Teknik Informatika</option>
                <option value="MI">Management Informatika</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="gambar">Foto Anda</label>
              <input
                type="file"
                className="form-control"
                id="gambar"
                value={gambar}
                onChange={(e) => setGambar(e.target.value)}
                placeholder="masukkan Foto Anda"
              />
            </div>

            <button type="button" className="btn btn-primary" onClick={simpan}>
              Simpan
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-header">
            <h3> Daftar Anggota</h3>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama</th>
                  <th scope="col">NIM</th>
                  <th scope="col">No Telpone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Jurusan</th>
                  <th scope="col">File Foto</th>
                </tr>
              </thead>
              <tbody>
                {DaftarAnggota.map((anggota, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{anggota.nama}</td>
                      <td>{anggota.nim}</td>
                      <td>{anggota.tlpn}</td>
                      <td>{anggota.email}</td>
                      <td>{anggota.jurusan}</td>
                      <td>{anggota.gambar}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormulirDaftar;
