package com.MoneyPlant.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MyWorkDto {
    private Long myWkId;
    private Long userId;
    private String myWkName; // 나의 근무 이름
    private int myPayType; // 나의 시급, 건별, 일급&월급
    private int myWkMoney; // 시급 : 시급 금액, 건별 : 건별 금액 / 월급 : 연봉
    private String myWkStart; // 나의 근무 시작 시간
    private String myWkEnd; // 나의 근무 종료 시간
    private int myWorkRest; // 나의 근무 휴식 시간
    private int myWorkCase; // 나의 근무 건별 횟수
    private double myWkTax; // 나의 근무 세금
    private String myPayday; // 나의 급여일
    private int myColor; // 나의 근무 color
    private int myWkPay; // 나의 1일 (또는 연봉) 급여 금액

}
