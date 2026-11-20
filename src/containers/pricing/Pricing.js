import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Pricing.scss";
import StyleContext from "../../contexts/StyleContext";
import {pricingSection} from "../../portfolio";

export default function Pricing() {
  const {isDark} = useContext(StyleContext);
  if (!pricingSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="pricing">
        <div className="pricing-header">
          <h1 className={isDark ? "dark-mode pricing-title" : "pricing-title"}>
            {pricingSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode pricing-subtitle"
                : "subTitle pricing-subtitle"
            }
          >
            {pricingSection.subtitle}
          </p>
        </div>

        <div className="pricing-grid">
          {pricingSection.plans.map((plan, i) => (
            <div
              className={
                (isDark ? "dark-mode pricing-card" : "pricing-card") +
                (plan.highlight ? " pricing-card-highlight" : "")
              }
              key={i}
            >
              {plan.highlight && (
                <span className="pricing-flag">最常被选择</span>
              )}
              <h2 className="pricing-name">{plan.name}</h2>
              <p className="pricing-price">{plan.price}</p>
              <span className="pricing-cycle">{plan.cycle}</span>
              <p className="pricing-desc">{plan.desc}</p>

              <ul className="pricing-features">
                {plan.features.map((f, j) => (
                  <li key={j}>
                    <i className="fas fa-check" aria-hidden="true"></i> {f}
                  </li>
                ))}
              </ul>

              <a className="pricing-cta" href="#contact">
                咨询这一档
              </a>
            </div>
          ))}
        </div>

        <div className={isDark ? "dark-mode pricing-addons" : "pricing-addons"}>
          <h2 className="pricing-subhead">单项服务</h2>
          <div className="pricing-addon-grid">
            {pricingSection.addons.map((a, i) => (
              <div className="pricing-addon" key={i}>
                <div className="pricing-addon-main">
                  <span className="pricing-addon-name">{a.name}</span>
                  <span className="pricing-addon-note">{a.note}</span>
                </div>
                <span className="pricing-addon-price">{a.price}</span>
              </div>
            ))}
          </div>
          <ul className="pricing-notes">
            {pricingSection.notes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fade>
  );
}
