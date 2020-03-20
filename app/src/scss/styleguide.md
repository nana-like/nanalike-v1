# CSS Guide

by Nana (20-01-17)

## Fomratting

- 들여쓰기로 soft tabs (2 spaces) 를 사용합니다.
- 클래스 네임은 소문자만 사용하며, `-` 또는 `_`를 사용해 연결합니다.
- ID 셀렉터는 사용하지 않습니다.
- 셀렉터는 한 줄에 하나씩 사용하며, 가독성을 위해 띄어쓰기를 사용합니다.

```css
  .nanalike {
    border: 1px solid #000;
  }
```


## Comments
- 스타일시트의 주석은 `//`로 사용합니다.
- 주석은 새로운 줄에 작성합니다.


## Structure
- OOCSS 와 BEM 을 섞어서 사용합니다.
- 기본적으로는 OOCSS를 따라, 구조와 스타일을 분리합니다.
- 클래스네임은 BEM을 따라, Block-Element-Modifier 순서대로 분리합니다.
- Modifier는 `-`로 시작하며, 구체적으로 적습니다.
```
  <!-- HTML -->
  <article class="listcard -listcard-opened">
    <h1 class="listcard-title">타이틀입니다</h1>
    <div class="listcard-content">
      <p>Nanalike</p>
    </div>
  </article>
```

```
  // SCSS
  .listcard {
    &-title {}
    &-content {}
    &-listcasrd-opeend {
      //펼쳐진 리스트 카드의 경우
    }
  }
```

## Properties
- border가 없을 경우에는 속성으로 `none` 대신 `0`을 사용합니다.


## Variables
- 글로벌 변수는 `helpers/_variables.scss` 내에서 관리합니다.
- 변수의 이름은 `-`를 사용해 연결합니다.
- 로컬 변수(같은 파일 내에서만 사용될 변수)는 맨 앞에 접두어 `_`를 추가하여 사용합니다.


## SEO
- 화면 상에서 숨겨야 하지만 판독기 사용자에게 읽어줘야 할 때는 `.blind` 클래스네임을 지정하거나, `aria-label="{내용}"`을 사용합니다.
  ```
  <button><span class="blind">메뉴</span></button>
  //또는
  <button aria-label="닫기 버튼" onclick="myDialog.close()">X</button>
  ```
- 화면 상에서 보여야 하지만 판독기 사용자에겐 숨겨야 할 때는 `aria-hidden="true"`를 사용합니다.
  ```<div class="icon" aria-hidden="true"></div>```