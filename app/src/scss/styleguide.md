# CSS Guide

by Nana (20-03-20)

## Fomratting

- 들여쓰기로 soft tabs (2 spaces) 를 사용합니다.
- 클래스 네임은 소문자와 숫자만 사용하며, 숫자는 1부터 시작합니다.
- 클래스 네임은 `-` 또는 `_`를 사용해 연결합니다.
- ID 셀렉터, 태그명 셀렉터는 사용하지 않습니다.
- 셀렉터는 한 줄에 하나씩 사용하며, 가독성을 위해 띄어쓰기를 사용합니다.
- scss 문법을 사용합니다.

```css
  .nanalike {
    border: 1px solid #000;
  }
```

## Comments

- 스타일시트의 주석은 `//`로 사용합니다.
- 주석은 대상이 되는 요소의 앞 라인에 작성합니다.

```css
  // 헤더 안의 로고
  .header__logo {
    color: $blue;
  }
```

## Structure

- OOCSS 와 BEM 을 섞어서 사용합니다. ([참고: Airbnb 스타일가이드](https://github.com/airbnb/css#oocss-and-bem))
- 기본적으로는 OOCSS를 따라, 구조와 스타일을 분리합니다.
- 클래스네임은 BEM을 따라, Block-Element-Modifier 순서대로 분리합니다.
- `_`는 자식을 나타낼 때, `--`는 변형을 나타낼 때 사용합니다.
- 자바스크립트에 바인드할 클래스는 접두어로 `.js-`를 추가합니다.

```HTML
  <!-- HTML -->
  <article class="listcard listcard--opened">
    <h1 class="listcard__title">Nanalike</h1>
    <div class="listcard__content">
      <div class="listcard__text">
        <p class="listcard__text-item color-primary">I'm Nana</p>
      </div>
      <button class="listcard__btn btn-small js-req-contact">Say Hello!</button>
    </div>
  </article>
```

```SCSS
  // SCSS
  .listcard {
    &__title {}
    &__content {}
    &__name {}

    //펼쳐진 리스트 카드의 경우
    &--opened {}
  }
```

## Variables

- 글로벌 변수는 `helpers/_variables.scss` 내에서 관리합니다.
- 변수의 이름은 `-`를 사용해 연결합니다.
- 로컬 변수(같은 파일 내에서만 사용될 변수)는 맨 앞에 접두어 `_`를 추가하여 사용합니다.
  
```SCSS
  // SCSS
  $color-primary: #f9c34b;
  .title {color: $color-primary;}
```

## SEO

- 화면 상에서 숨겨야 하지만 판독기 사용자에게 읽어줘야 할 때는 `.blind` 클래스네임을 지정하거나, `aria-label="{내용}"`을 사용합니다.
  
  ```HTML
  <button><span class="blind">메뉴</span></button>
  <!-- 또는 -->
  <button aria-label="닫기 버튼">X</button>
  ```

- 화면 상에서 보여야 하지만 판독기 사용자에겐 숨겨야 할 때는 `aria-hidden="true"`를 사용합니다.

  ```HTML
  <div class="icon" aria-hidden="true"></div>
  ```
  