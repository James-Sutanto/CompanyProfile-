import "/Users/jamessutanto/CompanyProfile-/company-profile/src/styles/Background.css";
import molding from '/Users/jamessutanto/CompanyProfile-/company-profile/src/img/Molding-min.JPG';
import design from '/Users/jamessutanto/CompanyProfile-/company-profile/src/img/Design-min.JPG';
import staff from '/Users/jamessutanto/CompanyProfile-/company-profile/src/img/Staff-min.JPG' ;

const Background = ({ heroCount }) => {
  let backgroundImage;

  if (heroCount === 0) {
    backgroundImage = <img src={molding} className="background fade-in" alt="Molding" />;
  } else if (heroCount === 1) {
    backgroundImage = <img src={design} className="background fade-in" alt="Design" />;
  } else if (heroCount === 2) {
    backgroundImage = <img src={staff} className="background fade-in" alt="Staff" />;
  }

  return (
    <div>
      {backgroundImage}
    </div>
  );
};

export default Background;