# Project Employee Docs

`Project Employee`의 제품 기획, 기능 정의, 기술 결정, 운영 기준을 정리하는 문서 공간입니다.

이 디렉터리는 "문서를 많이 남겼다"보다 "어떤 문제의식과 판단으로 만들고 있는가"를 보여주는 데 목적이 있습니다.
기획 초안, 기술 결정, 추적 이벤트, 구현 범위는 가능한 한 이곳에 축적합니다.

현재 기존 예시 문서들은 각 디렉터리의 `examples/` 폴더로 옮겨 보존하고 있습니다.
이 예시 문서들은 기록 보존용 아카이브이며, 현재 기획 의사결정의 기준 문서로 사용하지 않습니다.
실제 기준 문서는 각 폴더 루트에 있는 문서와 `docs/기획.md`, `docs/스토리.md` 원문 메모입니다.

## 먼저 읽기

새 세션에서 이 프로젝트를 빠르게 이해하려면 아래 순서로 읽습니다.

1. [PRODUCT_OVERVIEW](./product/PRODUCT_OVERVIEW.md)
2. [CORE_LOOP](./product/CORE_LOOP.md)
3. [NARRATIVE_OVERVIEW](./product/NARRATIVE_OVERVIEW.md)
4. [WORLD_BUILDING](./product/WORLD_BUILDING.md)
5. [EXPERIENCE_PRINCIPLES](./product/EXPERIENCE_PRINCIPLES.md)
6. [quest-system-prd.md](./quests/quest-system-prd.md)
7. [ending-axes-prd.md](./quests/ending-axes-prd.md)
8. [intranet-board-structure-prd.md](./features/intranet-board-structure-prd.md)
9. [TRACKING_PLAN](./analytics/TRACKING_PLAN.md)
10. `examples/`는 보존용이므로 현재 요구사항 해석의 기준으로 사용하지 않습니다.

## 이 프로젝트를 읽는 관점

이 프로젝트는 일반적인 CRUD 서비스처럼 기능 목록만으로 이해하지 않습니다.
항상 아래 순서로 해석합니다.

1. 사용자가 어떤 경험을 하도록 만들려는가
2. 그 경험을 성립시키는 퀘스트 또는 서사 목표가 무엇인가
3. 그 목표를 수행하게 만드는 상호작용 기능이 무엇인가
4. 그 과정에서 확인해야 할 상태 변화, 이벤트, 기술 제약이 무엇인가

즉 하나의 요청은 보통 단일 문서만 읽고 답하지 않습니다.
필요에 따라 `product/`, `quests/`, `features/`, `analytics/`, `tech/`, `adr/`를 함께 참고합니다.

## 예시 해석

예: "수상한 게시글에서 작성자 아이디를 찾고, 그 아이디로 채팅을 보내면 클리어되는 퀘스트"를 설계할 때는 아래 순서로 해석합니다.

1. 이 퀘스트가 어떤 경험을 주려는지 `product/`에서 확인합니다.
2. 퀘스트 구조와 완료 보상을 `quests/`에서 확인합니다.
3. 게시글 탐색과 메시지 전송 상호작용을 `features/`에서 확인합니다.
4. 필요하면 성공 기준은 `analytics/`, 구현 제약은 `tech/`와 `adr/`에서 확인합니다.

이 예시처럼 이 프로젝트는 보통 `퀘스트 문서 하나`만 보고 설계하지 않고, 경험 문서와 기능 문서를 함께 엮어서 해석합니다.

## 문서 해석 원칙

- `product/`는 이 서비스가 어떤 경험을 주려는지, 어떤 서사 방향과 세계관 규칙을 가졌는지 설명합니다.
- `quests/`는 사용자가 무엇을 해결하고 어떤 서사 반응을 받는지 설명합니다.
- `features/`는 사용자가 실제로 어떤 입력과 상호작용을 수행하는지 설명합니다.
- `analytics/`는 경험이 의도대로 작동하는지 무엇으로 판단할지 설명합니다.
- `tech/`, `adr/`는 구현 제약과 기술 결정의 이유를 설명합니다.
- `ops/`는 문서 운영 방식과 작성 기준을 설명합니다.

이 프로젝트는 "기능 하나"만 떼어 생각하기보다 `경험 -> 퀘스트 -> 기능 -> 측정/구현` 순서로 분해하는 것이 기본 원칙입니다.

## 디렉터리 구조

- `product/`: 프로젝트 개요, 코어 루프, 사용자 흐름, 서사 방향, 세계관 규칙
- `features/`: 사용자의 입력과 화면 상호작용을 구성하는 기능 PRD
- `quests/`: 퀘스트 구조, 완료 조건, 서사 반응을 다루는 문서
- `analytics/`: 이벤트 측정 기준과 성공 지표
- `tech/`: API와 시스템 구조 관련 기준
- `adr/`: 주요 기술 결정 기록
- `ops/`: 문서 운영 방식과 협업 기준
- 각 디렉터리의 `examples/`: 기존 예시 문서 보관용 아카이브

## 파일명 규칙

- `adr/`: `0001-use-nextjs-app-router.md`처럼 번호 + 케밥 케이스를 사용합니다.
- `product/`: `PRODUCT_OVERVIEW.md`, `MVP_SCOPE.md`처럼 대문자 스네이크 케이스를 사용합니다.
- `features/`, `quests/`: `message-submission-prd.md`, `first-directive-quest-prd.md`처럼 케밥 케이스를 사용합니다.
- `analytics/`, `tech/`, `ops/`: 대표 기준 문서는 대문자 스네이크 케이스를 사용합니다.
- 템플릿 문서는 각 폴더 안에서 `*_TEMPLATE.md` 형식을 사용합니다.
- 예시 문서를 보관할 때는 각 폴더의 `examples/` 아래에 둡니다.

## 문서 상태

- `Example Draft`: 문서 구조와 작성 방향을 보여주기 위한 예시 문서
- `Draft`: 실제 내용을 작성 중인 초안 문서
- `Active`: 현재 기준으로 참고하는 활성 문서
- `Archived`: 더 이상 기준 문서는 아니지만 참고를 위해 보관하는 문서

모든 문서는 아래 메타 형식을 문서 상단에 둡니다.

```md
> Status: Example Draft
> Template: Product / Overview
> Note: 문서 구조와 작성 방향을 보여주기 위한 예시 문서입니다.
```

## 템플릿

- 템플릿은 각 폴더 안의 `*_TEMPLATE.md` 파일로 관리합니다.
- 기존 예시 문서는 각 폴더의 `examples/` 아래에 보관합니다.
- `examples/` 문서는 현재 요구사항이나 세계관의 사실 관계를 판단하는 기준으로 사용하지 않습니다.
- 새 문서를 만들 때는 가장 가까운 템플릿을 복사해 시작합니다.
- 기존 예시 문서를 실제 문서로 바꿀 때도 먼저 템플릿 기준 항목을 확인합니다.
- 현재 템플릿 예시는 [PRODUCT_TEMPLATE.md](./product/PRODUCT_TEMPLATE.md), [FEATURE_PRD_TEMPLATE.md](./features/FEATURE_PRD_TEMPLATE.md), [QUEST_PRD_TEMPLATE.md](./quests/QUEST_PRD_TEMPLATE.md)처럼 각 폴더에서 바로 찾을 수 있습니다.

## 문서 운영 원칙

- 문서는 실제 구현 방향을 정하는 데 쓰인 내용만 남깁니다.
- 아직 확정되지 않은 내용은 "가설"과 "추후 검증 필요"를 명시합니다.
- 구현이 바뀌면 관련 문서도 함께 갱신합니다.
- 화면 묘사보다 사용자 경험, 상태 변화, 이벤트 측정, 기술 판단 근거를 우선합니다.
