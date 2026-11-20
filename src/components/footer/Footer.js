import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import {greeting, contactInfo} from "../../portfolio";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(
            "☕ " +
              greeting.username +
              " · WordPress 建站 + 技术型 SEO，用可验证的数据说话"
          )}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          想聊合作？邮件 {contactInfo.email_address}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          基于开源主题{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>{" "}
          二次改造（MIT License）
        </p>
      </div>
    </Fade>
  );
}
