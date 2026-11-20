import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./SeoAudit.scss";
import StyleContext from "../../contexts/StyleContext";
import {seoAuditSection} from "../../portfolio";

export default function SeoAudit() {
  const {isDark} = useContext(StyleContext);
  if (!seoAuditSection.display) {
    return null;
  }

  const levelClass = level => {
    if (level === "严重") return "audit-badge audit-badge-high";
    if (level === "中等") return "audit-badge audit-badge-mid";
    return "audit-badge audit-badge-low";
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="seo-audit">
        <div className="audit-header">
          <h1 className={isDark ? "dark-mode audit-title" : "audit-title"}>
            {seoAuditSection.title}
          </h1>
          <p
            className={
              isDark ? "dark-mode audit-subtitle" : "subTitle audit-subtitle"
            }
          >
            {seoAuditSection.subtitle}
          </p>
          <p
            className={
              isDark ? "dark-mode audit-meta" : "audit-meta"
            }
          >
            <i className="fas fa-file-magnifying-glass" aria-hidden="true"></i>{" "}
            {seoAuditSection.reportMeta.site} · {seoAuditSection.reportMeta.date}
            <br />
            {seoAuditSection.reportMeta.scope}
          </p>
        </div>

        <div className="audit-scores">
          {seoAuditSection.scoreCards.map((s, i) => (
            <div className={isDark ? "dark-mode audit-score" : "audit-score"} key={i}>
              <span className="audit-score-label">{s.label}</span>
              <div className="audit-score-values">
                <span className="audit-score-before">{s.before}</span>
                <i className="fas fa-arrow-right audit-score-arrow"></i>
                <span className="audit-score-after">
                  {s.after}
                  {s.unit ? <em>{s.unit}</em> : null}
                </span>
              </div>
              {s.delta && <span className="audit-score-note">{s.delta}</span>}
            </div>
          ))}
        </div>

        <div className={isDark ? "dark-mode audit-table-wrap" : "audit-table-wrap"}>
          <table className="audit-table">
            <thead>
              <tr>
                <th>优先级</th>
                <th>问题</th>
                <th>业务影响</th>
                <th>修复动作</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              {seoAuditSection.issues.map((it, i) => (
                <tr key={i}>
                  <td>
                    <span className={levelClass(it.level)}>{it.level}</span>
                  </td>
                  <td className="audit-item">{it.item}</td>
                  <td>{it.impact}</td>
                  <td>{it.fix}</td>
                  <td>
                    <span className="audit-status">{it.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="audit-artifacts">
          {seoAuditSection.artifacts.map((a, i) => (
            <a
              className={isDark ? "dark-mode audit-artifact" : "audit-artifact"}
              href={a.url}
              key={i}
            >
              <i className={a.icon} aria-hidden="true"></i>
              <div>
                <h3>{a.name}</h3>
                <p>{a.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Fade>
  );
}
