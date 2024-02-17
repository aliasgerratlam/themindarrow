import { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import PageTitle from '../ui/PageTitle';
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <div className="policy-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Privacy policy - Themindarrow</title>
          <meta name="description" content="At Mindarrow Media we are committed to maintaining a fair and transparent affiliate marketing program."></meta>
          <meta name="keywords" content="Privacy policy"></meta>
        </Helmet>
  
        <PageTitle title="Privacy policy" />
  
        <Container>
          <div className="content">
            <h1 className="mb-4">Publisher Policy for Compliance with TCPA Rules and FCC Guidelines</h1>
            <h6>
              <strong>Introduction:</strong>
            </h6>
            <p>This policy outlines the guidelines and procedures that publishers must adhere to in order to ensure compliance with the Telephone Consumer Protection Act (TCPA) rules and Federal Communications Commission (FCC) guidelines. Compliance with these regulations is essential to maintain ethical standards and avoid legal repercussions.</p>
  
            <h5 className="mb-3 mt-4 fw-bold">Consent Requirements:</h5>
            <h6>
              <strong>Prior Express Written Consent:</strong>
            </h6>
            <p>Publishers must obtain prior express written consent from individuals before sending any commercial messages via telephone calls, text messages, or faxes.</p>
  
            <h6>
              <strong>Clear and Conspicuous Disclosure:</strong>
            </h6>
            <p>Publishers must provide clear and conspicuous disclosures regarding the purpose of collecting contact information and obtaining consent for communication.</p>
  
            <h6>
              <strong>Opt-in Mechanism:</strong>
            </h6>
            <p>Publishers must implement an opt-in mechanism that allows individuals to provide explicit consent to receive communications.</p>
  
            <h6>
              <strong>Identification and Contact Information:</strong>
            </h6>
            <p>Publishers must clearly identify themselves in all communications sent to consumers.</p>
  
            <h6>
              <strong>Incentivized Traffic:</strong>
            </h6>
            <p>Publishers must not offer incentives, monetary or otherwise, to users in exchange for clicks, leads, or conversions.</p>
            <p>Contact information including the physical address, telephone number, and email address of the sender must be provided in communications.</p>
  
            <h5 className="mb-3 mt-4 fw-bold">Frequency and Content of Communications:</h5>
            <p>Publishers must limit the frequency of communications to avoid spamming or overwhelming recipients.</p>
            <p>Communications must contain accurate and relevant information related to the products or services being offered.</p>
            <p>Publishers must ensure that communications comply with all applicable advertising laws and regulations.</p>
  
            <h6>
              <strong>Compliance Monitoring and Record-Keeping:</strong>
            </h6>
            <p>Publishers must establish internal processes to monitor compliance with TCPA rules and FCC guidelines.</p>
            <p>Records of consent, communication history, and opt-out requests must be maintained for a minimum period as required by law.</p>
  
            <h5 className="mb-3 mt-4 fw-bold">Handling Opt-Out Requests:</h5>
            <p>Publishers must provide recipients with a clear and easy-to-use mechanism to opt out of further communications.</p>
            <p>Opt-out requests must be promptly honored, and recipients should be removed from communication lists within a reasonable timeframe.</p>


            <h5 className="mb-3 mt-4 fw-bold">Training and Awareness:</h5>
            <p>Publishers must provide training to employees involved in marketing and communications to ensure awareness of TCPA rules and FCC guidelines.</p>
            <p>Regular updates and reminders regarding compliance obligations should be communicated to relevant staff members.</p>

            <h5 className="mb-3 mt-4 fw-bold">Review and Update:</h5>
            <p>This policy shall be reviewed periodically to ensure alignment with any updates or changes to TCPA rules or FCC guidelines.</p>
            <p>Amendments or revisions to the policy shall be promptly communicated to all relevant stakeholders.</p>

            <h5 className="mb-3 mt-4 fw-bold">Non-Compliance Consequences:</h5>
            <p>Failure to comply with this policy may result in disciplinary action, including but not limited to termination of employment or contract.</p>
            <p>Legal consequences arising from non-compliance shall be borne by the responsible parties.</p>

            <h5 className="mb-3 mt-4 fw-bold">Reporting Violations:</h5>
            <p> Employees or stakeholders who become aware of potential violations of this policy are encouraged to report such instances to designated compliance officers or legal representatives.</p>
            <p>Reports of violations shall be promptly investigated, and appropriate corrective action shall be taken.</p>

            <h5 className="mb-3 mt-4 fw-bold">Conclusion:</h5>
            <p>Adherence to this policy is crucial for maintaining the integrity of our operations and fostering trust with consumers. By following TCPA rules and FCC guidelines diligently, we demonstrate our commitment to ethical marketing practices and consumer privacy. Compliance with these regulations not only protects our organization from legal risks but also upholds our reputation as responsible publishers in the industry</p>
          </div>
        </Container>
      </div>
    );
  };
export default PrivacyPolicy