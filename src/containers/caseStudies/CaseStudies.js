import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./CaseStudies.scss";
import StyleContext from "../../contexts/StyleContext";
import {caseStudiesSection} from "../../portfolio";

export default function CaseStudies() {
  const {isDark} = useContext(StyleContext);
  if (!caseStudiesSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="cases">
        <div className="cs-header">
          <h1 className={isDark ? "dark-mode cs-title" : "cs-title"}>
            {caseStudiesSection.title}
          </h1>
          <p
            className={
              isDark ? "dark-mode cs-subtitle" : "subTitle cs-subtitle"
            }
          >
            {caseStudiesSection.subtitle}
          </p>
        </div>

        <div className="cs-grid">
          {caseStudiesSection.cases.map((item, i) => (
            <div
              className={isDark ? "dark-mode cs-card" : "cs-card"}
              key={i}
            >
              <div className="cs-card-top">
                <span className="cs-icon">
                  <i className={item.icon} aria-hidden="true"></i>
                </span>
                <div className="cs-name-block">
                  <h2 className="cs-name">{item.name}</h2>
                  <span className="cs-tag">{item.tag}</span>
                </div>
              </div>

              <p className="cs-summary">{item.summary}</p>

              <div className="cs-metrics">
                {item.metrics.map((m, j) => (
                  <div className="cs-metric" key={j}>
                    <span className="cs-metric-label">{m.label}</span>
                    <div className="cs-metric-values">
                      <span className="cs-before">{m.before}</span>
                      <i
                        className="fas fa-arrow-right cs-arrow"
                        aria-hidden="true"
                      ></i>
                      <span className="cs-after">{m.after}</span>
                    </div>
                    <span className="cs-delta">{m.delta}</span>
                  </div>
                ))}
              </div>

              <ul className="cs-bullets">
                {item.bullets.map((b, k) => (
                  <li key={k}>{b}</li>
                ))}
              </ul>

              <div className="cs-footer">
                <span className="cs-duration">
                  <i className="far fa-clock" aria-hidden="true"></i>{" "}
                  {item.duration}
                </span>
                {item.link && item.link.url && (
                  <a className="cs-link" href={item.link.url}>
                    {item.link.name}
                    <i
                      className="fas fa-arrow-right cs-link-arrow"
                      aria-hidden="true"
                    ></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
