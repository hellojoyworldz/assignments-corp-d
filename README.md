# D사 채용 - 과제 전형

[`componsnets`](/src/components/)  
디자인 시스템을 적용하여 일관된 디자인 요소들을 쉽게 사용할 수 있도록 코드를 작성하였고, 특히 재사용이 가능하도록 컴포넌트를 구성하였습니다.

[`hooks`](/src/hooks/)  
가독성과 재사용성을 위하여 사이드 이팩트 로직을 분리하여 훅을 만들었습니다.

[`utils`](/src/utils/)  
타입 정의나 정규 표현식과 같은 재사용이 많은 부분은 공통으로 사용할 수 있도록 구성하였습니다.

## 구동 방법

`$ npm install` 필요한 패키지를 설치합니다.  
`$ npm run dev` 개발 서버를 시작합니다.

## 기술

React, TypeScript, styled-components, SCSS

## 구현 요건

### 1. 폰트(webfont)

- [`font.scss`](/src/styles/font.scss)  
  폰트는 scss 믹스인 함수를 사용하여 정의하였습니다.
- [`variable.scss`](/src/styles/variable.scss)  
  공통으로 사용하는 속성을 변수로 지정하였습니다.
- [`helper.scss`](/src/styles/helper.tsx)  
  styled-components에서 props로 받아온 `fontSize` 값을 사용하여 타이포그래피를 적용할 수 있도록 공통함수를 작성하였습니다.

### 2. 첫번째 색션 - 프로필 카드는 페이지를 열때마다 순서가 임의로 배치

- [`ProfilesSection.tsx`](/src/pages/HomePage/components/ProfilesSection/ProfilesSection.tsx)  
  첫번째 색션의 데이터 배열을 랜덤함수를 사용하여 정렬하였습니다.

### 3. 두번째 섹션 - 이미지 랜덤 API를 이용해 임의의 이미지를 삽입하고, 같은 브라우저로 페이지를 다시 열거나 새로고침 해도 기존 이미지가 변경되지 않도록 구현

- [`useFetchImage.tsx`](/src/hooks/useFetchImage.tsx)  
  localStorage(브라우저)에 이미지가 없다면, 랜덤으로 이미지를 불러오고 localStorage에 저장합니다.  
  브라우저로 페이지를 다시 열거나 새로고침 하여도 localStorage에 저장된 이미지를 불러와 이미지가 변경되지 않도록 구현하였습니다.

### 4. 두번째 섹션 - input validation

- [`SubscribeSection.tsx`](/src/pages/HomePage/components/SubscribeSection/SubscribeSection.tsx)  
  이메일의 validation 체크하여 값을 `TextField.tsx`로 전달합니다.  
  비행기 모양의 구독 버튼을 누를 때 validation 체크를 하고 에러를 표시합니다.
- [`TextField.tsx`](/src/components/composites/TextField/TextField.tsx)  
  텍스트를 입력할 수 있는 컴포넌트 입니다. 실질적인 focuse, success, error 스타일링 처리가 이루어집니다.

### 5. 세번째 섹션 - 카드 데이터를 정의하고 2개의 필터 기능을 구현

- [`TabFilter.tsx`]('/src/components/composites/TabFilter.tsx')  
  첫 번째 필터 - 탭 형태의 필터 컴포넌트 입니다. 한 개의 탭만 선택할 수 있도록 구현하였습니다.
- [`RangeButtonFilter.tsx`]('/src/components/composites/RangeButtonFilter.tsx')  
  두 번째 필터 - 범위지정 형태의 필터 컴포넌트 입니다.  
  두개의 버튼을 클릭하면, 사이 있는 값까지 선택이 되어 범위를 지정할 수 있도록 구현하였습니다.
- [`CityCardList.tsx`](/src//components/features/CityCard/CityCardList/CityCardList.tsx)  
  카드 리스트 컴포넌트 입니다. 필터 조건에 맞는 결과값이 없을 때 화면이 정의되어 있습니다.
- [`CitySection.tsx`](/src/pages/HomePage/components/CitySection/CitySection.tsx)  
  필터의 초기값을 설정하고, 필터들을 통해 변화된 값을 감지하여 조건에 맞는 데이터를 필터링하여 리스트를 정의합니다.
