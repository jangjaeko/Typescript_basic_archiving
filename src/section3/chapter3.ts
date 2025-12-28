/**
 *  function overloading
 *  하나의 함수를 매개변수의 개수나 타입에 따라
 *  여러가지 버전으로 만드는 문법
 *  -> 하나의 함수 func
 *  -> ver1 매개변수 1개
 *  -> ver2 매개변수 3개
 */

// versions => overload signature
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현 부분 -> 구현 signature
//
function func(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

// func() error
func(1);
//func(1,2); error
func(1, 2, 3);
