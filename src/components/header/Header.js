import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  caseStudiesSection,
  seoAuditSection,
  wpDemoSection,
  pricingSection,
  blogSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewCases = caseStudiesSection.display;
  const viewAudit = seoAuditSection.display;
  const viewDemo = wpDemoSection.display;
  const viewSkills = skillsSection.display;
  const viewExperience = workExperiences.display;
  const viewPricing = pricingSection.display;
  const viewBlog = blogSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewCases && (
            <li>
              <a href="#cases">作品案例</a>
            </li>
          )}
          {viewAudit && (
            <li>
              <a href="#seo-audit">SEO 审计</a>
            </li>
          )}
          {viewDemo && (
            <li>
              <a href="#demo">实机 Demo</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">技术栈</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">服务经历</a>
            </li>
          )}
          {viewPricing && (
            <li>
              <a href="#pricing">报价</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">技术笔记</a>
            </li>
          )}
          <li>
            <a href="#contact">联系我</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
