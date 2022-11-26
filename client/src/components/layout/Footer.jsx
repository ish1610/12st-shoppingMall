import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h4>Team Project</h4>
      <p className={classes["footer-customCenter"]}>고객센터</p>
      <p className={classes["footer-nums"]}>1600-1600</p>

      <p className={classes["footer-noCall"]}>
        09:00 ~ 18:00 (주말, 공휴일은 전화상담 불가능)
      </p>
      <div className={classes["footer-nav"]}>
        <span>브랜드 스토리</span>
        <span>회사소개</span>
        <span>채용정보</span>
        <span>이용약관</span>
        <span className={classes["footer-nav__info"]}>개인정보처리방침</span>
        <span>공지사항</span>
        <span>고객센터</span>
        <span>고객의 소리</span>
        <span>전문가등록</span>
        <span>사업자 구매회원</span>
        <span>제휴/광고 문의</span>
        <span>입점신청 문의</span>
        <span>안전거래센터</span>
        <span>상품광고 소개</span>
      </div>
      <p className={classes["footer-mallInfo"]}>
        상호명: (주)12st 이메일:(고객문의)email@email.com (제휴문의)email@email
        <span className={classes["footer-leader"]}>조장:이국헌</span>
        사업자등록번호:123-12-12345 통신판매업신고번호 제2022-부산-0123호
        <span>사업자정보확인</span>
      </p>

      <p className={classes["footer-mallInfo"]}>
        12st는 개별 판매자가 상품을 판매하는 오픈마켓이며 (주)12st는
        통신판매중개자로 거래 당사자가 아니므로, 판매자가 등록한 상품정보 및
        거래 등에 대해 일체 책임을 지지않습니다.
      </p>
      <p className={classes["footer-mallInfo"]}>
        단, (주)12st가 판매자로 등록 판매한 상품의 경우는 판매자로서 책임을
        부담합니다.
      </p>

      <p className={classes["footer-copy"]}>
        &copy; 2022. 이국헌. 방정한. 이승현. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
