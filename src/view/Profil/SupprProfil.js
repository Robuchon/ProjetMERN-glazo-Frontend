import Service from "../../services";
import "./ProfilSuppr.css";

function SupprProfil(props) {
  const btnSuppr = async () => {
    let body = {
      _id: props.User._id,
    };
    let suppr = await Service.deleteProfil(body);
    console.log(suppr, "suppr 10 /SupprProfil");
    if (suppr.data.success) {
      props.setIsConnect(false);
      let logout = await Service.postLogout();
      console.log(logout, "logout 14 /SupprProfil");
    }
  };
  return (
    <div className="ParcheminSuppr">
      <div className="ConteneurSuppr">
        <p className="TitreSuppr">Cher Sponsor</p>
        <div className="SupprDiv">
          <p className="SupprP">Votre Pseudo</p>
          <p className="SupprP">{props.User.pseudo}</p>
          <p className="SupprP">Votre age</p>
          <p className="SupprP">{props.User.age}</p>
          <p className="SupprP">Votre genre</p>
          <p className="SupprP">{props.User.genre}e</p>
          <p className="SupprP">Votre Présentation</p>
          <p className="SupprP">{props.User.bio}</p>
        </div>
        <p className="FooterSuppr">
        <p className="BtnProfilSuppr" onClick={btnSuppr}>
            Supprimer
          </p>
        </p>
      </div>
    </div>
  );
}

export default SupprProfil;