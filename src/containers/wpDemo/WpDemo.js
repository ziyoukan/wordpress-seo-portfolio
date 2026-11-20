import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./WpDemo.scss";
import StyleContext from "../../contexts/StyleContext";
import {wpDemoSection} from "../../portfolio";

export default function WpDemo() {
  const {isDark} = useContext(StyleContext);
  if (!wpDemoSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "dark-mode main" : "main"} id="demo">
        <div className="demo-header">
          <h1 className={isDark ? "dark-mode demo-title" : "demo-title"}>
            {wpDemoSection.title}
          </h1>
          <p
            className={
              isDark ? "dark-mode demo-subtitle" : "subTitle demo-subtitle"
            }
          >
            {wpDemoSection.subtitle}
          </p>
        </div>

        <div className="demo-grid">
          {wpDemoSection.demos.map((d, i) => (
            <div className={isDark ? "dark-mode demo-card" : "demo-card"} key={i}>
              <div className="demo-card-head">
                <span className="demo-icon">
                  <i className={d.icon} aria-hidden="true"></i>
                </span>
                <h2 className="demo-name">{d.name}</h2>
              </div>

              <p className="demo-desc">{d.desc}</p>

              <div className="demo-tags">
                {d.tags.map((t, j) => (
                  <span className="demo-tag" key={j}>
                    {t}
                  </span>
                ))}
              </div>

              {d.account && (
                <p className="demo-account">
                  <i className="fas fa-key" aria-hidden="true"></i> 演示账号：
                  {d.account}
                </p>
              )}

              <div className="demo-actions">
                <a
                  className="demo-btn demo-btn-primary"
                  href={d.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  打开前台 <i className="fas fa-up-right-from-square"></i>
                </a>
                {d.adminUrl && (
                  <a
                    className="demo-btn demo-btn-ghost"
                    href={d.adminUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    进入后台
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className={isDark ? "dark-mode demo-tip" : "demo-tip"}>
          <i className="fas fa-circle-info" aria-hidden="true"></i>{" "}
          演示站点的域名、账号均为占位内容，请在
          <code>src/portfolio.js</code> 的
          <code>wpDemoSection</code> 中替换为你自己的演示环境地址。
        </p>
      </div>
    </Fade>
  );
}
