import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PageTitle from '../ui/PageTitle';
import { Container } from 'react-bootstrap';

const FraudTrafficPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fraud traffic policy - Themindarrow</title>
        <meta name="description" content="At Mindarrow Media we are committed to maintaining a fair and transparent affiliate marketing program."></meta>
        <meta name="keywords" content="Fraud traffic policy"></meta>
      </Helmet>

      <PageTitle title="Fraud Traffic Policy" />

      <Container>
        <div className="content">
          <h1 className="mb-4">Fraud Traffic Policy</h1>
          <h6>
            <strong>Introduction:</strong>
          </h6>
          <p>At Mindarrow Media we are committed to maintaining a fair and transparent affiliate marketing program. This Fraud Traffic Policy is designed to establish guidelines for our publishers to prevent fraudulent activities and maintain the integrity of our network.</p>

          <h5 className="mb-3 mt-4 fw-bold">Prohibited Activities:</h5>
          <h6>
            <strong>Click Fraud:</strong>
          </h6>
          <p>Publishers are strictly prohibited from engaging in any form of click fraud, including but not limited to artificially inflating clicks, using automated click-generating tools, or encouraging others to click on affiliate links illegitimately.</p>

          <h6>
            <strong>Lead Fraud:</strong>
          </h6>
          <p>Publishers must not generate leads through deceptive practices, such as submitting false or misleading information, using fake user details, or employing automated scripts to submit leads.</p>

          <h6>
            <strong>Cookie Stuffing:</strong>
          </h6>
          <p>Publishers are prohibited from using any techniques that involve cookie stuffing, including, but not limited to, forcing cookies without user interaction or misleading users into unintended clicks.</p>

          <h6>
            <strong>Impersonation:</strong>
          </h6>
          <p>Publishers must not impersonate Mindarrow Media or engage in any deceptive practices that may mislead users into believing they are interacting with Mindarrow Media directly.</p>

          <h6>
            <strong>Incentivized Traffic:</strong>
          </h6>
          <p>Publishers must not offer incentives, monetary or otherwise, to users in exchange for clicks, leads, or conversions.</p>

          <h5 className="mb-3 mt-4 fw-bold">Detection and Consequences:</h5>

          <h6>
            <strong>Monitoring:</strong>
          </h6>
          <p>Mindarrow Media will actively monitor affiliate activities to detect any fraudulent practices. This may include the use of tracking tools, data analysis, and manual reviews.</p>

          <h6>
            <strong>Consequences:</strong>
          </h6>
          <p>Violation of this Fraud Traffic Policy may result in immediate termination of the affiliate relationship with Mindarrow Media. In addition, Mindarrow Media reserves the right to withhold any pending payments and pursue legal action if necessary.</p>

          <h5 className="mb-3 mt-4 fw-bold">Reporting Fraudulent Activity:</h5>
          <p>
            If you suspect fraudulent activity within the affiliate program, please report it promptly to our fraud detection team at{' '}
            <a href="mailto:fraud-reporting-email@themindarrow.com" className="text-dark text-decoration-underline">
              fraud-reporting-email@themindarrow.com
            </a>
          </p>

          <h5 className="mb-3 mt-4 fw-bold">Policy Updates:</h5>
          <p>Mindarrow Media reserves the right to update and modify this Fraud Traffic Policy at any time. Affiliates will be notified of any changes, and it is their responsibility to review and comply with the updated policy.</p>

          <p>By participating in the Mindarrow Media affiliate program, affiliates acknowledge and agree to abide by this Fraud Traffic Policy.</p>
        </div>
      </Container>
    </div>
  );
};

export default FraudTrafficPolicy;
