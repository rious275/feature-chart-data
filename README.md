# 프로젝트 내용

## 진행 과정

- 기획 내용 파악, 우선 순위 선정, API 확인, 기능 구현 순으로 진행하였습니다.
- styled component, axios, material-ui 라이브러리를 사용했습니다.
<br>

## 우선 순위

- 각 기능에서 가장 먼저 필요하다고 판단되는 부분을 우선 순위로 잡고 진행했습니다.
- 고민한 결과, 환자의 기본 정보를 우선으로 보여주고 데이터 양을 대비해 페이지네이션과 조건 맞춤 필터를 우선으로 잡았습니다.
- 그래프의 경우, 먼저 수치로만 표현 후에 그래픽화 시켜도 내용 이해에 문제가 없다고 판단하여 후 순위로 두었습니다.

1. 기본 정보 테이블 구현
2. 페이지네이션
3. 필터 기능
4. 상세 정보
5. 그래프
<br>

## 기능 구현

### API 데이터 받아오기

- 제공되는 API를 통해 데이터를 받아오려 했으나, 명세서의 내용을 정확히 파악하지 못해 목데이터로 진행했습니다.
- 쿼리, 파라미터 등으로 다양한 시도 끝에 최대한 비슷한 데이터를 제작해 진행하려 했습니다.

### 기본 정보 테이블 구현

- Material-UI를 사용해 구현했습니다.
- 최초 데이터를 불러온 후 테이블 내용에 적용했습니다.
- 메인 컬러를 선정해 포인트로 사용했습니다.

### 페이지네이션

- 페이지의 번호값을 넘겨주는 paginate 함수를 props로 내려, 클릭한 번호에 대한 정보를 다시 올려보내 해당 페이지를 출력 방식으로 진행했습니다.
- 목록에 노출되는 데이터의 수량은 select 태그를 사용했으며, 해당 value가 변할 때 값에 따라 페이지의 수량이 결정되는 방식으로 구현했습니다.

### 필터 기능 (미구현)

- 많은 양의 데이터 특성상 중첩되는 필터는 사용성 측면에서 오히려 혼란스러울 수 있다는 판단에 단일 필터를 적용할 예정입니다.
- 각 필터 버튼 클릭 시, 전체 데이터에서 filter 처리하여 filterList라는 새 데이터를 생성하고, 다시 페이지네이션하도록 구현할 예정입니다.

### 상세 정보

- material-ui의 collapse 기능을 활용하여 구현할 예정입니다.
- 목록을 클릭 시 해당 데이터를 기준, 아래쪽으로 새로운 내용이 생성되는 토글 형태로 구현될 예정입니다.
- 각 상세 정보에는 진단 정보, 전체 방문 수, 처방 정보가 포함될 예정입니다.

### 그래프

- Chart.js 라이브러리를 활용해 원형의 그래픽을 활용해 구현할 예정이었습니다.
<br>

## 프로젝트 clone 진행

- git clone 후 npm install을 진행합니다.
- 목데이터를 제작해 바로 화면 출력이 될 수 있도록 구현되어 있습니다.

전체 기능을 구현하지 못해 아쉽지만, 데이터와 명세를 보며 많은 점을 느낄 수 있었던 프로젝트였습니다.
감사합니다.
